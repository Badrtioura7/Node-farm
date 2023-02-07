const fs = require('fs');
const textIn =  fs.readFileSync('./txt/input.txt', 'utf-8');
const textOut = `this is : ${textIn}, Created on, ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file has been written!');