const Generator = require('jsdoc-generator');
 
const config = {
    silent: true,
    dest: './docs',
    paths: [{
        name: 'SecBuzzer',
        source: './src'
    }]
};
 
mydocs = new Generator(config);
mydocs.generate();
