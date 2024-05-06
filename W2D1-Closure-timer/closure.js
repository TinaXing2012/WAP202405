let x = 10;
function foo(y) {
    return function(z){
        return x + z;
    }
}

console.dir(foo(2));
// const result = foo()(30);
// console.log(result);