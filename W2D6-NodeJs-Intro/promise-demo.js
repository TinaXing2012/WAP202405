console.log('start');
new Promise((resolve) => {
    resolve('success');
}).then(data => console.log(data));
console.log('end');