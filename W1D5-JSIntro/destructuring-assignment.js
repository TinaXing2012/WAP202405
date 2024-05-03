const arr = [123, 666, 'Hello'];
// const a = arr[0];
// const b = arr[1];

// desctructuring assignment
const [a, , b] = arr;
// console.log(a, b);


let options = {
    title: "Menu",
    width: 100,
    height: 200
};
// const title = options.title;
// const width = options.width;
// const height = options.height;

const {height, title, author} = options;
console.log(title, height, author);

const {title: t, height: h} = options;
console.log(t, h);

function process({firstname, lastname}){
    // const {firstname, lastname} = obj;
    console.log(firstname, lastname);
}

process({firstname: 'John', "lastname": 'Smith'})
