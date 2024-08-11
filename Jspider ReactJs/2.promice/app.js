

// let p = new Promise((res, rej) => {
//   if (true) {
//     res("Sucess");
//   } else {
//     rej("Failure");
//   }
// });

// console.log(p);
// p.then((data) => {
//   console.log(data);
// });
// p.catch((err) => {
//   console.log(err);
// });

//! short type to write promise

// let p = new Promise((res, rej) => {
//   true ? res("Done") : rej("Not Done");
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

//!asyn

// let a = () => {
//   return "hello";
// };
// let b = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("welcome to")
//     },2000)
//   });
// };
// let c = () => {
//   return "react js class";
// };
// // console.log(a());
// // console.log(b());
// // console.log(c());

// let main =async () => {
//   console.log(a());
//   console.log(await b());
//   console.log(c());
// };

// main();


// !================== API

//! The preventDefault() method cancels the event if it is cancelable,