// function foo() {
//     let i = 10;
//     console.log(`inside a.js: ${i}`);
// } //is not immediately executed
// foo();

//1. create a scope for variables defined using let or const
// 2. the statements in code block is going to be immediately executed
{ 
    let i = 10;
    console.log(`inside a.js: ${i}`);
}