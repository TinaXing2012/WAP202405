class User {
    constructor(name){
        // this = {}
        this.name = name;
        // return this;
    }

    sayHi(){
        console.log(`${this.name} says Hi...`);
    }
}
alert(User);
// console.log(typeof User);
// const john = new User('John');
// john.sayHi();

function Student(name){
    this.name = name;
}
alert(Student);