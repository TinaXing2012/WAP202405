const foo = function (x, y) {
    console.log('foo', x, y);
}
console.log('start');
setTimeout(foo, 2000, 20, 50);
console.log('end');
