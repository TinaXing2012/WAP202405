class Student {

    #lname;
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.grades = [];
    }

    set lastname(lname){
        console.log('inside set lastname!!!');
        this.#lname = lname;
    }

    get lastname(){
        console.log('insided get lastname....');
        return this.#lname;
    }

    setFirstname(firstname){
        if(!firstname){
            throw new Error('Firstname cannot be empty')
        }
        if(typeof firstname !== 'string'){
            throw new Error('Firstname must be string')
        }
        this.firstname = firstname;
    }

    getFirstname(){
        return this.firstname;
    }

}

const john = new Student('John', 'Smith');
console.log(john);
console.log(john.lastname);
// john['#lname'] = 'hello';
console.log(john.lastname);

// console.log(john.firstname);
// john.firstname = 'Johnson';
// console.log(john);

john.setFirstname('johnson2');
console.log(john.getFirstname());