import Web3 from "web3";

const secBuzzerTokenABI = [
  {
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "symbol",
        "type": "string"
      },
      {
        "name": "decimals",
        "type": "uint8"
      },
      {
        "name": "totalSupply",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
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
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
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
* Initial SecBuzzerToken
* @class
*/
class SecBuzzerToken {

  /**
   * @constructor
   * @param {string} restURL 
   * @param {string} secBuzzerTokenAddress 
   */
  constructor(restURL, secBuzzerTokenAddress) {
    this.restURL = restURL;

    this.web3 = new Web3(this.restURL);
    this.secBuzzerTokenAddress = secBuzzerTokenAddress;
  }

  /**
   * Token name
   * @returns {string} name
   */
  async name() {
    try {
      const secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

      const name = await secBuzzerToken.methods.name().call();

      return name;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Token symbol
   * @returns {string} symbol
   */
  async symbol() {
    try {
      const secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

      const symbol = await secBuzzerToken.methods.symbol().call();

      return symbol;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Token decimals
   * @returns {integer} decimals
   */
  async decimals() {
    try {
      const secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

      const decimals = await secBuzzerToken.methods.decimals().call();

      return decimals;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Token total supply
   * @returns {integer} total supply
   */
  async totalSupply() {
    try {
      const secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

      const totalSupply = await secBuzzerToken.methods.totalSupply().call();

      return totalSupply;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Get token balance by address
   * @param {string} account 
   * @returns {integer} balance
   */
  async balanceOf(account) {
    try {
      const secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

      const balance = await secBuzzerToken.methods.balanceOf(account).call();

      return balance;
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
   * Get allowance information
   * @param {string} owner 
   * @param {string} spender 
   * @returns {integer} allowance
   */
  async allowance(owner, spender) {
    try {
      const secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

      const allowance = await secBuzzerToken.methods.allowance(owner, spender).call();

      return allowance;
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

export default SecBuzzerToken;
