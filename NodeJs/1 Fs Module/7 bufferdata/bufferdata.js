// ! Buffer Methods

// ? It is Temporary storage that is used to store chunk of data & transfer it from on place to another place

// ? A buffer is a way to store and manipulate binary data in node.js

// ?EX : Images , Video ,Audio ets

// ? ASCII & Binary value is note same

// ! Buffer.from()
// todo : This Method is use to check  buffer value from the string

// let buf = Buffer.from("hello");

// // ? It will give  buffer data
// console.log(buf); // <Buffer 68 65 6c 6c 6f>

// // ? convert buffer data to original string
// console.log(buf.toString()); // hello

// ! Buffer.alloc(size,fill)

// let buff = Buffer.from("Mern Developer");
// console.log(buff); //<Buffer 4d 65 72 6e 20 44 65 76 65 6c 6f 70 65 72>

// let b1 = Buffer.alloc(6);
// console.log(b1); //<Buffer 00 00 00 00 00 00>

// let b2 = Buffer.alloc(4, "M");
// console.log(b2); // <Buffer 4d 4d 4d 4d>

// let str1 = Buffer.alloc(4);
// str1.write("Javascript");
// console.log(str1.toString()); // // java

// ! Buffer.isBuffer()

// let buf = Buffer.from("hello");
// let str = "hello";

// console.log(Buffer.isBuffer(buf)); //true
// console.log(Buffer.isBuffer(str)); //false

// console.log(buf.length); // 5

// !Example

let str = Buffer.from("node javascript class");
console.log(str.toString()); //node javascript class
console.log(str.length); // 21
let x = Buffer.alloc(5);
console.log(x.copy(str));  // 5
let y = Buffer.alloc(5);
console.log(y.toString())