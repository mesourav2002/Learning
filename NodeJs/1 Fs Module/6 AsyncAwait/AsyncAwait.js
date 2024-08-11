// let x = () => "Hello";
// let y = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("Good");
//     }, 3000);
//   });
// };
// let z = () => "Sourav";
// let a = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("How Are You");
//     }, 6000);
//   });
// };

// let main = async () => {
//   console.log(x());
//   console.log(await y());
//   console.log(z());
//   console.log(await a());
// };
// main();

// !==============================================

const { promises } = require("dns");
const { accessSync } = require("fs");

let fs = require("fs").promises;
// console.log(fs)

// ? writeFile()

// let createFile = async () => {
//   await fs.writeFile("text", "welcome");
//   console.log("Created Fite & Data Added");
// };

// createFile();

// ? readFile()

// let reading = async () => {
//   let data = await fs.readFile("text", "utf-8");
//   console.log(data);
// };

// reading();

// ? appendFile

// let addNewData = async () => {
//   await fs.appendFile("text", "hello");
//   console.log("data added");
// };

// addNewData();

// ? unlink

// let Delete = async () => {
//   await fs
//     .unlink("text")
//     .then((_) => {
//       console.log("file is deleted ");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// Delete();

// todo : example program : read the data and create file add same data

// fs.readFile("text.txt","utf-8")
// .then((data)=>{
//     console.log(data)
//     fs.writeFile("demo.txt",data)
//     .then(_=>{
//         console.log("creating file succesfully")
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })

// ? mkdir() creating a folder

// let create = async () => {
//   await fs.mkdir("NewFolder");
//   console.log("Folder is cereated");
// };

// create();

// ? nested folder

// let nesterFolder = async () => {
//   await fs.mkdir("NewFolder/New1");
//   console.log("Folder is cereated");
// };

// nesterFolder()

//  ? creating file in nexted folder

// let createNestedFile = async () => {
//   await fs.writeFile("Newfolder/New1/demo.txt", "hello everone");
//   console.log("file is created ");
// };

// createNestedFile();

// ? adding data in nested file

// let addDataNested = async () => {
//  await fs.appendFile("Newfolder/New1/demo.txt", "hello qt");
//   console.log("addd succesfully");
// };

// addDataNested();

// ! deleting the folder with file using nexted method

// let sourav = async () => {
//   await fs.unlink("Newfolder/New1/App.html");

//   console.log("delete succefully");

//  await fs.rmdir("Newfolder/New1");

//   console.log("folder is deleted");
//  await fs.rmdir("Newfolder");

//   console.log("second Folder is deleted");
// };

// sourav()

// ! adding the folder with file using nexted method

// let Rocky = async () => {
//   await fs.mkdir("NewFolder");
//   console.log("Folder is cereated");

//   await fs.mkdir("NewFolder/New1");
//   console.log("Folder is cereated");

//   await fs.appendFile("Newfolder/New1/demo.txt", "hello I am created");
//   console.log("addd succesfully");
// };

// Rocky()

// ? rename

// let Rename = async () => {
//   await fs.rename("NewFolder/New1/demo.txt", "NewFolder/New1/App.html");
//   console.log("file is renamed ");
// };
//  Rename()
