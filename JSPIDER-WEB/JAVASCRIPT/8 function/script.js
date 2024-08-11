// ! (`${}`) = that is interpolation method

// ! (1)------------------ general function------------------

// todo Function without parameter & without return value ------------------------

// function demo() {
//   console.log("i am in function");
// }
// demo();

// function err() {
//   console.error("Invalid Options");
// }
// err();

// function wrn() {
//   console.warn("Get Ready For Mock");
// }
// wrn();

// todo function with parameter & without return value ----------------

// function num(x) {
//   console.log(x);
// }
// num(100);
// num()

// ? WAP to add 2 number using general function ----------------

// function add(a, b) {
//   let sum = a + b;
//   console.log(`${a} + ${b} = ${sum}`);
// }
// add(1, 3);
// add(10, 30);

//? Wap to check even or odd number by using genarl function with parameter

// function evenOdd(num) {
// if (num % 2 == 0) {
//   console.log(` ${num} even number`);
// } else {
//   console.log(`${num} odd number`);
// }
// if (typeof(num) === "number") {
//   if (num % 2 == 0) {
//     console.log(`${num} is even number`);
//   } else {
//     console.log(`${num} is odd number`);
//   }
// } else {
//   console.log(`${num} is not a number`);
// }
// console.log(num % 2 == 0 ? `${num} is even number` : `${num} is odd number`);
// }
// evenOdd(prompt("enter your number"));

// ? WAP to print even number from 25-50 using general function with parameter

// function num(a, b) {
//   for (i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       console.log(i)
//     }
//   }
// }
// num(25, 50);

// !-------------------------------------------------------

// function foo(msg = "invalid") {
//   console.log(msg);
// }
// foo("hello");
// foo();

// function Login(type) {
//console.log(`<input type=${type}> <br><br>`);
// }
// Login("button");
// Login("radio");
// Login("color");
// Login("date");

// function fun(a, b, c = 420) {
//    b="is"
//   console.log(a, b, c);
// }

// fun("dinga");

// todo function without parameter with return type

// function fun() {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   return sum;

// }
// console.log(fun())

// todo function with parameter with return type

// function fun(a, b) {
//   let sum = a + b;
// //  console.log(sum);
//   return sum  ;
// }

// console.log(fun(10, 20));

//  ! (2) ---------------- anonymous function ------------------

// todo Function without parameter &  without return value ------------------------

// let demo = function () {
//   console.log("i am in function");
// };
// demo();

// let err = function () {
//   console.error("Invalid Options");
// };
// err();

// let wrn = function () {
//   console.warn("Get Ready For Mock");
// };
// wrn();

// todo function with parameter & without return value ----------------

// let num = function (x) {
//   console.log(x);
// };
// num(100);
// num();

// todo function without parameter with return type

// let fun = function () {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   return sum;
// };
// console.log(fun());

// todo function with parameter with return type

// let fun1=function (a, b) {
//   let sum = a + b;

//   return sum  ;
// }
// console.log(fun1(1,2))

// ?WAP to check even odd number by using anonymous function with parameter return value

// let evenOdd = function (num) {
//   let number =
//     num % 2 == 0 ? `${num} is even number` : ` ${num} is odd number `;
//   return number;
// };
// console.log(evenOdd(5));

//  ! (3) ---------------- Arrow function ------------------

// const add = (num) => {
//   console.log("i am arrow function ");
//   let number =
//     num % 2 == 0 ? `${num} is even number` : ` ${num} is odd number `;
//   return number;
// };
// console.log(add(20));

// let fun = (x) => {
//   console.log("Hello I am in arrow function");
//   return x;
// };
// console.log(fun(100));

// let arrow = (a) => {
//   console.log("hello " + a);
// };
// arrow("rocky");
// let arrow1 = (_) => {
//   console.log("hello " + _);
// };
// arrow1("sourav");

// arrow1();

// ! (4) self invoking function / iif imme

// (function () {
//   console.log("hello");
// })();

// (function fun() {
//   console.log("hello");
// })();

// arrow function in iif
// ((para) => {
//   console.log("arrow IIF " + para);
// })("rocky");

// ! (5)------------- callback function -------------------

// let num = function () {
//   return 100;
// };

// let sum = function (a, b) {
//   let add = a() + b;
//   console.log(add);
// };

// sum(num, 200);

//! ------------- higherorder function -------------------

// console.log(Math.floor(Math.random() * 9000  + 9999));

// let surename = function () {
//   let k = "Dash";
//   return k;
// };

// function fullName(fnm, lnm) {
//   console.log(`my name is ${fnm} ${lnm}`);
// }

// fullName("Sheeraz", "Khan");
// fullName("Sourav", surename());

