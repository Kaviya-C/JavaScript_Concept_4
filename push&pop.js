//push add element at the end of the array

let users=['geetha','farthima','john','mathew','telusko'];
let users1=['maddy'];
users1.push(...users);
console.log(users);
console.log(users1);


//pop mean delete the element at the end of the array
console.log(users.pop());
console.log(users);

console.log(users.pop());
console.log(users);

// shift in js
// we can delete the element at the first index of the array
console.log(users.shift());
console.log(users);


console.log(users.shift());
console.log(users);


//unshift -- add element at the start of the index
console.log("returns length after adding the data in the array",users.unshift('Daniel'));
console.log(users);


users.fill('Kavi',0,2);
console.log(users);

//index of in js
// index of able to allow two parameter one is data anothe one from which index u want to start the search the given data
let student=['riyas','geetha','james','bond']
console.log('index of ',student.indexOf('bond'));


student.push('riyas');
console.log(student);
console.log(student.lastIndexOf('riyas'));

let address='cherry road';
console.log(address.lastIndexOf('r'));

let string="96";
console.log(string.padStart(6,0));
console.log(string.padEnd(8,0));

//every  & some
let n=[12,4,6,8];
// collect all even and odd seperately
let result=n.every((value)=>
{
 return value%2==0
});
console.log(result);


// some
let n1=[1,8,3,5,7];
//collect all even and odd seperately
let result1=n1.some((value)=>
{
 return value%2==0
});
console.log(result1);


function checkEven(value)
{
return value%2==0;
}
console.log(n1.some(checkEven));

let alien=[
{'names':'Hari','age':23,},
{'names':'ram','age':13,},
{'names':'Hari','age':21,},
];

function ageEligible(values){
 return values.age>=18;
}

let res=alien.every(ageEligible);
console.log("every method",res);
let res1=alien.some(ageEligible);
console.log("some method ",res1);
