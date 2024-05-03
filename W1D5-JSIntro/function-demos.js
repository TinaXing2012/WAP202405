// 1. Function Declaration
console.log(square(4));

function square(number) {
    return number * number;
}

// 2. Function Expression

const square2 = function (number) {
    return number * number;
}
console.log(typeof square, typeof square2);
console.log(square2(5));

// 3. arrow function

const square3 = number => number * number;
console.log('square3: ', square3(8));

const multiply = (num1, num2) => num1 * num2;



