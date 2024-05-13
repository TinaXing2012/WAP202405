// module is an object
// exports is a property of module
// module.exports = {x: 1, b: 2};
// module.exports.sayHi = function() {
//     console.log('Hi...');
// }
// module.exports.person = {
//     firstname: 'John',
//     lastname: 'Smith'
// }

module.exports = {
    firstname: 'John',
    lastname: 'Smith',
    sayHi() {
        console.log('Hi...');
    }
}

console.log('inside a.js', module.exports);
