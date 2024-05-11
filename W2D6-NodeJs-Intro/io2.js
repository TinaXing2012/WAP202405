const fs = require('fs');

fs.readFile('hello.txt', () => console.log('this is readFile 1'));
setTimeout(() => console.log('timeout'));

for (let i = 0; i < 2000000000; i++) {}