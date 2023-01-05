export const WOOLBALL_ABI = [
  {
    "_format": "hh-sol-artifact-1",
    "contractName": "Woolball",
    "sourceName": "contracts/Woolball.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "LinkIDIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "arrLinksIDs",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "arrNames",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          }
        ],
        "name": "getIncomingLinkCount",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linkID",
            "type": "uint256"
          }
        ],
        "name": "getLinkee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linkID",
            "type": "uint256"
          }
        ],
        "name": "getLinker",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          }
        ],
        "name": "getOutgoingLinkCount",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "nameIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "nameLinkIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linker",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_linkee",
            "type": "uint256"
          }
        ],
        "name": "newLink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "newName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linkID",
            "type": "uint256"
          },
          {
            "internalType": "contract IThreadContent",
            "name": "_threadContent",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_closable",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_transfarable",
            "type": "bool"
          }
        ],
        "name": "newThread",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          }
        ],
        "name": "resolver",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_resolver",
            "type": "address"
          }
        ],
        "name": "setResolver",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "_ttl",
            "type": "uint64"
          }
        ],
        "name": "setTTL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linkID",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "__threadIndex",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "_newLinkee",
            "type": "uint256"
          }
        ],
        "name": "transferThread",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nameID",
            "type": "uint256"
          }
        ],
        "name": "ttl",
        "outputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linkID",
            "type": "uint256"
          }
        ],
        "name": "unlink",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_linkID",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "_threadIndex",
            "type": "uint32"
          }
        ],
        "name": "unthread",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f576f6f6c62616c6c0000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f574f4f4c0000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b61479180620005096000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c80638825dee111610125578063bc7b6d62116100ad578063d39878b41161007c578063d39878b41461067e578063e985e9c51461069a578063efb7dc13146106ca578063f1e023fd146106fa578063f2fde38b1461071657610211565b8063bc7b6d62146105e6578063bdb95ad914610602578063c83ec10114610632578063c87b56dd1461064e57610211565b8063a22cb465116100f4578063a22cb46514610546578063a4aec07514610562578063aac3afde1461057e578063b718cc3f1461059a578063b88d4fde146105ca57610211565b80638825dee1146104aa5780638da5cb5b146104da57806395d89b41146104f85780639a2372311461051657610211565b80632cb2b1b8116101a85780636352211e116101775780636352211e146103e057806370a0823114610410578063715018a61461044057806381f603801461044a578063876e782c1461047a57610211565b80632cb2b1b81461035c57806332c84e951461037857806342842e0e146103a85780634bab89d8146103c457610211565b8063095ea7b3116101e4578063095ea7b3146102c4578063108eaa4e146102e057806316dd54321461031057806323b872dd1461034057610211565b806301ffc9a714610216578063054685fc1461024657806306fdde0314610276578063081812fc14610294575b600080fd5b610230600480360381019061022b9190613389565b610732565b60405161023d91906133d1565b60405180910390f35b610260600480360381019061025b9190613422565b610814565b60405161026d919061346e565b60405180910390f35b61027e610844565b60405161028b9190613519565b60405180910390f35b6102ae60048036038101906102a99190613422565b6108d6565b6040516102bb919061357c565b60405180910390f35b6102de60048036038101906102d991906135c3565b61091c565b005b6102fa60048036038101906102f59190613422565b610a33565b604051610307919061357c565b60405180910390f35b61032a60048036038101906103259190613422565b610a73565b6040516103379190613612565b60405180910390f35b61035a6004803603810190610355919061362d565b610a97565b005b610376600480360381019061037191906136ea565b610af7565b005b610392600480360381019061038d9190613422565b610d3d565b60405161039f9190613612565b60405180910390f35b6103c260048036038101906103bd919061362d565b610d5d565b005b6103de60048036038101906103d99190613791565b610d7d565b005b6103fa60048036038101906103f59190613422565b610dc9565b604051610407919061357c565b60405180910390f35b61042a600480360381019061042591906137d1565b610e4f565b6040516104379190613612565b60405180910390f35b610448610f06565b005b610464600480360381019061045f9190613422565b610f1a565b604051610471919061380d565b60405180910390f35b610494600480360381019061048f9190613422565b610f4e565b6040516104a19190613612565b60405180910390f35b6104c460048036038101906104bf9190613828565b610f76565b6040516104d19190613612565b60405180910390f35b6104e2610fb3565b6040516104ef919061357c565b60405180910390f35b610500610fdd565b60405161050d9190613519565b60405180910390f35b610530600480360381019061052b9190613422565b61106f565b60405161053d9190613612565b60405180910390f35b610560600480360381019061055b9190613868565b611093565b005b61057c60048036038101906105779190613828565b6110a9565b005b610598600480360381019061059391906138a8565b611275565b005b6105b460048036038101906105af9190613422565b611320565b6040516105c19190613612565b60405180910390f35b6105e460048036038101906105df9190613a1d565b611340565b005b61060060048036038101906105fb91906138a8565b6113a2565b005b61061c60048036038101906106179190613422565b611406565b604051610629919061346e565b60405180910390f35b61064c60048036038101906106479190613acc565b611436565b005b61066860048036038101906106639190613422565b6119c7565b6040516106759190613519565b60405180910390f35b61069860048036038101906106939190613b1f565b611a2f565b005b6106b460048036038101906106af9190613b5f565b611c5c565b6040516106c191906133d1565b60405180910390f35b6106e460048036038101906106df9190613422565b611cf0565b6040516106f19190613612565b60405180910390f35b610714600480360381019061070f9190613422565b611d18565b005b610730600480360381019061072b91906137d1565b61229e565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107fd57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061080d575061080c82612321565b5b9050919050565b60006007600083815260200190815260200160002060020160049054906101000a900463ffffffff169050919050565b60606000805461085390613bce565b80601f016020809104026020016040519081016040528092919081815260200182805461087f90613bce565b80156108cc5780601f106108a1576101008083540402835291602001916108cc565b820191906000526020600020905b8154815290600101906020018083116108af57829003601f168201915b5050505050905090565b60006108e18261238b565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061092782610dc9565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098e90613c71565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109b66123d6565b73ffffffffffffffffffffffffffffffffffffffff1614806109e557506109e4816109df6123d6565b611c5c565b5b610a24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1b90613d03565b60405180910390fd5b610a2e83836123de565b505050565b60006007600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60088181548110610a8357600080fd5b906000526020600020016000915090505481565b610aa8610aa26123d6565b82612497565b610ae7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ade90613d95565b60405180910390fd5b610af283838361252c565b505050565b600060096000868152602001908152602001600020600001549050600060096000878152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060010160009054906101000a900463ffffffff169050600160076000858152602001908152602001600020600101600084815260200190815260200160002060010160008282829054906101000a900463ffffffff16610bb69190613de4565b92506101000a81548163ffffffff021916908363ffffffff160217905550600160076000858152602001908152602001600020600101600084815260200190815260200160002060010160048282829054906101000a900463ffffffff16610c1e9190613de4565b92506101000a81548163ffffffff021916908363ffffffff1602179055508560076000858152602001908152602001600020600101600084815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508573ffffffffffffffffffffffffffffffffffffffff166340314ae08887876040518463ffffffff1660e01b8152600401610d0293929190613e1c565b600060405180830381600087803b158015610d1c57600080fd5b505af1158015610d30573d6000803e3d6000fd5b5050505050505050505050565b600060096000838152602001908152602001600020600101549050919050565b610d7883838360405180602001604052806000815250611340565b505050565b81610d8781612825565b816007600085815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b600080610dd583612868565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3d90613e9f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ebf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb690613f31565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610f0e6128a5565b610f186000612923565b565b60006007600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff169050919050565b6000600a8281548110610f6457610f63613f51565b5b90600052602060002001549050919050565b6000600760008481526020019081526020016000206003018281548110610fa057610f9f613f51565b5b9060005260206000200154905092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610fec90613bce565b80601f016020809104026020016040519081016040528092919081815260200182805461101890613bce565b80156110655780601f1061103a57610100808354040283529160200191611065565b820191906000526020600020905b81548152906001019060200180831161104857829003601f168201915b5050505050905090565b600a818154811061107f57600080fd5b906000526020600020016000915090505481565b6110a561109e6123d6565b83836129e9565b5050565b816110b381612825565b6000600284846040516020016110ca929190613fa1565b6040516020818303038152906040526040516110e69190614014565b602060405180830381855afa158015611103573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906111269190614061565b60001c905083600960008381526020019081526020016000206000018190555082600960008381526020019081526020016000206001018190555060016007600086815260200190815260200160002060020160008282829054906101000a900463ffffffff166111979190613de4565b92506101000a81548163ffffffff021916908363ffffffff16021790555060016007600085815260200190815260200160002060020160048282829054906101000a900463ffffffff166111eb9190613de4565b92506101000a81548163ffffffff021916908363ffffffff160217905550600a8190806001815401808255809150506001900390600052602060002001600090919091909150556007600085815260200190815260200160002060030183908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b61127d6128a5565b60006007600084815260200190815260200160002060020160006101000a81548163ffffffff021916908363ffffffff16021790555060006007600084815260200190815260200160002060020160046101000a81548163ffffffff021916908363ffffffff1602179055506112f38183612b55565b60088290806001815401808255809150506001900390600052602060002001600090919091909150555050565b600060096000838152602001908152602001600020600001549050919050565b61135161134b6123d6565b83612497565b611390576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138790613d95565b60405180910390fd5b61139c84848484612d72565b50505050565b816113ac81612825565b816007600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60006007600083815260200190815260200160002060020160009054906101000a900463ffffffff169050919050565b600060096000858152602001908152602001600020600001549050600060096000868152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060000160008663ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600284866040516020016114f2929190613fa1565b60405160208183030381529060405260405161150e9190614014565b602060405180830381855afa15801561152b573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061154e9190614061565b60001c90508173ffffffffffffffffffffffffffffffffffffffff1663289df2cb8883336040518463ffffffff1660e01b81526004016115909392919061408e565b600060405180830381600087803b1580156115aa57600080fd5b505af11580156115be573d6000803e3d6000fd5b5050505060006009600083815260200190815260200160002060000154036116bf5783600960008381526020019081526020016000206000018190555084600960008381526020019081526020016000206001018190555060016007600086815260200190815260200160002060020160008282829054906101000a900463ffffffff1661164c9190613de4565b92506101000a81548163ffffffff021916908363ffffffff16021790555060016007600087815260200190815260200160002060020160048282829054906101000a900463ffffffff166116a09190613de4565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b600060076000868152602001908152602001600020600101600087815260200190815260200160002060010160009054906101000a900463ffffffff169050600160076000878152602001908152602001600020600101600088815260200190815260200160002060010160008282829054906101000a900463ffffffff166117489190613de4565b92506101000a81548163ffffffff021916908363ffffffff1602179055508260076000878152602001908152602001600020600101600088815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000878152602001908152602001600020600101600086815260200190815260200160002060000160008963ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000878152602001908152602001600020600101600086815260200190815260200160002060000160008963ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160076000878152602001908152602001600020600101600086815260200190815260200160002060010160048282829054906101000a900463ffffffff1661194d91906140c5565b92506101000a81548163ffffffff021916908363ffffffff160217905550600060076000878152602001908152602001600020600101600086815260200190815260200160002060010160049054906101000a900463ffffffff1663ffffffff16036119bd576119bc88611d18565b5b5050505050505050565b60606119d28261238b565b60006119dc612dce565b905060008151116119fc5760405180602001604052806000815250611a27565b80611a0684612de5565b604051602001611a17929190614139565b6040516020818303038152906040525b915050919050565b600060096000848152602001908152602001600020600001549050600060096000858152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060000160008563ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663fdf3052486336040518363ffffffff1660e01b8152600401611b0f92919061415d565b600060405180830381600087803b158015611b2957600080fd5b505af1158015611b3d573d6000803e3d6000fd5b50505050600060076000858152602001908152602001600020600101600084815260200190815260200160002060000160008663ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060000160008663ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600060088281548110611d0657611d05613f51565b5b90600052602060002001549050919050565b600060096000838152602001908152602001600020600001549050600060096000848152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060010160009054906101000a900463ffffffff16905060005b8163ffffffff168163ffffffff16101561212f57600073ffffffffffffffffffffffffffffffffffffffff1660076000868152602001908152602001600020600101600085815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611f2b575060076000858152602001908152602001600020600101600084815260200190815260200160002060000160008263ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634d6861a6866040518263ffffffff1660e01b8152600401611ee99190613612565b602060405180830381865afa158015611f06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2a919061419b565b5b1561211c5760076000858152602001908152602001600020600101600084815260200190815260200160002060000160008263ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fdf3052486336040518363ffffffff1660e01b8152600401611fd592919061415d565b600060405180830381600087803b158015611fef57600080fd5b505af1158015612003573d6000803e3d6000fd5b50505050600060076000868152602001908152602001600020600101600085815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000868152602001908152602001600020600101600085815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8080612127906141c8565b915050611d90565b50600060076000858152602001908152602001600020600101600084815260200190815260200160002060010160006101000a81548163ffffffff021916908363ffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060010160046101000a81548163ffffffff021916908363ffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6122a66128a5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161230c90614266565b60405180910390fd5b61231e81612923565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61239481612eb3565b6123d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123ca90613e9f565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661245183610dc9565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806124a383610dc9565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124e557506124e48185611c5c565b5b8061252357508373ffffffffffffffffffffffffffffffffffffffff1661250b846108d6565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661254c82610dc9565b73ffffffffffffffffffffffffffffffffffffffff16146125a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612599906142f8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126089061438a565b60405180910390fd5b61261e8383836001612ef4565b8273ffffffffffffffffffffffffffffffffffffffff1661263e82610dc9565b73ffffffffffffffffffffffffffffffffffffffff1614612694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161268b906142f8565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612820838383600161301a565b505050565b3373ffffffffffffffffffffffffffffffffffffffff1661284582610dc9565b73ffffffffffffffffffffffffffffffffffffffff161461286557600080fd5b50565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6128ad6123d6565b73ffffffffffffffffffffffffffffffffffffffff166128cb610fb3565b73ffffffffffffffffffffffffffffffffffffffff1614612921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612918906143f6565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612a57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a4e90614462565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612b4891906133d1565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612bc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bbb906144ce565b60405180910390fd5b612bcd81612eb3565b15612c0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c049061453a565b60405180910390fd5b612c1b600083836001612ef4565b612c2481612eb3565b15612c64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c5b9061453a565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612d6e60008383600161301a565b5050565b612d7d84848461252c565b612d8984848484613020565b612dc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dbf906145cc565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060006001612df4846131a7565b01905060008167ffffffffffffffff811115612e1357612e126138f2565b5b6040519080825280601f01601f191660200182016040528015612e455781602001600182028036833780820191505090505b509050600082602001820190505b600115612ea8578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612e9c57612e9b6145ec565b5b04945060008503612e53575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16612ed583612868565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561301457600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612f885780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612f80919061461b565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146130135780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461300b919061464f565b925050819055505b5b50505050565b50505050565b60006130418473ffffffffffffffffffffffffffffffffffffffff166132fa565b1561319a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261306a6123d6565b8786866040518563ffffffff1660e01b815260040161308c94939291906146cd565b6020604051808303816000875af19250505080156130c857506040513d601f19601f820116820180604052508101906130c5919061472e565b60015b61314a573d80600081146130f8576040519150601f19603f3d011682016040523d82523d6000602084013e6130fd565b606091505b506000815103613142576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613139906145cc565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061319f565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613205577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816131fb576131fa6145ec565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613242576d04ee2d6d415b85acef81000000008381613238576132376145ec565b5b0492506020810190505b662386f26fc10000831061327157662386f26fc100008381613267576132666145ec565b5b0492506010810190505b6305f5e100831061329a576305f5e10083816132905761328f6145ec565b5b0492506008810190505b61271083106132bf5761271083816132b5576132b46145ec565b5b0492506004810190505b606483106132e257606483816132d8576132d76145ec565b5b0492506002810190505b600a83106132f1576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61336681613331565b811461337157600080fd5b50565b6000813590506133838161335d565b92915050565b60006020828403121561339f5761339e613327565b5b60006133ad84828501613374565b91505092915050565b60008115159050919050565b6133cb816133b6565b82525050565b60006020820190506133e660008301846133c2565b92915050565b6000819050919050565b6133ff816133ec565b811461340a57600080fd5b50565b60008135905061341c816133f6565b92915050565b60006020828403121561343857613437613327565b5b60006134468482850161340d565b91505092915050565b600063ffffffff82169050919050565b6134688161344f565b82525050565b6000602082019050613483600083018461345f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156134c35780820151818401526020810190506134a8565b60008484015250505050565b6000601f19601f8301169050919050565b60006134eb82613489565b6134f58185613494565b93506135058185602086016134a5565b61350e816134cf565b840191505092915050565b6000602082019050818103600083015261353381846134e0565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006135668261353b565b9050919050565b6135768161355b565b82525050565b6000602082019050613591600083018461356d565b92915050565b6135a08161355b565b81146135ab57600080fd5b50565b6000813590506135bd81613597565b92915050565b600080604083850312156135da576135d9613327565b5b60006135e8858286016135ae565b92505060206135f98582860161340d565b9150509250929050565b61360c816133ec565b82525050565b60006020820190506136276000830184613603565b92915050565b60008060006060848603121561364657613645613327565b5b6000613654868287016135ae565b9350506020613665868287016135ae565b92505060406136768682870161340d565b9150509250925092565b600061368b8261355b565b9050919050565b61369b81613680565b81146136a657600080fd5b50565b6000813590506136b881613692565b92915050565b6136c7816133b6565b81146136d257600080fd5b50565b6000813590506136e4816136be565b92915050565b6000806000806080858703121561370457613703613327565b5b60006137128782880161340d565b9450506020613723878288016136a9565b9350506040613734878288016136d5565b9250506060613745878288016136d5565b91505092959194509250565b600067ffffffffffffffff82169050919050565b61376e81613751565b811461377957600080fd5b50565b60008135905061378b81613765565b92915050565b600080604083850312156137a8576137a7613327565b5b60006137b68582860161340d565b92505060206137c78582860161377c565b9150509250929050565b6000602082840312156137e7576137e6613327565b5b60006137f5848285016135ae565b91505092915050565b61380781613751565b82525050565b600060208201905061382260008301846137fe565b92915050565b6000806040838503121561383f5761383e613327565b5b600061384d8582860161340d565b925050602061385e8582860161340d565b9150509250929050565b6000806040838503121561387f5761387e613327565b5b600061388d858286016135ae565b925050602061389e858286016136d5565b9150509250929050565b600080604083850312156138bf576138be613327565b5b60006138cd8582860161340d565b92505060206138de858286016135ae565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61392a826134cf565b810181811067ffffffffffffffff82111715613949576139486138f2565b5b80604052505050565b600061395c61331d565b90506139688282613921565b919050565b600067ffffffffffffffff821115613988576139876138f2565b5b613991826134cf565b9050602081019050919050565b82818337600083830152505050565b60006139c06139bb8461396d565b613952565b9050828152602081018484840111156139dc576139db6138ed565b5b6139e784828561399e565b509392505050565b600082601f830112613a0457613a036138e8565b5b8135613a148482602086016139ad565b91505092915050565b60008060008060808587031215613a3757613a36613327565b5b6000613a45878288016135ae565b9450506020613a56878288016135ae565b9350506040613a678782880161340d565b925050606085013567ffffffffffffffff811115613a8857613a8761332c565b5b613a94878288016139ef565b91505092959194509250565b613aa98161344f565b8114613ab457600080fd5b50565b600081359050613ac681613aa0565b92915050565b600080600060608486031215613ae557613ae4613327565b5b6000613af38682870161340d565b9350506020613b0486828701613ab7565b9250506040613b158682870161340d565b9150509250925092565b60008060408385031215613b3657613b35613327565b5b6000613b448582860161340d565b9250506020613b5585828601613ab7565b9150509250929050565b60008060408385031215613b7657613b75613327565b5b6000613b84858286016135ae565b9250506020613b95858286016135ae565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613be657607f821691505b602082108103613bf957613bf8613b9f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613c5b602183613494565b9150613c6682613bff565b604082019050919050565b60006020820190508181036000830152613c8a81613c4e565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000613ced603d83613494565b9150613cf882613c91565b604082019050919050565b60006020820190508181036000830152613d1c81613ce0565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613d7f602d83613494565b9150613d8a82613d23565b604082019050919050565b60006020820190508181036000830152613dae81613d72565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613def8261344f565b9150613dfa8361344f565b9250828201905063ffffffff811115613e1657613e15613db5565b5b92915050565b6000606082019050613e316000830186613603565b613e3e60208301856133c2565b613e4b60408301846133c2565b949350505050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000613e89601883613494565b9150613e9482613e53565b602082019050919050565b60006020820190508181036000830152613eb881613e7c565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000613f1b602983613494565b9150613f2682613ebf565b604082019050919050565b60006020820190508181036000830152613f4a81613f0e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b613f9b613f96826133ec565b613f80565b82525050565b6000613fad8285613f8a565b602082019150613fbd8284613f8a565b6020820191508190509392505050565b600081519050919050565b600081905092915050565b6000613fee82613fcd565b613ff88185613fd8565b93506140088185602086016134a5565b80840191505092915050565b60006140208284613fe3565b915081905092915050565b6000819050919050565b61403e8161402b565b811461404957600080fd5b50565b60008151905061405b81614035565b92915050565b60006020828403121561407757614076613327565b5b60006140858482850161404c565b91505092915050565b60006060820190506140a36000830186613603565b6140b06020830185613603565b6140bd604083018461356d565b949350505050565b60006140d08261344f565b91506140db8361344f565b9250828203905063ffffffff8111156140f7576140f6613db5565b5b92915050565b600081905092915050565b600061411382613489565b61411d81856140fd565b935061412d8185602086016134a5565b80840191505092915050565b60006141458285614108565b91506141518284614108565b91508190509392505050565b60006040820190506141726000830185613603565b61417f602083018461356d565b9392505050565b600081519050614195816136be565b92915050565b6000602082840312156141b1576141b0613327565b5b60006141bf84828501614186565b91505092915050565b60006141d38261344f565b915063ffffffff82036141e9576141e8613db5565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000614250602683613494565b915061425b826141f4565b604082019050919050565b6000602082019050818103600083015261427f81614243565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006142e2602583613494565b91506142ed82614286565b604082019050919050565b60006020820190508181036000830152614311816142d5565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614374602483613494565b915061437f82614318565b604082019050919050565b600060208201905081810360008301526143a381614367565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006143e0602083613494565b91506143eb826143aa565b602082019050919050565b6000602082019050818103600083015261440f816143d3565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061444c601983613494565b915061445782614416565b602082019050919050565b6000602082019050818103600083015261447b8161443f565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006144b8602083613494565b91506144c382614482565b602082019050919050565b600060208201905081810360008301526144e7816144ab565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614524601c83613494565b915061452f826144ee565b602082019050919050565b6000602082019050818103600083015261455381614517565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006145b6603283613494565b91506145c18261455a565b604082019050919050565b600060208201905081810360008301526145e5816145a9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614626826133ec565b9150614631836133ec565b925082820390508181111561464957614648613db5565b5b92915050565b600061465a826133ec565b9150614665836133ec565b925082820190508082111561467d5761467c613db5565b5b92915050565b600082825260208201905092915050565b600061469f82613fcd565b6146a98185614683565b93506146b98185602086016134a5565b6146c2816134cf565b840191505092915050565b60006080820190506146e2600083018761356d565b6146ef602083018661356d565b6146fc6040830185613603565b818103606083015261470e8184614694565b905095945050505050565b6000815190506147288161335d565b92915050565b60006020828403121561474457614743613327565b5b600061475284828501614719565b9150509291505056fea2646970667358221220c264b41187d374c98b608a1c6358ea29bd96d9e1ac29eec30346260ca1bd717c64736f6c63430008110033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102115760003560e01c80638825dee111610125578063bc7b6d62116100ad578063d39878b41161007c578063d39878b41461067e578063e985e9c51461069a578063efb7dc13146106ca578063f1e023fd146106fa578063f2fde38b1461071657610211565b8063bc7b6d62146105e6578063bdb95ad914610602578063c83ec10114610632578063c87b56dd1461064e57610211565b8063a22cb465116100f4578063a22cb46514610546578063a4aec07514610562578063aac3afde1461057e578063b718cc3f1461059a578063b88d4fde146105ca57610211565b80638825dee1146104aa5780638da5cb5b146104da57806395d89b41146104f85780639a2372311461051657610211565b80632cb2b1b8116101a85780636352211e116101775780636352211e146103e057806370a0823114610410578063715018a61461044057806381f603801461044a578063876e782c1461047a57610211565b80632cb2b1b81461035c57806332c84e951461037857806342842e0e146103a85780634bab89d8146103c457610211565b8063095ea7b3116101e4578063095ea7b3146102c4578063108eaa4e146102e057806316dd54321461031057806323b872dd1461034057610211565b806301ffc9a714610216578063054685fc1461024657806306fdde0314610276578063081812fc14610294575b600080fd5b610230600480360381019061022b9190613389565b610732565b60405161023d91906133d1565b60405180910390f35b610260600480360381019061025b9190613422565b610814565b60405161026d919061346e565b60405180910390f35b61027e610844565b60405161028b9190613519565b60405180910390f35b6102ae60048036038101906102a99190613422565b6108d6565b6040516102bb919061357c565b60405180910390f35b6102de60048036038101906102d991906135c3565b61091c565b005b6102fa60048036038101906102f59190613422565b610a33565b604051610307919061357c565b60405180910390f35b61032a60048036038101906103259190613422565b610a73565b6040516103379190613612565b60405180910390f35b61035a6004803603810190610355919061362d565b610a97565b005b610376600480360381019061037191906136ea565b610af7565b005b610392600480360381019061038d9190613422565b610d3d565b60405161039f9190613612565b60405180910390f35b6103c260048036038101906103bd919061362d565b610d5d565b005b6103de60048036038101906103d99190613791565b610d7d565b005b6103fa60048036038101906103f59190613422565b610dc9565b604051610407919061357c565b60405180910390f35b61042a600480360381019061042591906137d1565b610e4f565b6040516104379190613612565b60405180910390f35b610448610f06565b005b610464600480360381019061045f9190613422565b610f1a565b604051610471919061380d565b60405180910390f35b610494600480360381019061048f9190613422565b610f4e565b6040516104a19190613612565b60405180910390f35b6104c460048036038101906104bf9190613828565b610f76565b6040516104d19190613612565b60405180910390f35b6104e2610fb3565b6040516104ef919061357c565b60405180910390f35b610500610fdd565b60405161050d9190613519565b60405180910390f35b610530600480360381019061052b9190613422565b61106f565b60405161053d9190613612565b60405180910390f35b610560600480360381019061055b9190613868565b611093565b005b61057c60048036038101906105779190613828565b6110a9565b005b610598600480360381019061059391906138a8565b611275565b005b6105b460048036038101906105af9190613422565b611320565b6040516105c19190613612565b60405180910390f35b6105e460048036038101906105df9190613a1d565b611340565b005b61060060048036038101906105fb91906138a8565b6113a2565b005b61061c60048036038101906106179190613422565b611406565b604051610629919061346e565b60405180910390f35b61064c60048036038101906106479190613acc565b611436565b005b61066860048036038101906106639190613422565b6119c7565b6040516106759190613519565b60405180910390f35b61069860048036038101906106939190613b1f565b611a2f565b005b6106b460048036038101906106af9190613b5f565b611c5c565b6040516106c191906133d1565b60405180910390f35b6106e460048036038101906106df9190613422565b611cf0565b6040516106f19190613612565b60405180910390f35b610714600480360381019061070f9190613422565b611d18565b005b610730600480360381019061072b91906137d1565b61229e565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107fd57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061080d575061080c82612321565b5b9050919050565b60006007600083815260200190815260200160002060020160049054906101000a900463ffffffff169050919050565b60606000805461085390613bce565b80601f016020809104026020016040519081016040528092919081815260200182805461087f90613bce565b80156108cc5780601f106108a1576101008083540402835291602001916108cc565b820191906000526020600020905b8154815290600101906020018083116108af57829003601f168201915b5050505050905090565b60006108e18261238b565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061092782610dc9565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098e90613c71565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109b66123d6565b73ffffffffffffffffffffffffffffffffffffffff1614806109e557506109e4816109df6123d6565b611c5c565b5b610a24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1b90613d03565b60405180910390fd5b610a2e83836123de565b505050565b60006007600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60088181548110610a8357600080fd5b906000526020600020016000915090505481565b610aa8610aa26123d6565b82612497565b610ae7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ade90613d95565b60405180910390fd5b610af283838361252c565b505050565b600060096000868152602001908152602001600020600001549050600060096000878152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060010160009054906101000a900463ffffffff169050600160076000858152602001908152602001600020600101600084815260200190815260200160002060010160008282829054906101000a900463ffffffff16610bb69190613de4565b92506101000a81548163ffffffff021916908363ffffffff160217905550600160076000858152602001908152602001600020600101600084815260200190815260200160002060010160048282829054906101000a900463ffffffff16610c1e9190613de4565b92506101000a81548163ffffffff021916908363ffffffff1602179055508560076000858152602001908152602001600020600101600084815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508573ffffffffffffffffffffffffffffffffffffffff166340314ae08887876040518463ffffffff1660e01b8152600401610d0293929190613e1c565b600060405180830381600087803b158015610d1c57600080fd5b505af1158015610d30573d6000803e3d6000fd5b5050505050505050505050565b600060096000838152602001908152602001600020600101549050919050565b610d7883838360405180602001604052806000815250611340565b505050565b81610d8781612825565b816007600085815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b600080610dd583612868565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3d90613e9f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ebf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb690613f31565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610f0e6128a5565b610f186000612923565b565b60006007600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff169050919050565b6000600a8281548110610f6457610f63613f51565b5b90600052602060002001549050919050565b6000600760008481526020019081526020016000206003018281548110610fa057610f9f613f51565b5b9060005260206000200154905092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610fec90613bce565b80601f016020809104026020016040519081016040528092919081815260200182805461101890613bce565b80156110655780601f1061103a57610100808354040283529160200191611065565b820191906000526020600020905b81548152906001019060200180831161104857829003601f168201915b5050505050905090565b600a818154811061107f57600080fd5b906000526020600020016000915090505481565b6110a561109e6123d6565b83836129e9565b5050565b816110b381612825565b6000600284846040516020016110ca929190613fa1565b6040516020818303038152906040526040516110e69190614014565b602060405180830381855afa158015611103573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906111269190614061565b60001c905083600960008381526020019081526020016000206000018190555082600960008381526020019081526020016000206001018190555060016007600086815260200190815260200160002060020160008282829054906101000a900463ffffffff166111979190613de4565b92506101000a81548163ffffffff021916908363ffffffff16021790555060016007600085815260200190815260200160002060020160048282829054906101000a900463ffffffff166111eb9190613de4565b92506101000a81548163ffffffff021916908363ffffffff160217905550600a8190806001815401808255809150506001900390600052602060002001600090919091909150556007600085815260200190815260200160002060030183908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b61127d6128a5565b60006007600084815260200190815260200160002060020160006101000a81548163ffffffff021916908363ffffffff16021790555060006007600084815260200190815260200160002060020160046101000a81548163ffffffff021916908363ffffffff1602179055506112f38183612b55565b60088290806001815401808255809150506001900390600052602060002001600090919091909150555050565b600060096000838152602001908152602001600020600001549050919050565b61135161134b6123d6565b83612497565b611390576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138790613d95565b60405180910390fd5b61139c84848484612d72565b50505050565b816113ac81612825565b816007600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60006007600083815260200190815260200160002060020160009054906101000a900463ffffffff169050919050565b600060096000858152602001908152602001600020600001549050600060096000868152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060000160008663ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600284866040516020016114f2929190613fa1565b60405160208183030381529060405260405161150e9190614014565b602060405180830381855afa15801561152b573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061154e9190614061565b60001c90508173ffffffffffffffffffffffffffffffffffffffff1663289df2cb8883336040518463ffffffff1660e01b81526004016115909392919061408e565b600060405180830381600087803b1580156115aa57600080fd5b505af11580156115be573d6000803e3d6000fd5b5050505060006009600083815260200190815260200160002060000154036116bf5783600960008381526020019081526020016000206000018190555084600960008381526020019081526020016000206001018190555060016007600086815260200190815260200160002060020160008282829054906101000a900463ffffffff1661164c9190613de4565b92506101000a81548163ffffffff021916908363ffffffff16021790555060016007600087815260200190815260200160002060020160048282829054906101000a900463ffffffff166116a09190613de4565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b600060076000868152602001908152602001600020600101600087815260200190815260200160002060010160009054906101000a900463ffffffff169050600160076000878152602001908152602001600020600101600088815260200190815260200160002060010160008282829054906101000a900463ffffffff166117489190613de4565b92506101000a81548163ffffffff021916908363ffffffff1602179055508260076000878152602001908152602001600020600101600088815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000878152602001908152602001600020600101600086815260200190815260200160002060000160008963ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000878152602001908152602001600020600101600086815260200190815260200160002060000160008963ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160076000878152602001908152602001600020600101600086815260200190815260200160002060010160048282829054906101000a900463ffffffff1661194d91906140c5565b92506101000a81548163ffffffff021916908363ffffffff160217905550600060076000878152602001908152602001600020600101600086815260200190815260200160002060010160049054906101000a900463ffffffff1663ffffffff16036119bd576119bc88611d18565b5b5050505050505050565b60606119d28261238b565b60006119dc612dce565b905060008151116119fc5760405180602001604052806000815250611a27565b80611a0684612de5565b604051602001611a17929190614139565b6040516020818303038152906040525b915050919050565b600060096000848152602001908152602001600020600001549050600060096000858152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060000160008563ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663fdf3052486336040518363ffffffff1660e01b8152600401611b0f92919061415d565b600060405180830381600087803b158015611b2957600080fd5b505af1158015611b3d573d6000803e3d6000fd5b50505050600060076000858152602001908152602001600020600101600084815260200190815260200160002060000160008663ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060000160008663ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600060088281548110611d0657611d05613f51565b5b90600052602060002001549050919050565b600060096000838152602001908152602001600020600001549050600060096000848152602001908152602001600020600101549050600060076000848152602001908152602001600020600101600083815260200190815260200160002060010160009054906101000a900463ffffffff16905060005b8163ffffffff168163ffffffff16101561212f57600073ffffffffffffffffffffffffffffffffffffffff1660076000868152602001908152602001600020600101600085815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611f2b575060076000858152602001908152602001600020600101600084815260200190815260200160002060000160008263ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634d6861a6866040518263ffffffff1660e01b8152600401611ee99190613612565b602060405180830381865afa158015611f06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2a919061419b565b5b1561211c5760076000858152602001908152602001600020600101600084815260200190815260200160002060000160008263ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fdf3052486336040518363ffffffff1660e01b8152600401611fd592919061415d565b600060405180830381600087803b158015611fef57600080fd5b505af1158015612003573d6000803e3d6000fd5b50505050600060076000868152602001908152602001600020600101600085815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000868152602001908152602001600020600101600085815260200190815260200160002060000160008363ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8080612127906141c8565b915050611d90565b50600060076000858152602001908152602001600020600101600084815260200190815260200160002060010160006101000a81548163ffffffff021916908363ffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060010160046101000a81548163ffffffff021916908363ffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000858152602001908152602001600020600101600084815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6122a66128a5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161230c90614266565b60405180910390fd5b61231e81612923565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61239481612eb3565b6123d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123ca90613e9f565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661245183610dc9565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806124a383610dc9565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124e557506124e48185611c5c565b5b8061252357508373ffffffffffffffffffffffffffffffffffffffff1661250b846108d6565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661254c82610dc9565b73ffffffffffffffffffffffffffffffffffffffff16146125a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612599906142f8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126089061438a565b60405180910390fd5b61261e8383836001612ef4565b8273ffffffffffffffffffffffffffffffffffffffff1661263e82610dc9565b73ffffffffffffffffffffffffffffffffffffffff1614612694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161268b906142f8565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612820838383600161301a565b505050565b3373ffffffffffffffffffffffffffffffffffffffff1661284582610dc9565b73ffffffffffffffffffffffffffffffffffffffff161461286557600080fd5b50565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6128ad6123d6565b73ffffffffffffffffffffffffffffffffffffffff166128cb610fb3565b73ffffffffffffffffffffffffffffffffffffffff1614612921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612918906143f6565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612a57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a4e90614462565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612b4891906133d1565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612bc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bbb906144ce565b60405180910390fd5b612bcd81612eb3565b15612c0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c049061453a565b60405180910390fd5b612c1b600083836001612ef4565b612c2481612eb3565b15612c64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c5b9061453a565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612d6e60008383600161301a565b5050565b612d7d84848461252c565b612d8984848484613020565b612dc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dbf906145cc565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060006001612df4846131a7565b01905060008167ffffffffffffffff811115612e1357612e126138f2565b5b6040519080825280601f01601f191660200182016040528015612e455781602001600182028036833780820191505090505b509050600082602001820190505b600115612ea8578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612e9c57612e9b6145ec565b5b04945060008503612e53575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16612ed583612868565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561301457600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612f885780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612f80919061461b565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146130135780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461300b919061464f565b925050819055505b5b50505050565b50505050565b60006130418473ffffffffffffffffffffffffffffffffffffffff166132fa565b1561319a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261306a6123d6565b8786866040518563ffffffff1660e01b815260040161308c94939291906146cd565b6020604051808303816000875af19250505080156130c857506040513d601f19601f820116820180604052508101906130c5919061472e565b60015b61314a573d80600081146130f8576040519150601f19603f3d011682016040523d82523d6000602084013e6130fd565b606091505b506000815103613142576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613139906145cc565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061319f565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613205577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816131fb576131fa6145ec565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613242576d04ee2d6d415b85acef81000000008381613238576132376145ec565b5b0492506020810190505b662386f26fc10000831061327157662386f26fc100008381613267576132666145ec565b5b0492506010810190505b6305f5e100831061329a576305f5e10083816132905761328f6145ec565b5b0492506008810190505b61271083106132bf5761271083816132b5576132b46145ec565b5b0492506004810190505b606483106132e257606483816132d8576132d76145ec565b5b0492506002810190505b600a83106132f1576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61336681613331565b811461337157600080fd5b50565b6000813590506133838161335d565b92915050565b60006020828403121561339f5761339e613327565b5b60006133ad84828501613374565b91505092915050565b60008115159050919050565b6133cb816133b6565b82525050565b60006020820190506133e660008301846133c2565b92915050565b6000819050919050565b6133ff816133ec565b811461340a57600080fd5b50565b60008135905061341c816133f6565b92915050565b60006020828403121561343857613437613327565b5b60006134468482850161340d565b91505092915050565b600063ffffffff82169050919050565b6134688161344f565b82525050565b6000602082019050613483600083018461345f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156134c35780820151818401526020810190506134a8565b60008484015250505050565b6000601f19601f8301169050919050565b60006134eb82613489565b6134f58185613494565b93506135058185602086016134a5565b61350e816134cf565b840191505092915050565b6000602082019050818103600083015261353381846134e0565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006135668261353b565b9050919050565b6135768161355b565b82525050565b6000602082019050613591600083018461356d565b92915050565b6135a08161355b565b81146135ab57600080fd5b50565b6000813590506135bd81613597565b92915050565b600080604083850312156135da576135d9613327565b5b60006135e8858286016135ae565b92505060206135f98582860161340d565b9150509250929050565b61360c816133ec565b82525050565b60006020820190506136276000830184613603565b92915050565b60008060006060848603121561364657613645613327565b5b6000613654868287016135ae565b9350506020613665868287016135ae565b92505060406136768682870161340d565b9150509250925092565b600061368b8261355b565b9050919050565b61369b81613680565b81146136a657600080fd5b50565b6000813590506136b881613692565b92915050565b6136c7816133b6565b81146136d257600080fd5b50565b6000813590506136e4816136be565b92915050565b6000806000806080858703121561370457613703613327565b5b60006137128782880161340d565b9450506020613723878288016136a9565b9350506040613734878288016136d5565b9250506060613745878288016136d5565b91505092959194509250565b600067ffffffffffffffff82169050919050565b61376e81613751565b811461377957600080fd5b50565b60008135905061378b81613765565b92915050565b600080604083850312156137a8576137a7613327565b5b60006137b68582860161340d565b92505060206137c78582860161377c565b9150509250929050565b6000602082840312156137e7576137e6613327565b5b60006137f5848285016135ae565b91505092915050565b61380781613751565b82525050565b600060208201905061382260008301846137fe565b92915050565b6000806040838503121561383f5761383e613327565b5b600061384d8582860161340d565b925050602061385e8582860161340d565b9150509250929050565b6000806040838503121561387f5761387e613327565b5b600061388d858286016135ae565b925050602061389e858286016136d5565b9150509250929050565b600080604083850312156138bf576138be613327565b5b60006138cd8582860161340d565b92505060206138de858286016135ae565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61392a826134cf565b810181811067ffffffffffffffff82111715613949576139486138f2565b5b80604052505050565b600061395c61331d565b90506139688282613921565b919050565b600067ffffffffffffffff821115613988576139876138f2565b5b613991826134cf565b9050602081019050919050565b82818337600083830152505050565b60006139c06139bb8461396d565b613952565b9050828152602081018484840111156139dc576139db6138ed565b5b6139e784828561399e565b509392505050565b600082601f830112613a0457613a036138e8565b5b8135613a148482602086016139ad565b91505092915050565b60008060008060808587031215613a3757613a36613327565b5b6000613a45878288016135ae565b9450506020613a56878288016135ae565b9350506040613a678782880161340d565b925050606085013567ffffffffffffffff811115613a8857613a8761332c565b5b613a94878288016139ef565b91505092959194509250565b613aa98161344f565b8114613ab457600080fd5b50565b600081359050613ac681613aa0565b92915050565b600080600060608486031215613ae557613ae4613327565b5b6000613af38682870161340d565b9350506020613b0486828701613ab7565b9250506040613b158682870161340d565b9150509250925092565b60008060408385031215613b3657613b35613327565b5b6000613b448582860161340d565b9250506020613b5585828601613ab7565b9150509250929050565b60008060408385031215613b7657613b75613327565b5b6000613b84858286016135ae565b9250506020613b95858286016135ae565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613be657607f821691505b602082108103613bf957613bf8613b9f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613c5b602183613494565b9150613c6682613bff565b604082019050919050565b60006020820190508181036000830152613c8a81613c4e565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000613ced603d83613494565b9150613cf882613c91565b604082019050919050565b60006020820190508181036000830152613d1c81613ce0565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613d7f602d83613494565b9150613d8a82613d23565b604082019050919050565b60006020820190508181036000830152613dae81613d72565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613def8261344f565b9150613dfa8361344f565b9250828201905063ffffffff811115613e1657613e15613db5565b5b92915050565b6000606082019050613e316000830186613603565b613e3e60208301856133c2565b613e4b60408301846133c2565b949350505050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000613e89601883613494565b9150613e9482613e53565b602082019050919050565b60006020820190508181036000830152613eb881613e7c565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000613f1b602983613494565b9150613f2682613ebf565b604082019050919050565b60006020820190508181036000830152613f4a81613f0e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b613f9b613f96826133ec565b613f80565b82525050565b6000613fad8285613f8a565b602082019150613fbd8284613f8a565b6020820191508190509392505050565b600081519050919050565b600081905092915050565b6000613fee82613fcd565b613ff88185613fd8565b93506140088185602086016134a5565b80840191505092915050565b60006140208284613fe3565b915081905092915050565b6000819050919050565b61403e8161402b565b811461404957600080fd5b50565b60008151905061405b81614035565b92915050565b60006020828403121561407757614076613327565b5b60006140858482850161404c565b91505092915050565b60006060820190506140a36000830186613603565b6140b06020830185613603565b6140bd604083018461356d565b949350505050565b60006140d08261344f565b91506140db8361344f565b9250828203905063ffffffff8111156140f7576140f6613db5565b5b92915050565b600081905092915050565b600061411382613489565b61411d81856140fd565b935061412d8185602086016134a5565b80840191505092915050565b60006141458285614108565b91506141518284614108565b91508190509392505050565b60006040820190506141726000830185613603565b61417f602083018461356d565b9392505050565b600081519050614195816136be565b92915050565b6000602082840312156141b1576141b0613327565b5b60006141bf84828501614186565b91505092915050565b60006141d38261344f565b915063ffffffff82036141e9576141e8613db5565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000614250602683613494565b915061425b826141f4565b604082019050919050565b6000602082019050818103600083015261427f81614243565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006142e2602583613494565b91506142ed82614286565b604082019050919050565b60006020820190508181036000830152614311816142d5565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614374602483613494565b915061437f82614318565b604082019050919050565b600060208201905081810360008301526143a381614367565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006143e0602083613494565b91506143eb826143aa565b602082019050919050565b6000602082019050818103600083015261440f816143d3565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061444c601983613494565b915061445782614416565b602082019050919050565b6000602082019050818103600083015261447b8161443f565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006144b8602083613494565b91506144c382614482565b602082019050919050565b600060208201905081810360008301526144e7816144ab565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614524601c83613494565b915061452f826144ee565b602082019050919050565b6000602082019050818103600083015261455381614517565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006145b6603283613494565b91506145c18261455a565b604082019050919050565b600060208201905081810360008301526145e5816145a9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614626826133ec565b9150614631836133ec565b925082820390508181111561464957614648613db5565b5b92915050565b600061465a826133ec565b9150614665836133ec565b925082820190508082111561467d5761467c613db5565b5b92915050565b600082825260208201905092915050565b600061469f82613fcd565b6146a98185614683565b93506146b98185602086016134a5565b6146c2816134cf565b840191505092915050565b60006080820190506146e2600083018761356d565b6146ef602083018661356d565b6146fc6040830185613603565b818103606083015261470e8184614694565b905095945050505050565b6000815190506147288161335d565b92915050565b60006020828403121561474457614743613327565b5b600061475284828501614719565b9150509291505056fea2646970667358221220c264b41187d374c98b608a1c6358ea29bd96d9e1ac29eec30346260ca1bd717c64736f6c63430008110033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
]
