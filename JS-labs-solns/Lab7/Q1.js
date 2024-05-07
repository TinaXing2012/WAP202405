// 1. arrow function
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach((student) => {
//             console.log(this.title + ": " + student);
//         });
//     }
// };

// group.showList();

// 2. bind
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student);
//         }.bind(this));
//     }
// };

// group.showList();

// 3. self pattern
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         const self = this;
//         this.students.forEach(function (student) {
//             console.log(self.title + ": " + student);
//         });
//     }
// };

// group.showList();

// 4. second argument of forEach
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student);
//         }, this);
//     }
// };

// group.showList();

// 5. call
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(stu => function (student) {
//             console.log(this.title + ": " + student);
//         }.call(this, stu));
//     }
// };

// group.showList();

// 6. apply

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(stu => function (student) {
//             console.log(this.title + ": " + student);
//         }.call(this, [stu]));
//     }
// };

// group.showList();

// 7. use group

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(group.title + ": " + student);
        });
    }
};

// group.showList();

let group2 = {
    title: "Compro",
    students: ["John2", "Pete2", "Alice2"]
}
group.showList.call(group2);

