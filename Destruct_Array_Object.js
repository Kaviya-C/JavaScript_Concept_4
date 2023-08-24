const a=10;
console.log(a);
// a=90;
const names=['ram','heena','oviya']
console.log(names);
// in array even though we mentioning the type as const we can change the data not the complete re assignment
//const applicable  to avoid the developer to reassigning the whole value 
//in short re assignment is not applicable for const;



//Destructuring array in js
let student=['kaviya',10,20,30,90,'raju','ram'];
let [as,,c,...d]=student;
console.log(as);//console.log(b);
console.log(c);console.log(d);


// nested array destructure
let nestedarray=[[1,2],['kaviiya','geetha'],['uvan','arun'],[7,8]];
let [[g,h],[i,j],[k,l],[m,n]]=nestedarray;
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);



//Destructure in object
let person={fname:'kavii',age:22,company:'Infosys'}
let {fname,age,company}=person;
console.log(fname);
console.log(age);
console.log(company );

//nested destructure object

let alien=
{
 firstname:'kaviya',
 lastname:'c',
 ages:22,
 TechnicalSkills:
 {
  strong:'Java Developer',
  good:  'Full stack developer',
  practising:'Js now'
 }
};

let {firstname,lastname,ages,TechnicalSkills:{strong,good,practising}}=alien;
console.log(firstname);
console.log(lastname);
console.log(ages);
console.log(strong);
console.log(good);
console.log(practising);

// if any property is not there in object mean we can assign a default value to that property
// if this alien not contain age mean we can assign in destructure object place age=0 somtthing we can give








