console.log('start');
const result = new Promise(resolve => {
    resolve(1)
}).then(data => {
    console.log('data: ', data);
    return data * 2; // return new Promise(resolve => resolve(2));
}).then(data => {
    console.log('data again:', data);
}).then(data => console.log('data again again: ', data));
console.log(result);
console.log('end');