console.log('start');
setTimeout(() => console.log('timeout 1'), 3000);

new Promise(resolve => resolve('Hi'))
    .then(() => console.log('Promise 1'));
process.nextTick(() => console.log('next Tick 1'));
console.log('end');