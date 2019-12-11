"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bountyRegistryABI = [{
  "constant": true,
  "inputs": [],
  "name": "managerCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "cancelOwnershipTransfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "erc20Address",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
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
  "constant": true,
  "inputs": [],
  "name": "wallet",
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
  "name": "erc20RelayAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }],
  "name": "arbiters",
  "outputs": [{
    "name": "",
    "type": "bool"
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
  "constant": false,
  "inputs": [{
    "name": "_proposedOwner",
    "type": "address"
  }],
  "name": "initiateOwnershipTransfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "arbiterCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "proposedOwner",
  "outputs": [{
    "name": "",
    "type": "address"
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
  "inputs": [],
  "name": "completeOwnershipTransfer",
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
    "name": "",
    "type": "address"
  }],
  "name": "managers",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "name": "_erc20Relay",
    "type": "address"
  }, {
    "name": "_erc20",
    "type": "address"
  }, {
    "name": "_wallet",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "manager",
    "type": "address"
  }],
  "name": "AddedManager",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "manager",
    "type": "address"
  }],
  "name": "RemovedManager",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "arbiter",
    "type": "address"
  }],
  "name": "AddedArbiter",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "arbiter",
    "type": "address"
  }],
  "name": "RemovedArbiter",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "index",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "caller",
    "type": "address"
  }, {
    "indexed": false,
    "name": "token",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "fee",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "payload",
    "type": "string"
  }],
  "name": "CreateBounty",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "index",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "caller",
    "type": "address"
  }, {
    "indexed": false,
    "name": "token",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "payload",
    "type": "string"
  }],
  "name": "JoinBounty",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "index",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "caller",
    "type": "address"
  }, {
    "indexed": false,
    "name": "token",
    "type": "uint256"
  }],
  "name": "CancelBounty",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "index",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "caller",
    "type": "address"
  }, {
    "indexed": false,
    "name": "callee",
    "type": "address[]"
  }, {
    "indexed": false,
    "name": "token",
    "type": "uint256[]"
  }, {
    "indexed": false,
    "name": "payload",
    "type": "string"
  }],
  "name": "CloseBounty",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_proposedOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferInitiated",
  "type": "event"
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
  "anonymous": false,
  "inputs": [],
  "name": "OwnershipTransferCanceled",
  "type": "event"
}, {
  "constant": false,
  "inputs": [{
    "name": "token",
    "type": "uint256"
  }, {
    "name": "fee",
    "type": "uint256"
  }, {
    "name": "payload",
    "type": "string"
  }],
  "name": "createBounty",
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
    "name": "_bountyIndex",
    "type": "uint256"
  }, {
    "name": "token",
    "type": "uint256"
  }, {
    "name": "payload",
    "type": "string"
  }],
  "name": "joinBounty",
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
    "name": "_bountyIndex",
    "type": "uint256"
  }],
  "name": "cancelBounty",
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
    "name": "_bountyIndex",
    "type": "uint256"
  }, {
    "name": "recipients",
    "type": "address[]"
  }, {
    "name": "tokens",
    "type": "uint256[]"
  }, {
    "name": "payload",
    "type": "string"
  }],
  "name": "closeBounty",
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
    "name": "_bountyIndex",
    "type": "uint256"
  }],
  "name": "bounties",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }, {
    "name": "",
    "type": "address"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_bountyIndex",
    "type": "uint256"
  }, {
    "name": "expertIndex",
    "type": "uint256"
  }],
  "name": "bountyExperts",
  "outputs": [{
    "name": "",
    "type": "address"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "currentBountyIndex",
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
    "name": "_arbiter",
    "type": "address"
  }],
  "name": "addArbiter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_arbiter",
    "type": "address"
  }],
  "name": "removeArbiter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "isArbiter",
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
    "name": "_manager",
    "type": "address"
  }],
  "name": "addManager",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_manager",
    "type": "address"
  }],
  "name": "removeManager",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "isManager",
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
    "name": "newWallet",
    "type": "address"
  }],
  "name": "updateWallet",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}];

/**
* Initial BountyRegistry
* @class
*/

