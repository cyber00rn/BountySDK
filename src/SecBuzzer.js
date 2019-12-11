import SecBuzzerToken from './SecBuzzerToken';
import SecBuzzerRelay from './SecBuzzerRelay';
import BountyRegistry from './BountyRegistry';

/**
* Initial SecBuzzer
* @class
*/
class SecBuzzer {

  /**
   * @constructor
   * @param {object} config 
   */
  constructor(config) {
    if(config && config.restURL && config.restURL !== '') {
      this.restURL = config.restURL;
    } else {
      this.restURL = 'https://mainnet.infura.io';
    }

    /*if(config && config.network && config.network !== '') {
      this.network = config.network;
    } else {
      this.network = '1';
    }*/

    if(config && config.secBuzzerTokenAddress && config.secBuzzerTokenAddress !== '') {
      this.secBuzzerTokenAddress = config.secBuzzerTokenAddress;
    } else {
      this.secBuzzerTokenAddress = '0x810582f49676917d8b86fcc551ae3f964ece2c91'; // TODO: add mainnet address
    }

    if(config && config.secBuzzerRelayAddress && config.secBuzzerRelayAddress !== '') {
      this.secBuzzerRelayAddress = config.secBuzzerRelayAddress;
    } else {
      this.secBuzzerRelayAddress = '0xb37de44b76ce18f38613a8ee629b36c5b4a123bf'; // TODO: add mainnet address
    }

    if(config && config.bountyRegistryAddress && config.bountyRegistryAddress !== '') {
      this.bountyRegistryAddress = config.bountyRegistryAddress;
    } else {
      this.bountyRegistryAddress = '0xc11fbecab67ccd70afe46152f2e86ac6c55a0fe0'; // TODO: add mainnet address
    }

    
    
    this.SecBuzzerToken = new SecBuzzerToken(this.restURL, this.secBuzzerTokenAddress);
    this.SecBuzzerRelay = new SecBuzzerRelay(this.restURL, this.secBuzzerRelayAddress);
    this.BountyRegistry = new BountyRegistry(this.restURL, this.bountyRegistryAddress);
  }
}

export default SecBuzzer;