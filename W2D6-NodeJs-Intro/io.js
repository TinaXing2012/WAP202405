const fs = require('fs');

console.log('start');
fs.readFile('hello.txt', () => {
    console.log('I/O');
    new Promise(resolve => resolve('Hi'))
        .then(() => console.log('Promise 1'));
    process.nextTick(() => console.log('next Tick 1'));
});

console.log('end');