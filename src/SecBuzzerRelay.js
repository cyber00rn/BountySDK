import Web3 from "web3";

const secBuzzerRelayABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "erc20",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_erc20",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferCompleted",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "isOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "ownershipTransfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

/**
* Initial SecBuzzerRelay
* @class
*/
class SecBuzzerRelay {

  /**
   * @constructor
   * @param {string} restURL 
   * @param {string} secBuzzerRelayAddress 
   */
  constructor(restURL, secBuzzerRelayAddress) {
    this.restURL = restURL;

    this.web3 = new Web3(this.restURL);
    this.secBuzzerRelayAddress = secBuzzerRelayAddress;
  }

  /**
   * Get contract owner
   * @returns {string} owner address
   */
  async owner() {
    try {
      const secBuzzerRelay = new this.web3.eth.Contract(secBuzzerRelayABI, this.secBuzzerRelayAddress);

      const owner = await secBuzzerRelay.methods.owner().call();

      return owner;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Check address is owner or not
   * @param {string} address 
   * @returns {boolean}
   */
  async isOwner(address) {
    try {
      const secBuzzerRelay = new this.web3.eth.Contract(secBuzzerRelayABI, this.secBuzzerRelayAddress);

      const isOwner = await secBuzzerRelay.methods.isOwner(address).call();

      return isOwner;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Transfer owner ship to new owner
   * @param {string} newOwner 
   * @returns {string} bytecode
   */
  ownershipTransfer(newOwner) {
    try {
      return this.web3.eth.abi.encodeFunctionCall({
        name: 'ownershipTransfer',
        type: 'function',
        inputs: [{
          type: 'address',
          name: '_newOwner'
        }]
      }, [newOwner]);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Transfer token
   * @param {string} recipient 
   * @param {integer} amount 
   * @returns {string} bytecode
   */
  transfer(recipient, amount) {
    try {
      return this.web3.eth.abi.encodeFunctionCall({
        name: 'transfer',
        type: 'function',
        inputs: [{
          type: 'address',
          name: 'recipient'
        }, {
          type: 'uint256',
          name: 'amount'
        }]
      }, [recipient, amount]);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Approve token to someone
   * @param {string} spender 
   * @param {integer} amount 
   * @returns {string} bytecode
   */
  approve(spender, amount) {
    try {
      return this.web3.eth.abi.encodeFunctionCall({
        name: 'approve',
        type: 'function',
        inputs: [{
          type: 'address',
          name: 'spender'
        }, {
          type: 'uint256',
          name: 'amount'
        }]
      }, [spender, amount]);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Transfer token by TransferFrom
   * @param {string} sender 
   * @param {string} recipient 
   * @param {integer} amount 
   * @returns {string} bytecode
   */
  transferFrom(sender, recipient, amount) {
    try {
      return this.web3.eth.abi.encodeFunctionCall({
        name: 'transferFrom',
        type: 'function',
        inputs: [{
          type: 'address',
          name: 'sender'
        }, {
          type: 'address',
          name: 'recipient'
        }, {
          type: 'uint256',
          name: 'amount'
        }]
      }, [sender, recipient, amount]);
    } catch (err) {
      console.log(err);
    }
  }
}

export default SecBuzzerRelay;