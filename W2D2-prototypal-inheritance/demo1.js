const animal = {
    eats: true
}

const rabbit = {
    jumps: true
}
// deprecated way: __proto__
// rabbit.__proto__ = animal;
// [[Prototype]] is hidden, you cannot directly access them, or modify them

console.log(rabbit.eats);