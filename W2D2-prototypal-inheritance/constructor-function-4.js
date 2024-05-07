'use strict';

function Student(firstname = 'Default', lastname='Default'){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = 18;
    this.printDetail = function(){
        console.log(`${this.firstname} ${this.lastname} ${this.age}`);
    }
}
Student.prototype.getStudentInfo = function() {
    console.log(`--- ${this.firstname} ${this.lastname} ${this.age} ---`);
}
const john = new Student('John', 'Smith');
// const john2 = Object.create(Student.prototype);
const edward = new Student('Edward');
// edward.isAdmin = false;
// john.printDetail();
// edward.printDetail();
// john.getStudentInfo();
// edward.getStudentInfo();

let obj = {x: 1};
alert(obj.toString());