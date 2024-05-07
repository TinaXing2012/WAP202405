const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

// let result = {};
// students.filter(stu => stu.courses.includes('cs303'))
//     .forEach(stu => {
//         const { name, grades } = stu;
//         result[name] = grades.reduce((avg, g, index, array) => avg + g / array.length, 0);
//     });
// console.log(result);

const result = students.filter(stu => stu.courses.includes('cs303'))
    .reduce((accum, current) => {
        const {name, grades} = current;
        accum[name] = grades.reduce((avg, g, index, array) => avg + g/array.length, 0);
        return accum;
    }, {});
console.log(result);


