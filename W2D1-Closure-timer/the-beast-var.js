console.log(i);
function foo() {
    if(i){
        var i = 10;
        console.log('inside if...')
    } else {
        var m = 30;
        console.log('inside else...')
    }
}
console.log(i, m); 