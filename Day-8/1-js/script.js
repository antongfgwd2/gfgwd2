// copy by value

// let a = 10;
// console.log("a:", a);
// let b = a;
// console.log("b:", b);
// a = 20;
// console.log("a:", a);
// console.log("b:", b);

// copy by reference
const user = {
  name: "Kevin",
  age: 24,
  email: "kevin@gmail.com",
};

console.log("user", user);

// const newUser = user;
const newUser = { ...user };

console.log("newUser", newUser);

newUser.age = 55;
user.email = "kevin123@gmail.com";

console.log("user", user);
console.log("newUser", newUser);

// spread operator - ...
