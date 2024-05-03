const str = 'Hello';
// ['H', 'e', 'l', 'l', 'o']
const result = [...str];
console.log(result);
const a = ['H', 'e', 'l', 'l', 'o'];
const b = [123, 'Banana'];
const c  = 'CS472';

//['H', 'e', 'l', 'l', 'o', 123, 'Banana', 'CS472']
const res2 = [...a, ...b, ...c];
console.log(res2);