var BountyRegistry = function () {

  /**
   * @constructor
   * @param {string} restURL 
   * @param {string} bountyRegistryAddress 
   */
  function BountyRegistry(restURL, bountyRegistryAddress) {
    _classCallCheck(this, BountyRegistry);

    this.restURL = restURL;

    this.web3 = new _web2.default(this.restURL);
    this.bountyRegistryAddress = bountyRegistryAddress;
  }

  /**
   * Get BountyRegistry owner
   * @returns {string} owner address
   */


  _createClass(BountyRegistry, [{
    key: "owner",
    value: async function owner() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var owner = await bountyRegistry.methods.owner().call();

        return owner;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get proposed owner
     * @returns {string} proposed owner address
     */

  }, {
    key: "proposedOwner",
    value: async function proposedOwner() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var proposedOwner = await bountyRegistry.methods.proposedOwner().call();

        return proposedOwner;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Check address is an owner
     * @param {string} address 
     * @returns {boolean} 
     */

  }, {
    key: "isOwner",
    value: async function isOwner(address) {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var isOwner = await bountyRegistry.methods.isOwner(address).call();

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
     * Initial owner ship transfer by current owner
     * @param {string} proposedOwner 
     * @returns {string} bytecode
     */

  }, {
    key: "initiateOwnershipTransfer",
    value: function initiateOwnershipTransfer(proposedOwner) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'initiateOwnershipTransfer',
          type: 'function',
          inputs: [{
            type: 'address',
            name: '_proposedOwner'
          }]
        }, [proposedOwner]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Cancel owner ship transfer
     * @returns {string} bytecode
     */

  }, {
    key: "cancelOwnershipTransfer",
    value: function cancelOwnershipTransfer() {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'cancelOwnershipTransfer',
          type: 'function',
          inputs: []
        }, []);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Complete owner ship transfer
     * @returns {string} bytecode
     */

  }, {
    key: "completeOwnershipTransfer",
    value: function completeOwnershipTransfer() {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'completeOwnershipTransfer',
          type: 'function',
          inputs: []
        }, []);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get ERC20 token address
     * @returns {string} address
     */

  }, {
    key: "secBuzzerTokenAddress",
    value: async function secBuzzerTokenAddress() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var secBuzzerTokenAddress = await bountyRegistry.methods.erc20Address().call();

        return secBuzzerTokenAddress;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get ERC20 token relay address
     * @returns {string} address
     */

  }, {
    key: "secBuzzerRelayAddress",
    value: async function secBuzzerRelayAddress() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var secBuzzerRelayAddress = await bountyRegistry.methods.erc20RelayAddress().call();

        return secBuzzerRelayAddress;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get wallet address
     * @returns {string} wallet address
     */

  }, {
    key: "walletAddress",
    value: async function walletAddress() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var walletAddress = await bountyRegistry.methods.wallet().call();

        return walletAddress;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get arbiter count
     * @returns {integer} arbiter count
     */

  }, {
    key: "arbiterCount",
    value: async function arbiterCount() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var arbiterCount = await bountyRegistry.methods.arbiterCount().call();

        return arbiterCount;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get manager count
     * @returns {integer} manager count
     */

  }, {
    key: "managerCount",
    value: async function managerCount() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var managerCount = await bountyRegistry.methods.managerCount().call();

        return managerCount;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Create bounty
     * @param {integer} token 
     * @param {integer} fee 
     * @param {string} payload 
     * @returns {string} bytecode
     */

  }, {
    key: "createBounty",
    value: function createBounty(token, fee, payload) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'createBounty',
          type: 'function',
          inputs: [{
            type: 'uint256',
            name: 'token'
          }, {
            type: 'uint256',
            name: 'fee'
          }, {
            type: 'string',
            name: 'payload'
          }]
        }, [token, fee, payload]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Join bounty 
     * @param {integer} index 
     * @param {integer} token 
     * @param {string} payload 
     * @returns {string} bytecode
     */

  }, {
    key: "joinBounty",
    value: function joinBounty(index, token, payload) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'joinBounty',
          type: 'function',
          inputs: [{
            type: 'uint256',
            name: '_bountyIndex'
          }, {
            type: 'uint256',
            name: 'token'
          }, {
            type: 'string',
            name: 'payload'
          }]
        }, [index, token, payload]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Cancel bounty, can only done by bounty creator
     * @param {string} index 
     * @returns {string} bytecode
     */

  }, {
    key: "cancelBounty",
    value: function cancelBounty(index) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'cancelBounty',
          type: 'function',
          inputs: [{
            type: 'uint256',
            name: '_bountyIndex'
          }]
        }, [index]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Close bounty, can only done by arbiter
     * @param {integer} index 
     * @param {string[]} recipients 
     * @param {integer[]} tokens 
     * @param {string} payload 
     * @returns {string} bytecode
     */

  }, {
    key: "closeBounty",
    value: function closeBounty(index, recipients, tokens, payload) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'closeBounty',
          type: 'function',
          inputs: [{
            type: 'uint256',
            name: '_bountyIndex'
          }, {
            type: 'address[]',
            name: 'recipients'
          }, {
            type: 'uint256[]',
            name: 'tokens'
          }, {
            type: 'string',
            name: 'payload'
          }]
        }, [index, recipients, tokens, payload]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get bounty information by bounty index
     * @param {integer} index 
     * @returns {array}
     */

  }, {
    key: "bounties",
    value: async function bounties(index) {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var bounty = await bountyRegistry.methods.bounties(index).call();

        // TODO change type
        return bounty;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get bounty expers by bounty idex and expert index
     * @param {integer} index 
     * @param {integer} expertIndex 
     * @returns {array}
     */

  }, {
    key: "bountyExperts",
    value: async function bountyExperts(index, expertIndex) {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var bounty = await bountyRegistry.methods.bountyExperts(index, expertIndex).call();

        return bounty;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Get current bounty index
     * @returns {integer} bounty index
     */

  }, {
    key: "currentBountyIndex",
    value: async function currentBountyIndex() {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var currentBountyIndex = await bountyRegistry.methods.currentBountyIndex().call();

        return currentBountyIndex;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Add arbiter
     * @param {string} address 
     * @returns {string} bytecode
     */

  }, {
    key: "addArbiter",
    value: function addArbiter(address) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'addArbiter',
          type: 'function',
          inputs: [{
            type: 'address',
            name: '_arbiter'
          }]
        }, [address]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Remove arbiter
     * @param {string} address 
     * @returns {string} bytecode
     */

  }, {
    key: "removeArbiter",
    value: function removeArbiter(address) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'removeArbiter',
          type: 'function',
          inputs: [{
            type: 'address',
            name: '_arbiter'
          }]
        }, [address]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Check address is arbiter or not
     * @param {string} address 
     * @returns {boolean}
     */

  }, {
    key: "isArbiter",
    value: async function isArbiter(address) {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var isArbiter = await bountyRegistry.methods.isArbiter(address).call();

        return isArbiter;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Add manager
     * @param {string} address 
     * @returns {string} bytecode
     */

  }, {
    key: "addManager",
    value: function addManager(address) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'addManager',
          type: 'function',
          inputs: [{
            type: 'address',
            name: '_manager'
          }]
        }, [address]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Remove manager
     * @param {string} address 
     * @returns {string} bytecode
     */

  }, {
    key: "removeManager",
    value: function removeManager(address) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'removeManager',
          type: 'function',
          inputs: [{
            type: 'address',
            name: '_manager'
          }]
        }, [address]);
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Check address is manager or not
     * @param {string} address 
     * @returns {boolean} 
     */

  }, {
    key: "isManager",
    value: async function isManager(address) {
      try {
        var bountyRegistry = new this.web3.eth.Contract(bountyRegistryABI, this.bountyRegistryAddress);

        var isManager = await bountyRegistry.methods.isManager(address).call();

        return isManager;
      } catch (err) {
        console.log(err);
      }
    }

    /**
     * Transfer token, only can be done by manager
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
     * Change wallet address, only can be done by manager
     * @param {string} address 
     * @returns {string} bytecode
     */

  }, {
    key: "updateWallet",
    value: function updateWallet(address) {
      try {
        return this.web3.eth.abi.encodeFunctionCall({
          name: 'updateWallet',
          type: 'function',
          inputs: [{
            type: 'address',
            name: 'newWallet'
          }]
        }, [address]);
      } catch (err) {
        console.log(err);
      }
    }
  }]);

  return BountyRegistry;
}();

exports.default = BountyRegistry;