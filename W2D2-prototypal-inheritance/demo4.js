let animal = {
    eats: true,
    walk: function () { alert("Animal walk"); }
};
let rabbit = Object.create(animal);
rabbit.jumps = true;
rabbit.walk = function() {
    alert('Rabbit Walk...');
}

rabbit.walk();