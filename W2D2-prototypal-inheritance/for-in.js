const animal = {
    eats: true,
    walk: function() {
        console.log('walk...');
    }
}
const rabbit = Object.create(animal);
rabbit.jumps = true;
rabbit.longEar = true;
console.log(Object.keys(rabbit)); // return own keys in a string array
for(let property in rabbit){
    // verify if a property belongs to own, return true/false
    if(rabbit.hasOwnProperty(property)){
        console.log('Own: ',property, rabbit[property]);
    } else {
        console.log('Inherited:', property, rabbit[property]);
    }
    
}