console.log('start');
const promise = new Promise(function (resolve, reject) {
    console.log('inside Promise 1');
    if (Math.random() > 0.5) {
        setTimeout(() => resolve('Hello'), 2000);
    } else {
        setTimeout(() => reject('Whoops!'), 2000);
    }
    console.log('inside Promise 2');
});
promise
    .then((arg1, arg2) => console.log(arg1, arg2))
    .catch(error => console.log('Error: ', error))
    .finally(() => console.log('finally..'));
console.log('end');