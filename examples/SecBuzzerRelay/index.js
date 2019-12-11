import assert from 'assert';
import SecBuzzer from '../../lib/SecBuzzer';

const secBuzzer = new SecBuzzer({
  restURL: `https://ropsten.infura.io`,
  secBuzzerRelayAddress: `0xb37de44b76ce18f38613a8ee629b36c5b4a123bf`
});

async function secBuzzerRelay() {
  try {
    
  } catch (err) {
    console.error(`Error in SecBuzzerRelay: `, err);
    throw err;
  }
}

secBuzzerRelay();
