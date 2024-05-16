console.log('start');

async function foo(){
    console.log('inside foo... 1');
    return 1; //return new Promise(resolve => resolve(1)), return Promise.resolve(1)
}

const result = foo();
console.log(result);
result.then(data => console.log('data: ', data));
console.log('end');