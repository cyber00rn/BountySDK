import assert from 'assert';
import SecBuzzer from '../../lib/SecBuzzer';

const secBuzzer = new SecBuzzer({
  restURL: `https://ropsten.infura.io`,
  bountyRegistryAddress: `0xc11fbecab67ccd70afe46152f2e86ac6c55a0fe0`
});

async function bountyRegistry() {
  try {
    
  } catch (err) {
    console.error(`Error in BountyRegistry: `, err);
    throw err;
  }
}

bountyRegistry();
