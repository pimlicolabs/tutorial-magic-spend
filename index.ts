import { createSmartAccountClient } from "permissionless"
import { Address, Hex, createPublicClient, encodeFunctionData, getContract, http, parseAbi, parseEther, recoverMessageAddress, toHex } from "viem"
import { sepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import { entryPoint07Address } from "viem/account-abstraction";
import { createPimlicoClient } from "permissionless/clients/pimlico"
import { toSimpleSmartAccount } from "permissionless/accounts";
import { MagicSpendStakeManagerAbi } from "./abi/MagicSpendStakeManager";
import { MagicSpendWithdrawalManagerAbi } from "./abi/MagicSpendWithdrawalManager";

import "dotenv/config"
import { MagicSpendAllowance, MagicSpendWithdrawal } from "./types";

const RPC_URL = "https://11155111.rpc.thirdweb.com"
const ETH: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
const amount = 123; // 123 wei


const PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

if (PRIVATE_KEY === undefined) {
    throw new Error("ACCOUNT_PRIVATE_KEY env var is required")
}

const PIMLICO_URL = process.env.PIMLICO_URL;

if (PIMLICO_URL === undefined) {
    throw new Error("PIMLICO_URL env var is required")
}

export const publicClient = createPublicClient({
	transport: http(RPC_URL),
	chain: sepolia,
})
  
const pimlicoClient = createPimlicoClient({
	transport: http(PIMLICO_URL),
    chain: sepolia,
	entryPoint: {
		address: entryPoint07Address,
		version: "0.7",
	},
})


const sendMagicSpendRequest = async (method: string, params: any[]) => {
    const body = {
        jsonrpc: "2.0",
        method,
        params,
        id: 1,
    };

    console.log('=== magic spend request ===');
    console.log(JSON.stringify(body, null, 4));

    const response = await fetch(PIMLICO_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const j = await response.json();

    console.log('=== magic spend response ===');
    console.log(JSON.stringify(j, null, 4));
    console.log('============================');

    // @ts-ignore
    return j.result;
}


const main = async () => {
    const signer = privateKeyToAccount(PRIVATE_KEY as Hex)
    console.log(`Signer address: ${signer.address}`)

    const simpleAccount = await toSimpleSmartAccount({
        client: publicClient,
        owner: signer,
        entryPoint: {
            address: entryPoint07Address,
            version: "0.7",
        },
    });

    const smartAccountClient = createSmartAccountClient({
        account: simpleAccount,
        chain: sepolia,
        bundlerTransport: http(PIMLICO_URL, {
            timeout: 60_000,
        }),
        userOperation: {
            estimateFeesPerGas: async () => {
                return (await pimlicoClient.getUserOperationGasPrice()).fast
            },
        },
        paymaster: pimlicoClient,
    })

    // Check at least one stake exists
    const {
        stakeManagerAddress,
        withdrawalManagerAddress,
    } = await sendMagicSpendRequest(
        'pimlico_getMagicSpendContracts',
        []
    )
    const stakeManagerContract = getContract({
        abi: MagicSpendStakeManagerAbi,
        address: stakeManagerAddress,
        client: publicClient,
    })

    const stakes = await sendMagicSpendRequest(
        'pimlico_getMagicSpendStakes',
        [{
            account: signer.address,
            asset: ETH
        }]
    )
    
    if (stakes.length === 0) {
        throw new Error("No stakes found")
    }
    
    const allowance = (await sendMagicSpendRequest(
        'pimlico_prepareMagicSpendAllowance',
        [{
            account: signer.address,
            token: ETH,
            amount: toHex(amount),
        }]
    )) as MagicSpendAllowance;
    
    const hash_ = await stakeManagerContract.read.getAllowanceHash([
        {
            ...allowance,
            validAfter: Number(allowance.validAfter),
            validUntil: Number(allowance.validUntil),
            salt: Number(allowance.salt),
        }
    ]) as Hex;
    
    const allowanceSignature = await signer.signMessage({
        message: {
            raw: hash_,
        }
    })

    await sendMagicSpendRequest(
        "pimlico_grantMagicSpendAllowance",
        [{
            allowance,
            signature: allowanceSignature
        }]
    );

    const withdrawalManagerContract = getContract({
        abi: MagicSpendWithdrawalManagerAbi,
        address: withdrawalManagerAddress,
        client: publicClient,
    })
    
    const operatorRequestHash = await withdrawalManagerContract.read.getWithdrawalHash([
        {
            token: ETH,
            amount: BigInt(amount),
            chainId: BigInt(sepolia.id),
            recipient: simpleAccount.address,
            preCalls: [],
            postCalls: [],
            validUntil: Number(0),
            validAfter: Number(0),
            salt: 0
        }
    ]) as Hex;
    
    const operatorRequestSignature = await signer.signMessage({
        message: {
            raw: operatorRequestHash
        }
    })
    
    const [wiithdrawal, withdrawalSignature] = await sendMagicSpendRequest(
        "pimlico_sponsorMagicSpendWithdrawal",
        [{
            recipient: simpleAccount.address,
            token: ETH,
            amount,
            salt: 0,
            signature: operatorRequestSignature
        }]
    )

    const magicSpendCallData = encodeFunctionData({
        abi: MagicSpendWithdrawalManagerAbi,
        functionName: 'withdraw',
        args: [
            wiithdrawal,
            withdrawalSignature,
        ]
    })
    
    // Send user operation and withdraw funds
    // You can add subsequent calls after the withdrawal, like "buy NFT on OpenSea for ETH"
    const userOpHash = await smartAccountClient.sendUserOperation({
        account: simpleAccount,
        calls: [
            {
                to: withdrawalManagerAddress,
                value: parseEther("0"),
                data: magicSpendCallData,
            }
        ]
    })
    
    console.log(`Userop hash: ${userOpHash}`);
    
    const receipt = await pimlicoClient.waitForUserOperationReceipt({
        hash: userOpHash
    })
    
    console.log(`Transaction hash: ${receipt.receipt.transactionHash}`);
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit(0))
