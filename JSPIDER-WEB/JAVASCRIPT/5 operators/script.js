// //  operators

// let a = 10;
// let b = 20;
// let c = "30";

// console.log(typeof a); // number
// console.log(typeof b); // number
// console.log(typeof c); // string

// let sum = a + b;
// console.log(sum); //30
// console.log(typeof sum); // number

// let x = a + c;
// console.log(x); // 1030
// console.log(typeof x); // string

// let x1 = a + b + c;
// console.log(x1); //3030
// console.log(typeof x1); // string

// console.log(10 + 20 + "30"); // 3030
// console.log(10 + "20" + 30); // 102030
// console.log(10 * 10); // 100
// console.log(10 * "10"); // 100

// console.log("3" + "3" - "3"); //30

// let h = "3" + 3 - "3";
// console.log(h); //03
// console.log(typeof h); //string

// console.log(true + 1); //2
// console.log(true - 1); //0
// console.log(true - "1"); //0
// console.log(true + true); //2
// console.log(true + "1"); //true1
// console.log("true" + 1); //true1
// console.log("true" - 1); //NaN
// console.log(undefined + undefined); //NaN
// console.log(NaN + NaN); //NaN

// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0

// console.log(1 + null); // 1
// console.log(1 + NaN); // NaN
// console.log(1 + undefined); // NaN
// console.log(1 + "undefined"); // 1undefined
// console.log(null + undefined + true + "NaN"); //NaNNaNconsole.log(null+undefined+true+"NaN") //NaNNaN
// console.log(undefined + "NaN" + true + null); //NaNNaN
// console.log(undefined + "NaN" + true - null); //NaNNaN

// console.log(true - "false" +"true");

// ----------------------------------------------------------------

// Concadination

// let p = 10;
// let q = 20;
// let r = p + q;

// console.log(p, q, r);

// console.log(10, 25 + 20 + "hii");
// console.log(10, 25 + 20, "hii");
// console.log(10 + 25 + 20, "hii");

// let fname = "Dinga";
// let lname = "Raja";
// let age = 25;

// console.log("My name is " + fname + " " + lname + " & age is " + age);

// console.log("My name is", fname, lname, "& age is", age); //Icorrect way not use this

// // Interpolation

// console.log(`My name is ${fname} ${lname} & age is ${age}`);

// --------------------------------------------------

// example2

// let fname = "Dingi";
// let lname = "Rani";
// let place = "Goa";
// let deg = "BE";
// let stream = "CS";
// let yop = 2023;
// let dob = 2002;
// let age = 2024 - dob;

// console.log(
//   `My name is ${fname} ${lname} , and i am from ${place} my qualification is ${deg} in branch of ${stream} and my passout year is ${yop} and my date of birth is ${dob} and my age is ${age}`
// );
