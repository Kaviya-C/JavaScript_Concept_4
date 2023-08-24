// function in js

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(123, 564));

//function with arbitary arguments

function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(90, 9, 8));
console.log(sum(3, 4, 5, 6, 6, 7, 7, 8));

// function with spread operator
function summing(...arg) {
  let total = 0;

  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  }

  return total;
}
console.log(summing(12, 3));
console.log(summing(7, 7, 8, 53, 90));

// use function as an expression

const adding = function (e, f) {
  return e + f;
};
console.log(adding(7, 100));

//Arrow Function
const variable = (a, b) => a + b;
console.log(variable(12, 13));

//arrow function with map
let number = [1, 2, 3, 4, 5];
number.map((val) => val * 2).forEach((v) => console.log(v));

//arrow function with filter
let words = ["apple", "orange", "jackfruit", "banana", "grape"];
words.filter((word) => word.length > 6).forEach((w) => console.log(w));

//arrow function with reduce
let numberss = [1, 2, 3, 4, 5];
let res = numberss.reduce((first, next) => first + next);
console.log(res);

// arrow function to create a closure
let createCounter=
()=>{
 let start=0;
 return()=>{
  start++;
  return start;
 }
};

let howManyTimesCall=createCounter();
console.log(howManyTimesCall);
console.log(howManyTimesCall());
console.log(howManyTimesCall());
console.log(howManyTimesCall());
console.log(howManyTimesCall());
















