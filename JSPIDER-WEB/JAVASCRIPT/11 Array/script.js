// 3.Array pop()
// 4.Array push()
// 5.Array shift()
// 6.Array unshift()
// 12.Array splice()

// map()
// filter()
// reduce()
// sort()

// indexOf()
// slice()
// includes()
// Array join()
// reverse()
// flat()

// 8.Array delete()
// 9.Array concat()
// 10.Array flat()

// 1.Array length
// 2.Array toString()

// Array length

// let fruits = ["Banana", "Orange", "Apple", "Mango"]; //The length property returns the length (size) of an array
// console.log(fruits.length);

// Array toString()

// let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.toString()); //The JavaScript method toString() converts an array to a string of array values.

// ? WAP to display only the numbers in this array list by using general function

// let arr = ["hi", 10, true, 200, "bye", false];

// function num(a) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof (a[i] )=== "number") {
//       console.log(`${i} ${arr[i]}`);
//     }
//   }
// }

// num(arr);

// ? WAP to display only even number from this array list by using arrow function

// let arr = [10, 15, 20, 25, 30, 35, 40];

// const num = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       console.log(`${i} ${a[i]}`);
//     }
//   }
// };

// num(arr);

//   todo =================== mathods  of array (Normal) ==============

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);

// // ! push()
// // todo added element in last

// arr.push("added", true);
// console.log(arr);

// // ! pop()
// // todo  : it its use to remove / delete the array elements from the array list from the last

// let x = arr.pop();
// let y = arr.pop();
// console.log(arr);
// console.log(`remove element =  ${x} , ${y}`);

// // ! shift()
// // todo remove element in first

// let a = arr.shift();
// console.log(arr);
// console.log(`remove element =  ${a}`);

// // ! unshift()
// // todo added element in first

// let b = arr.unshift(10);
// console.log(arr);

// // ! slice()

// // ? deleteing array element;

// let c = arr.splice(0, 2);
// console.log(arr);
// console.log("remove elemeny" + c);

// // ? adding array element

// let d = arr.splice(3, 0, "Sourav", true, "Rocky");
// console.log(arr);

// //  ? adding and deleteing
// let e = arr.splice(4, 2, false, "hello");
// console.log(arr);
// console.log(e);

// ! ============= higher order functyion ===================

// todo map()

// let arr = [2, 5, 6, 8, 4];
// console.log(arr);

// // function num(a) {
// //   for (let i = 0; i < a.length; i++) {
// //     console.log(a[i] + 1);
// //   }
// // }
// // num(arr);

// arr.map((element, index, array) => {
//   console.log(`${index}-${element + 1} `);
// });

// let num = Number(prompt("Enter Number"));

// function table(a) {
//   if (typeof a == "number") {
//     for (let i = 1; i <= 10; i++) {
//       let b = a * i;
//       console.log(`${a} * ${i} = ${b}`);
//     }
//   }
// }
// table(num);

// !==============================

// let arr = [10, "hi", "bye", true, 500, false, 1000];

// arr.map((element) => {f
//   if (typeof element === "number") {
//     console.log(element);
//   }
// });

// ! =======================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = arr.map((element) => {
//   return element * element;
// });

// // let a = arr.map((element) => element * element);

// console.log(a);

// !========================== Filter method used to  filter the array based on condition

// todo : - only even number print in array

// todo some common operation

// let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// let a = arr.filter((element) => {
//   if (element % 2 == 0) {
//     return element;
//   }
// });
// console.log(a);

// let arr = [10, "hi", "bye", true, 500, false, 1000];

// let a = arr.filter((element) => typeof element === "string");
// console.log(a);

// !========================== Reduce

// let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
// // let arr = [10, 20, true , 5000, "Bye", null + 1, 200, false];

// let a = arr.reduce((a, b) => {
//   let sum = a + b;
//   // let neg = a - b;
//   // console.log(`${a} + ${b} = ${sum}`);

//   return sum
//   // return neg;
// });
// console.log(a);

// !========================= sort

// let arr = [8, 6, 5, 7, 4, 1, 2, 0, 3, 9];
// console.log(arr);
// arr.sort();
// console.log(arr);

// let arrStr = ["apple", "grapes", "mango", "banana", "kiwi"];
// console.log(arrStr);
// arrStr.sort();
// console.log(arrStr);

// let arr = [63, 64, 8, 82, 49, 5, 78, 3, 92, 37];
// arr.sort();
// console.log(arr);

// arr.sort((a, b) => a - b);

// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// ? WAP to display second largest number by using arrow function

// let arr = [63, 264, 8, 802, 420, 50, 758, 350, 92, 375];

// let b = arr.sort((a, b) => b - a);
// console.log(arr.slice(1, 2));
// console.log(b[1]);

// ! indexOf()

// let str3 = ["Apple", "Banana", "Kiwi"];
// let c = str3.indexOf("Apple");
// console.log(c); // 0 index number

//! includes()

// let i3 = str3.includes("Apple");
// console.log(i3); //true

// let i4 = str3.includes("apple");
// console.log(i4); //false

//! slice

// let arr = [63, 64, 8, 82, 49, 5, 78, 3, 92, 37];
// // console.log(arr.slice(4 ,6));

//! join()

// let a = arr.join(" ");
// console.log(a); //typeof object to string

// !reverse

// let b = arr.reverse()
// console.log(b)

//! flat

// let arr = [63, 64, [8, 82, 49], 5, 78, [3, 92], 37];
// let c = arr.flat();
// console.log(c);

//! concat()
// let d = arr.concat("hello",29,39)
// console.log(d)

//!==================Sprade Operator

// let arr1=[10,20,39]
// let arr2=[40,50,70]

// let sum=[...arr1,arr2]

// // let sum=[arr1,...arr2]

// // let sum=[...arr1,...arr2]

// console.log(sum)

// function hello(...arr ){

//     console.log(arr)

//     console.log(...arr)

//      //!map

//      let sqrt = arr.map(element=> element * element)
//      console.log(sqrt)

//      //!sort method : arrangeing

//      let asending = sqrt.sort((a,b)=>a-b)
//      console.log(asending)

//      //! filter method : even

//      let even = asending.filter(element => element%2 ==0)
//      console.log(even)

//      //! reduce method addition

//      let add = even.reduce((para1 , para2)=>para1+para2)
//      console.log(add)

//     }
// hello(1,3,2,5,6,9,4,8,7)



