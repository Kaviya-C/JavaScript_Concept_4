//blockscope 
if(true)
{
 let blockscope='this is block scope variable';
 console.log(blockscope);
}
// console.log(blockscope);
// var mean global variable we can access anywhere 
// use let and const for block scope varible that avoid some conflicts name


//function scope

function myFunc()
{
  funcscope="this is function scope";
  console.log(funcscope);
  function nested()
  {
   console.log(funcscope);
  }
}
myFunc();
// var type for functionscope we can access anywhere



