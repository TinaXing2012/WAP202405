const elements = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

// const result = elements.filter(item => item.length > 7);
// console.log(result);

const result = elements.filter((item, index, array) => {
    console.log(item, index, array);
    // return undefined -> falsy
    return item.length > 17
});
// console.log(result);

const res = elements.find(item => item.length > 7);
// console.log('res', res);

const res2 = elements.filter(item => item.length > 7)
    .map(item => item.toUpperCase());
// console.log(res2);

const grades = [91, 82, 73, 94, 85, 76];

// const sum = grades.reduce((accum, item, index, array) => accum + item, 0);
// const average = sum / grades.length;
// console.log(average);
const filteredGrades = grades.filter(g => g > 80);
const average = filteredGrades.reduce((accum, current) => accum + current, 0) / filteredGrades.length;

const avg = grades.filter(g => g > 80)
                .reduce((accum, current, index, array) => accum + current/ array.length, 0);
console.log(average, avg);

