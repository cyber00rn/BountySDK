"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secBuzzerRelayABI = [{
  "constant": true,
  "inputs": [],
  "name": "erc20",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "name": "_erc20",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferCompleted",
  "type": "event"
}, {
  "constant": true,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "isOwner",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_newOwner",
    "type": "address"
  }],
  "name": "ownershipTransfer",
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
* Initial SecBuzzerRelay
* @class
*/

var SecBuzzerRelay = function () {

  /**
   * @constructor
   * @param {string} restURL 
   * @param {string} secBuzzerRelayAddress 
   */
  function SecBuzzerRelay(restURL, secBuzzerRelayAddress) {
    _classCallCheck(this, SecBuzzerRelay);

    this.restURL = restURL;

    this.web3 = new _web2.default(this.restURL);
    this.secBuzzerRelayAddress = secBuzzerRelayAddress;
  }

  /**
   * Get contract owner
   * @returns {string} owner address
   */


  _createClass(SecBuzzerRelay, [{
    key: "owner",
    value: async function owner() {
      try {
        var secBuzzerRelay = new this.web3.eth.Contract(secBuzzerRelayABI, this.secBuzzerRelayAddress);

        var owner = await secBuzzerRelay.methods.owner().call();

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

  }, {
    key: "isOwner",
    value: async function isOwner(address) {
      try {
        var secBuzzerRelay = new this.web3.eth.Contract(secBuzzerRelayABI, this.secBuzzerRelayAddress);

        var isOwner = await secBuzzerRelay.methods.isOwner(address).call();

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

  }, {
    key: "ownershipTransfer",
    value: function ownershipTransfer(newOwner) {
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

  return SecBuzzerRelay;
}();

exports.default = SecBuzzerRelay;