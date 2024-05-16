async function foo() {
    throw new Error('Whoooops!!!'); //Promise.reject(new Error('Whoooops!!!')) -> async
}

foo().catch(err => console.log(err.message))
    .finally(() => console.log('Finally!'))