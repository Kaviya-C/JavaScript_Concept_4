// how to destruct the parameter

function sayHello(name) {
  console.log(`hello ${name}`);
}
sayHello("Kaviya");

console.log("-----------");

function sayHellos({ name }) {
  console.log(`hello ${name}`);
}
const person = { name: "geetha", age: 32 };
sayHellos(person);

console.log("-----------");

function sayHel({ name, age }) {
  console.log(`hello ${name},my age is ${age}`);
}
const person1 = { name: "geetha", age: 32 };
sayHel(person1);

console.log("-----------");

function defaultage({ name, age = "not given" }) {
  console.log(`hello ${name},>>> ${age}`);
}
const person3 = { name: "geetha" };
defaultage(person3);

// ---------------array-----------------

const numbers = [1, 2, 3];
function add([a, b, c]) {
  return a + b + c;
}
const res = add(numbers);
console.log(res);

// multiple parameters there mean use rest parameter
const persons = { name: "john", age: 29, city: "salem", country: "india" };
function sayHl({ name, age, ...rest }) {
  console.log(`this is  ${name},my age is ${age}`);
}

sayHl(persons);
