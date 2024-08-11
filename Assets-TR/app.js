// ! Find Missing Number

// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num);
//   console.log(expectedSum - actualSum);
// }

// const array = [1, 2, 4, 6, 3, 7, 8,9];
// findMissingNumber(array);

// ! Convert 1st letter to UpperCase in a string

// let str = "sourav";
// s1 = str.substring(0, 1).toUpperCase(); // first letter = J
// s2 = str.substring(1); // after 1st letter = avatpoint
// console.log(s1 + s2);

// ? 2d Way

// let Name = (a) => {
//   let b = a
//     .split(" ")
//     .map((ele) => {
//       return ele[0].toUpperCase() + ele.slice(1);
//     })
//     .join();
//   console.log(b);
// };

// Name("rsele");

// !remove duplicates from array

// const number=[1,2,3,3,4,5,6,7,6,10,4,]
// const uniquenumber =[...new Set(number)]
// console.log(uniquenumber)

//!===

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })(); // 1 4 3 2

//!===

// var x = 2;
// (function () {
//   y = 5;
//   y = y + 5;
//   console.log(x, y);
// })(); // 2 10

//!===

// let a = "rocky";
// let aa = "sourav";

// b = a.split(""); // ['r', 'o', 'c', 'k', 'y']
// e = aa.split(""); // ['s', 'o', 'u', 'r', 'a', 'v']

// console.log(b);
// console.log(e);

// b.push(e)

// let f =b.flat()
// console.log(f)

// console.log(b);

// let c = b.slice(1, 2);
// console.log(c); // ['o']

// let d = e.splice(2, 1,2);
// console.log(d); // ['u']
// console.log(e) // ['s', 'o', 2, 'r', 'a', 'v']

// !=== factorial

// let factorial = (a) => {
//   if (a === 0) {
//     return 1;
//   } else {
//     return a * factorial(a - 1);
//   }
// };

// console.log(factorial(1));

// !==== max num
// let a = [3, 5, 7, 87, 3, 35, 76];
// function findMaxNumber(arr) {
//   console.log(Math.max(...arr));
// }

// findMaxNumber(a)
// !==== paliondrome
// function isPalindrome(str) {
//   let str1 = str.split("").reverse().join("");
//   if (str === str1) {
//     console.log("right");
//   }
// }

// isPalindrome("sos");

//!==== prime number

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// isPrime(11) ? console.log("prime") : console.log("not a prime");

// !====

// const n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += j
//     }
//     console.log(str);
// }

// let h = 5;
// for (let i = 1; i <= h; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log("Buzz");
//   }
//   if (i % 5 == 0) {
//     console.log("Hello");
//   }
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log("BuzzHello");
//   }
// }
