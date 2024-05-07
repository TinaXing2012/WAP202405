'use strict';

function User(username = 'Default'){
    this.username = username;
    this.isAdmin = false;
    // return {
    //     firstname: 'John',
    //     lastname: 'Smith'
    // }
    // return ['dfdfd'];
}
const john = new User();

const edward = new john.constructor('William');
console.log(edward);




