function foo(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
    console.log('foo...', this);
}
// 1. invoke a function, ()
// foo(1, 2, 3);

// 2. call
// foo.call({ x: 1, y: 2 }, 10, 20, 30);

// 3. apply
// foo.apply([], [1, 2, 6]);

// -- bind ---will change this keyword, but not calling the function
// return another function to you with this keyword is binded
const result = foo.bind({ x: 1, y: 2 }, 10);
console.log(typeof result);
result(222, 333);

