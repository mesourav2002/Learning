let fs = require("fs").promises;

// ? 1.      writeFile()
// ? 2.      readFile()
// ? 3.      appendFile()
// ? 4.      unlink ()
// ? 5.      mkdir()
// ? 6.      rmdir()
// ? 7.      rename ()

//! Sync

// ? syntax: fs.writeFileSync("file path","data")
// ? syntax: fs.readFileSync("file path","utf-8")
// ? syntax: fs.appendFileSync("file path" , "data")

// !=====================================

// let f1 = async () => {
//   await fs.mkdir("ex1");
//   console.log("Folder Created");
//   let f2 = async () => {
//     await fs.mkdir("ex1/ex2");
//     console.log("Nested Folder Created");
//     let f3 = async () => {
//       await fs.writeFile("ex1/ex2/text.txt", "Hello");
//       console.log("File with data added");
//     };
//     f3();
//   };
//   f2();
// };
// f1();

// !===========================================

// let rd = async () => {
//   let data = await fs.readFile("ex1/ex2/text.txt", "utf-8");
//   console.log("data is readed");
//   let fol = async () => {
//     await fs.mkdir("ex1/ex3");
//     console.log("Folder is Created");

//     let crt = async () => {
//       await fs.writeFile("ex1/ex3/demo.txt", data);
//       console.log("File is Created & data is added");
//     };
//     crt();
//   };
//   fol();
// };

// rd();

// !=========================================

// let ab = async () => {
//   let data = await fs.readFile("ex1/ex2/text.txt", "utf-8");
//   console.log("data is readed");
//   let cd = async () => {
//     await fs.mkdir("ex1/ex4");
//     console.log("Folder is Created");

//     let ef = async () => {
//       await fs.writeFile("ex1/ex4/demo.txt", data);
//       console.log("File is Created & data is added");
//     };
//     ef();
//   };
//   cd();
// };
// ab();

// !========================================
