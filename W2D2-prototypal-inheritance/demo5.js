let animal = {
    name: 'Default',
    walk: function() {
        console.log(`${this.name} Walk....`);
    },
    sleep: function(){
        this.isSleep = true;
    }
};
let rabbit = Object.create(animal);
rabbit.name = 'Cotton Rabbit';
rabbit.walk();
rabbit.sleep();
console.log(rabbit);

let dog = Object.create(animal);
dog.name = 'Golden Retriever';
dog.walk();
