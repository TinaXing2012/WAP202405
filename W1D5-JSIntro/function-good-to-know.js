// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum("hello"));


// function log(){
//     console.log("No Arguments!")
// }

// function log(x){
//     console.log("1 Argument: ", x)
// }

// function log(x, y){
//     console.log("2 Arguments: ", x, y)
// }

// log();
// log('hello');
// log('Hello', 'World');
// log('Hello', 'World', '!!!!!');

// function sum(){
//     // console.log(arguments);
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     console.log(sum);
// }

// sum(1);
// sum(1,2);
// sum(1,2,3,4,6);


function sum(x, y, ...rest) {
    console.log(x, y, rest);
}
sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 9, 8, 7, 6);