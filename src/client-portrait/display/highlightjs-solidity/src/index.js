const hljs = require('highlight.js');
const solidity = require('./languages/solidity.js');

hljs.registerLanguage("solidity", solidity);
hljs.highlightAll();

window.solidity = solidity;
module.exports = solidity;