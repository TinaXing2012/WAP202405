const fs = require('fs');

console.log('first');
fs.readFile('hello.txt', () => console.log('second'));
console.log('third');