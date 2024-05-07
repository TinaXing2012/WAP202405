const animal = {
    eats: true
}

let rabbit = {longEar: 10};
// 1. create an empty object {}
// 2. make the empty object's parent to be animal, [[Protytpe]] -> animal
// 3. assign the returned value to rabbit
rabbit = Object.create(animal);
console.log(rabbit); //parent is animal
rabbit.jumps = true;
console.log(rabbit);
console.log({}); //Object.prototype
console.log(rabbit.jumps, rabbit.eats, rabbit.longEar);