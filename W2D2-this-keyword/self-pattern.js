const user = {
    salute: "",
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = (newSalute) => { //inner function
            this.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour??
    }
};
user.greet();

// const user = {
//     salute: "",
//     greet: function () {
//         const self = this;
//         self.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function (newSalute) { //inner function
//             self.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour??
//     }
// };
// user.greet();