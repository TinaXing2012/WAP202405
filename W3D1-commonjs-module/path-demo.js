const path = require('path');
// console.log(path);
// console.log(path.dirname('buffer'));
// console.log(path.dirname('../demo1/a.js'));

// const pathurl = '/users/joe/notes.txt';
const pathurl = path.join('..', 'users', 'joe','notes.txt');
console.log(pathurl);