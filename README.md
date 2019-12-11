# SecBuzzer Client

This is the SecBuzzer library which for connect to SecBuzzer contracts on Ethereum blockchain.

## Usage

Import to your project, copy the `/lib/*` files to your project.

[Example](./examples/SecBuzzerToken/index.js)

```js
import SecBuzzer from '/path/to/secBuzzer';

const secBuzzer = new SecBuzzer({
  // Set provider endpoint
  restURL: `https://ropsten.infura.io`,
  // Set address
  secBuzzerTokenAddress: `0x810582f49676917d8b86fcc551ae3f964ece2c91`,
  secBuzzerRelayAddress: `0xb37de44b76ce18f38613a8ee629b36c5b4a123bf`,
  bountyRegistryAddress: `0xc11fbecab67ccd70afe46152f2e86ac6c55a0fe0`
});
```

### Usage with simple js file 

Import to your HTML, CSS, JavaScript project, copy the `/dist/secBuzzer.js` file to your project.

[Example](./examples/html)

```html
<html>
  <head>
    <script src="/path/to/secBuzzer.js"></script>
    <script>
      // require library
      var SecBuzzer = require('SecBuzzer');
      
      // initial SecBuzzer with configuration
      var secBuzzer = new SecBuzzer.default({
        // Set provider endpoint
        restURL: `https://ropsten.infura.io`, 
        // Set address
        secBuzzerTokenAddress: `0x810582f49676917d8b86fcc551ae3f964ece2c91`,
        secBuzzerRelayAddress: `0xb37de44b76ce18f38613a8ee629b36c5b4a123bf`,
        bountyRegistryAddress: `0xc11fbecab67ccd70afe46152f2e86ac6c55a0fe0`
      });
    </script>
  </head>
  <body>
  ...
  </body>
</html>
```

## Documentation

Documentation can be found at [./docs/SecBuzzer/index.html](./docs/SecBuzzer/index.html)
