const user = {
    email: 'test@miu.edu',
    password: 'pwd123',
    getInfo: function() {
        console.log(this.email + " " + this.password);
    }
}

const myadmin = 'role';
const roleName = 'Guest';
// user.myadmin = roleName;
user[myadmin] = roleName;
console.log(user);
user.getInfo();

// {
//     email: 'test@miu.edu',
//     password: 'pwd123',
//     role: 'Guest'
// }





// const person = {
//     firstname: 'John',
//     lastname: 'Smith',
//     age: 20,
//     'my gender': 'F'
// }

// // console.log(person.firstname, person.age);
// // console.log(typeof person);
// // console.log(person['my gender']);
// person.firstname = 'Edward';
// person.grade = 99;
// console.log(person);
