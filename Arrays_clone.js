let array=[1,2,3,4,5,6,'kavi','ramu'];
let array1=array;

console.log("assignment operator ",array1);
console.table(array1);


//Array.from()
let result=Array.from(array);
console.log("Array from method: ",result);


//spread operator
array1=[...array];
console.log('Spread opeartor ',array1);

//concat method
array1=[].concat(array);
console.log('Concat method ',array1);

//slice method
array1=array.slice();
console.log("Slice method ",array1);

//json parse() json.stringify()
array1=JSON.parse(JSON.stringify(array));
console.log("Json method of parse and stringify: ",array1);