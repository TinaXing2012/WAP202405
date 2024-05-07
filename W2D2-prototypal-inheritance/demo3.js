let animal = {
    eats: true,
    walk: function () { alert("Animal walk"); }
};
let rabbit = Object.create(animal);
rabbit.jumps = true;
let longEar = Object.create(rabbit);
longEar.earLength = 10;
longEar.walk();