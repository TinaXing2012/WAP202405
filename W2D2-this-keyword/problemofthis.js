const user = {
    firstname: 'John',
    sayHi() {
        console.log(`Hi, ${this.firstname}`);
    }
}

// 1. wrapper
setTimeout(function() {
    user.sayHi();
}, 3000);

setTimeout(() => user.sayHi(), 3000);

// call + wrapper
setTimeout(() => user.sayHi.call(user), 3000);
// apply + wrapper
setTimeout(() => user.sayHi.apply(user), 3000);
// bind
setTimeout(user.sayHi.bind(user), 3000);
