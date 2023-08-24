// dot notation and bracket notation


let person=
{
 fname:'farina',
 lname:'mohammad',
 age:25
}

//dot notation
console.log(person.fname);
console.log(person.lname);
console.log(person.age);

// bracket notation
console.log(person['fname']);
console.log(person['lname']);
console.log(person['age']);


// bracket notation if the object property having  2 name seperated by space 
// eg first name for this purpose we can use quotes
// we cannot access this property by using dot operator
// we can accces this by bracket notation



// we can also store the property field name
let key='fname';
console.log(person[key]);