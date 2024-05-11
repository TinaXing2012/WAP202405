function f(n){
    return n + f(n-1);
}

function f2(n){
    return n + process.nextTick(() => f2(n-1));
}

f2(9);