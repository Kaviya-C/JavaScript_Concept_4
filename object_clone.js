let users={'name':'ramu','age':20}
let user1=users;


// Object.assign  method 
// spread operator
// above method only applicable to clone the object
console.log(users);

let result=Object.assign(users);
console.log(result);

result={...users};
console.log(result);