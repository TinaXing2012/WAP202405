// const result = false || 0 || 0.0 || '' || null || undefined || NaN ;
const result = -1 && 12 && "abc" && [] && {} && true;
if(result) {
    console.log('Inside Truthy.....');
} else {
    console.log('Inside Falsy!!!!!');
}

console.log("IE6" == 0);