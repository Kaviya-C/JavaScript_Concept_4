// //rest parameter function and spread operators in js

//rest parameter functions
// in function we can use rest parameter for arbitary arguments
// we can pass any number of arguments
function myfunction(first,second,...third){
 console.log(first);
 console.log(second);
 console.log(third);
}

myfunction(10,20,30);
console.log('------------');
myfunction(11,2,0,3,4,5,6)
console.log('------------');

//spread operators
// we can use this spread operator for clone the values
let array=[1,2,3,4,5];
let array1=[...array,6,7,8,9,10];
console.log(array1);
