"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secBuzzerTokenABI = [{
  "inputs": [{
    "name": "name",
    "type": "string"
  }, {
    "name": "symbol",
    "type": "string"
  }, {
    "name": "decimals",
    "type": "uint8"
  }, {
    "name": "totalSupply",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "account",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "recipient",
    "type": "address"
  }, {
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "owner",
    "type": "address"
  }, {
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "amount",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "sender",
    "type": "address"
  }, {
    "name": "recipient",
    "type": "address"
  }, {
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}];

/**
* Initial SecBuzzerToken
* @class
*/

var SecBuzzerToken = function () {

  /**
   * @constructor
   * @param {string} restURL 
   * @param {string} secBuzzerTokenAddress 
   */
  function SecBuzzerToken(restURL, secBuzzerTokenAddress) {
    _classCallCheck(this, SecBuzzerToken);

    this.restURL = restURL;

    this.web3 = new _web2.default(this.restURL);
    this.secBuzzerTokenAddress = secBuzzerTokenAddress;
  }

  /**
   * Token name
   * @returns {string} name
   */


  _createClass(SecBuzzerToken, [{
    key: "name",
    value: async function name() {
      try {
        var secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

        var name = await secBuzzerToken.methods.name().call();

        return name;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Token symbol
     * @returns {string} symbol
     */

  }, {
    key: "symbol",
    value: async function symbol() {
      try {
        var secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

        var symbol = await secBuzzerToken.methods.symbol().call();

        return symbol;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Token decimals
     * @returns {integer} decimals
     */

  }, {
    key: "decimals",
    value: async function decimals() {
      try {
        var secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

        var decimals = await secBuzzerToken.methods.decimals().call();

        return decimals;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Token total supply
     * @returns {integer} total supply
     */

  }, {
    key: "totalSupply",
    value: async function totalSupply() {
      try {
        var secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

        var totalSupply = await secBuzzerToken.methods.totalSupply().call();

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

  }, {
    key: "balanceOf",
    value: async function balanceOf(account) {
      try {
        var secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

        var balance = await secBuzzerToken.methods.balanceOf(account).call();

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

  }, {
    key: "transfer",
    value: function transfer(recipient, amount) {
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

  }, {
    key: "allowance",
    value: async function allowance(owner, spender) {
      try {
        var secBuzzerToken = new this.web3.eth.Contract(secBuzzerTokenABI, this.secBuzzerTokenAddress);

        var allowance = await secBuzzerToken.methods.allowance(owner, spender).call();

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

  }, {
    key: "approve",
    value: function approve(spender, amount) {
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

  }, {
    key: "transferFrom",
    value: function transferFrom(sender, recipient, amount) {
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
  }]);

  return SecBuzzerToken;
}();

exports.default = SecBuzzerToken;