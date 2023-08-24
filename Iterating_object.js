let users = {
  firstname: "Kaviya",
  company: "Wipro",
  salary: 50_000,
  role: "FullStackDeveloper",
};

// using for-in loop
for (let keys in users) {
  console.log(`${keys} , ${users[keys]}`);
}

// using Object.keys()
let allkey = Object.keys(users);
console.log(allkey);
allkey.forEach((value) => console.log(users[value]));

//using object.values()
let values = Object.values(users);
console.log(values);
values.forEach((val) => console.log(val));

//using Object.entries()

let lasttime = Object.entries(users);
lasttime.forEach((entry) => {
  console.log(`${entry[0]}>>>>${entry[1]}`);
});

// normal for loop
for (let index = 0; index < lasttime.length; index++) {
  console.log(lasttime[index]);
}
