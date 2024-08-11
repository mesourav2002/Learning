// let { sum, sub, mul } = require("./arithmetic");

// console.log(sum(10, 20));

// let s = sub(20, 15);
// console.log(s);

// let n1 = 20;
// let n2 = 20;

// let res = mul(n1, n2);

// console.log(res);

// !~=====================

// let { add, sub } = require("./arithmetic");
// console.log(add(20, 50));
// console.log(sub(20, 10));

// ? 2nd way

// let val = require("./arithmetic")

// console.log(val.add(20,30))

// !========================


// let val = require("./arithmetic")

// console.log(val.add(200,30))

// ? Object Destructureing
// let {add , sub} = val


// console.log(sub(10,5))
// console.log(add(20,30))

// !========================

let val = require("./arithmetic")

let {calculateAge , generateOtp} = val

console.log(calculateAge(2002))
console.log(generateOtp())
