import assert from 'assert';
import SecBuzzer from '../../lib/secBuzzer';

const secBuzzer = new SecBuzzer({
  restURL: `https://ropsten.infura.io`,
  secBuzzerTokenAddress: `0x810582f49676917d8b86fcc551ae3f964ece2c91`
});

async function secBuzzerToken() {
  try {
    assert.equal('SecBuzzer Token', await secBuzzer.SecBuzzerToken.name());
    assert.equal('SBT', await secBuzzer.SecBuzzerToken.symbol());
    assert.equal('18', await secBuzzer.SecBuzzerToken.decimals());
    assert.equal('1000000', await secBuzzer.SecBuzzerToken.totalSupply());

    console.log(await secBuzzer.SecBuzzerToken.transfer('0xEDb0Ec2b5219169e06A2077FF54f766c5839f3Ab', '1'));
    
  } catch (err) {
    console.error(`Error in SecBuzzerToken: `, err);
    throw err;
  }
}

secBuzzerToken();
