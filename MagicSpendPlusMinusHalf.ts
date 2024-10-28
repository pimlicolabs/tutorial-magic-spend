export const MagicSpendPlusMinusHalfAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_signers",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "ETH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "TWO_WEEKS",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "addSigner",
    "inputs": [
      {
        "name": "_signer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addStake",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint128",
        "internalType": "uint128"
      },
      {
        "name": "unstakeDelaySec",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "claim",
    "inputs": [
      {
        "name": "request",
        "type": "tuple",
        "internalType": "struct Request",
        "components": [
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "fee",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "claimChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "preCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "postCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "validUntil",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "validAfter",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "unstakeDelaySec",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      },
      {
        "name": "signature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimMany",
    "inputs": [
      {
        "name": "requests",
        "type": "tuple[]",
        "internalType": "struct Request[]",
        "components": [
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "fee",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "claimChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "preCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "postCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "validUntil",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "validAfter",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "unstakeDelaySec",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      },
      {
        "name": "signatures",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getHash",
    "inputs": [
      {
        "name": "request",
        "type": "tuple",
        "internalType": "struct Request",
        "components": [
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "fee",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "claimChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "preCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "postCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "validUntil",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "validAfter",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "unstakeDelaySec",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getNonce",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "key",
        "type": "uint192",
        "internalType": "uint192"
      }
    ],
    "outputs": [
      {
        "name": "nonce",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStakeInfo",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "info",
        "type": "tuple",
        "internalType": "struct IStakeManager.StakeInfo",
        "components": [
          {
            "name": "stake",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "unstakeTime",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "incrementNonce",
    "inputs": [
      {
        "name": "key",
        "type": "uint192",
        "internalType": "uint192"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "nonceSequenceNumber",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint192",
        "internalType": "uint192"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeSigner",
    "inputs": [
      {
        "name": "_signer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "signers",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "isValidSigner",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "stakeOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "statuses",
    "inputs": [
      {
        "name": "hash_",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "withdrawn",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "claimed",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unstake",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address payable"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "request",
        "type": "tuple",
        "internalType": "struct Request",
        "components": [
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "fee",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "claimChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "preCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "postCalls",
            "type": "tuple[]",
            "internalType": "struct CallStruct[]",
            "components": [
              {
                "name": "to",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
              }
            ]
          },
          {
            "name": "validUntil",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "validAfter",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "unstakeDelaySec",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      },
      {
        "name": "signature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Deposit",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RequestExecuted",
    "inputs": [
      {
        "name": "hash_",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "executionType",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum RequestExecutionType"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SignerAdded",
    "inputs": [
      {
        "name": "signer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SignerRemoved",
    "inputs": [
      {
        "name": "signer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StakeUpdated",
    "inputs": [
      {
        "name": "event_",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IStakeManager.StakeUpdateEvent"
      },
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint128",
        "indexed": false,
        "internalType": "uint128"
      },
      {
        "name": "withdrawTime",
        "type": "uint128",
        "indexed": false,
        "internalType": "uint128"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "AlreadyUsed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ECDSAInvalidSignature",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ECDSAInvalidSignatureLength",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ECDSAInvalidSignatureS",
    "inputs": [
      {
        "name": "s",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "InsufficientFunds",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidUnstakeDelay",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OwnableInvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OwnableUnauthorizedAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "PostCallReverted",
    "inputs": [
      {
        "name": "revertReason",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "PreCallReverted",
    "inputs": [
      {
        "name": "revertReason",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "RequestExpired",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RequestInvalidChain",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RequestNotYetValid",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SignatureInvalid",
    "inputs": []
  },
  {
    "type": "error",
    "name": "StakeIsLocked",
    "inputs": []
  },
  {
    "type": "error",
    "name": "StakeTooHigh",
    "inputs": []
  },
  {
    "type": "error",
    "name": "StakeTooLow",
    "inputs": []
  }
] as const