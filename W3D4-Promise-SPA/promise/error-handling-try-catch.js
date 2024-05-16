async function foo() {
    throw new Error('Whoooops!!!'); //Promise.reject(new Error('Whoooops!!!')) -> async
}

async function bar() {
    try {
        await foo();
    } catch (e) {
        console.log('Error: ', e.message);
    } finally {
        console.log('Finally!!!');
    }
}

bar();
