const me = {
    firstname: 'John',
    lastname: 'Smith',
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const log = function(height, weight){
    console.log(this.getFullName(), height, weight);
}

log.call(me, '6ft', '77kg');
log.apply(me, ['6ft', '77kg']);
log.bind(me, '6ft', '77kg')();


// console.log(me.getFullName());
// const you = {
//     firstname: 'Edward',
//     lastname: 'Jack'
// }
// const result = me.getFullName.bind(you);
// console.log(result());
// console.log(me.getFullName.call(you));
// console.log(me.getFullName.apply(you));