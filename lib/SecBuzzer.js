'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SecBuzzerToken = require('./SecBuzzerToken');

var _SecBuzzerToken2 = _interopRequireDefault(_SecBuzzerToken);

var _SecBuzzerRelay = require('./SecBuzzerRelay');

var _SecBuzzerRelay2 = _interopRequireDefault(_SecBuzzerRelay);

var _BountyRegistry = require('./BountyRegistry');

var _BountyRegistry2 = _interopRequireDefault(_BountyRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Initial SecBuzzer
* @class
*/
var SecBuzzer =

/**
 * @constructor
 * @param {object} config 
 */
function SecBuzzer(config) {
  _classCallCheck(this, SecBuzzer);

  if (config && config.restURL && config.restURL !== '') {
    this.restURL = config.restURL;
  } else {
    this.restURL = 'https://mainnet.infura.io';
  }

  /*if(config && config.network && config.network !== '') {
    this.network = config.network;
  } else {
    this.network = '1';
  }*/

  if (config && config.secBuzzerTokenAddress && config.secBuzzerTokenAddress !== '') {
    this.secBuzzerTokenAddress = config.secBuzzerTokenAddress;
  } else {
    this.secBuzzerTokenAddress = '0x810582f49676917d8b86fcc551ae3f964ece2c91'; // TODO: add mainnet address
  }

  if (config && config.secBuzzerRelayAddress && config.secBuzzerRelayAddress !== '') {
    this.secBuzzerRelayAddress = config.secBuzzerRelayAddress;
  } else {
    this.secBuzzerRelayAddress = '0xb37de44b76ce18f38613a8ee629b36c5b4a123bf'; // TODO: add mainnet address
  }

  if (config && config.bountyRegistryAddress && config.bountyRegistryAddress !== '') {
    this.bountyRegistryAddress = config.bountyRegistryAddress;
  } else {
    this.bountyRegistryAddress = '0xc11fbecab67ccd70afe46152f2e86ac6c55a0fe0'; // TODO: add mainnet address
  }

  this.SecBuzzerToken = new _SecBuzzerToken2.default(this.restURL, this.secBuzzerTokenAddress);
  this.SecBuzzerRelay = new _SecBuzzerRelay2.default(this.restURL, this.secBuzzerRelayAddress);
  this.BountyRegistry = new _BountyRegistry2.default(this.restURL, this.bountyRegistryAddress);
};

exports.default = SecBuzzer;