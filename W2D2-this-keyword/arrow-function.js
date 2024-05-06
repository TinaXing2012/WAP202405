
// // this == window
// const user = {
//     firstname: 'John',
//     sayHi: function () { //sayhi is a method
//         console.log(`Hi, ${this.firstname}`);
//     }
// }

// user.sayHi();

var a = 10;
var b = 9;
const y = { a: 1, b: 2, add: () => { return this.a + this.b } }
console.log(y.add()); //NaN


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         console.log(this)
//         this.students.forEach((student) => {
//             console.log(this.title + ": " + student);
//         });
//     }
// };
// group.showList();


// function foo() {
//     const bar = () => console.log('Arrow function', this);
//     console.log('inside foo....', this);
//     bar();
// }

// foo(); //window
// foo.call({fname: 'john'});


// console.log(this);
// const add = (num1, num2) => {
//     console.log(this);
//     return num1 + num2;
// }

// add(1, 2);
// add.call({x:1, y:1}, 5, 6);