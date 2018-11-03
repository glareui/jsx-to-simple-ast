const babelParser = require('@babel/parser');
const fs = require('fs');

var content = fs.readFileSync(__dirname + '/Welcome/index.js', 'utf8');
const ast = babelParser.parse(content);

console.log(ast);
