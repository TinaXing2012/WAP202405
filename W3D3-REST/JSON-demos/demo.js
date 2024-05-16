const jsonString = `
{
    "window": {
        "title": "Sample Widget",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "images/logo.png",
        "coords": [250, 150, 350, 400],
        "alignment": "center"
    },
    "messages": [
        { "text": "Save", "offset": [10, 30] },
        { "text": "Help", "offset": [0, 50] },
        { "text": "Quit", "offset": [30, 10] },
        { "text": "Quit", "offset": [30, 60] }
    ],
    "debug": true
}`;
const obj = JSON.parse(jsonString);
// const len = obj.messages.length;
// console.log(obj.messages[len-1]);
console.log(obj.messages.at(-1));