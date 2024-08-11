//Number
console.warn("Number inbuilt method");

let num1 = Number();
console.log(num1); //0
console.log(typeof num1); //Number

let num2 = Number(100);
console.log(num2); // 100
console.log(typeof num2); //Number

let num3 = Number(true);
console.log(num3); // 1
console.log(typeof num3); //Number

let num4 = Number(false);
console.log(num4); // 0
console.log(typeof num4); //Number

let num5 = Number("hi");
console.log(num5); // NAN (Not A Number)
console.log(typeof num5); //Number

//------------------------------------------

// String

console.warn("String Inbuilt Method ");

let str = String("hello");
console.log(str); // hello
console.log(typeof str); // string

let str1 = String(100);
console.log(str1); //100
console.log(typeof str1); // string

let str2 = String(true);
console.log(str2); //true
console.log(typeof str2); //string

let str3 = String();
console.log(str3); // empty space
console.log(typeof str3); //string

// let str4 = String(abc);
// console.log(str4); // error
// console.log(typeof str4);  //string

// -------------------------------------------------

//Boolean

console.warn("boolen inbuilt method");

let b = Boolean(true);
console.log(b); //   true
console.log(typeof b); //Boolean

let bool = true;
let b1 = Boolean(!bool);
console.log(b1); // false
console.log(typeof b1); //Boolean

let b2 = Boolean("hii");
console.log(b2); //true
console.log(typeof b2); //Boolean

let b3 = Boolean(!"bye");
console.log(b3); //false
console.log(typeof b3); //Boolean

let b4 = Boolean(100 + 20 == 20 + 100);
console.log(b4);
console.log(typeof b4); //Boolean

//-----------------------------------------

// Undefine

console.warn("undefine inbuilt method");

let x;
console.log(x); // undefined
console.log(typeof x); // undefined

let x1 = undefined;
console.log(x1); // undefined
console.log(typeof x1); // undefined
