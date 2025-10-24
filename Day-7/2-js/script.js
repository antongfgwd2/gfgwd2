// var, let and const

// var a = 0;
// let b = "Jack";
// const c = true;

// console.log(a);
// console.log(b);
// console.log(c);

// block scope and global scope

// const a = 10;
// console.log("Before block ", a);

// if (a == 10) {
//   a = 20;
//   console.log("Inside block ", a);
// }

// console.log("After block ", a);

// primitive types

// 1. String - "Jack", "K", "0" , "$#$34","true"
// 2. Number - 123, 0.43
// 3. Boolean - true and false
// 4. undefined - undefined
// 5. null - null

// let a = null;

// console.log(a);

// non primitive types

// 1. Object
// 2. Array

// const fruits = ["Mango", 1, true, "orange"];

// console.log(fruits[fruits.length - 1]);
// fruits[1] = "Grapes";
// fruits = [1, 2, 3, 4];

// console.log(fruits);

// const person = {
//   fName: "Kevin",
//   lName: "Jacob",
//   age: 25,
//   required: false,
//   sports: ["Football", "Cricket"],
//   parents: {
//     fName: "Jacbos",
//     mName: "Lenny",
//   },
// };

// const input = "parents";

// console.log(person[input]["mName"]);

// function hey(input1, input2, input3) {
//   console.log(input1 + input2 + input3);
// }

//function expression
// let hey = function (input1, input2, input3) {
//   console.log(input1 + input2 + input3);
// };

//arrow functions - => will always be a function expression
// let hey = (input1, input2, input3) => {
//   console.log(input1 + input2 + input3);
// };

// IIFE - immediately invoked function expression
// (function () {
//   console.log("Called");
// })();

// hey(10, 20, 30);
// hey(100, 200, 300);

// hoisting

// variable hoisting

// console.log(x);

// let x = 10; //tdz - temporal dead zone

// res();

// function hello() {
//   console.log("Hello world");
// }

// var res = function () {
//   console.log("Hello world");
// };

// for, while, do while

// for(initializer; condition; incrementer/decrementer)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let i = 10;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 10);
