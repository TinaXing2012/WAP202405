// const numbers = [124,897,980,777,88];

class MyMath {
    static version = '1.2.4';

    static random(){
        return Math.random();
    }

}
console.log(MyMath.random());
console.log(MyMath.version);

function MyMath2(){
    
}
MyMath2.random = function(){
    return Math.random();
}
MyMath2.version = '1.5.8';
console.log(MyMath2.random());
console.log(MyMath2.version);

