class Animal {
    constructor(name, speed = 0) {
        // this = {}
        this.speed = speed;
        this.name = name;
        this.hobby = [];
        console.log(`inside Animal constructor`);
        // return this
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} Run with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} Stops!`);
    }

    static compare(animalA, animalB) {
        console.log(`inside compare in Animal`);
    }
}

class Rabbit extends Animal {
    constructor(name, speed = 0, earLength) {
        super(name, speed);
        this.earLength = earLength;
    }

    stop() {
        this.speed = 0;
        super.stop();
        console.log(`${this.name} Stops! inside Rabbit`);
    }

    hide() {
        console.log('Rabbit hide');
    }
}
Rabbit.compare();

// const cottonRabbit = new Rabbit('Cotton Rabbit', 2, 10);
// cottonRabbit.run(5);
// cottonRabbit.stop();
// console.log(cottonRabbit);