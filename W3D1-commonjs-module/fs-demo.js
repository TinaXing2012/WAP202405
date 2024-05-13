const path = require('path');
const fs = require('fs');

console.log('start');
// const result = fs.readFileSync(path.join('.', 'hello.txt'), 'utf8');
// console.log(result);

fs.readFile(path.join('.', 'hello.txt'), 'utf-8', function(err, data){
    console.log(err);
    if(err){
        console.log('Whoops!!!');
    } else {
        console.log(data);
    }
});


fs.writeFile('students.txt', 'CS472!!!', error=> {
    if(!error){
        console.log('Write successfully');
    }
})
console.log('end');