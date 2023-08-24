 // creating object in 4 ways
 // object literals

 let person=
 {
  firstname:'raju',
  lastname:'vinay',
  company:'zoho',
  age:28

 };

console.log("Object Literals: ",person);
 

// creating object by using object constructor
let alien=new Object();
alien.names='Kaviya';
alien.age=22;
alien.company="Integel Institute of Technology";
alien.lastname='C';
console.log("Object Constructor ",alien);



//creating object by object.create(prototype,propertiesobject)

let peopleProto=
{
 say:function()
 {
  console.log(this.fname);
 }
}

let peoples=Object.create(peopleProto);
peoples.finame='Geetha';
peoples.laname='kumar';
peoples.age=24;
peoples.companies='Wipro';
console.log('object create method ',peoples);

// create object using class

class Persons{
 constructor(names,aged,comp)
 {
  this.first=names;
  this.Age=aged;
  this.company=comp;
 }
}

let lastObj=new Persons('john',26,'Capgemini');
console.log('class : ',lastObj);











