console.log('start');

async function foo(){
    throw new Error('Whoops!'); //return new Promise((resolve, reject) => reject(new Error('Whoops!')))
}

const result = foo();
// console.log(result);
result.then(data => console.log('success'))
    .catch(err => console.log('Whooops!!!!!!'));
console.log('end');