function printNumbers(from, to){
    if(from > to) {
        throw new Error('from must be less than to');
    }
    let counter = 0;
    for(let i = from; i < to; i++){
        counter++;
        setTimeout(() => console.log(i), 1000 * counter);
    }
}

printNumbers(4, 9);