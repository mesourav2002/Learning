//! fs module using async callback

const { error } = require("console");
let fs = require("fs");

// todo writeFile("path" , "data" , CB)

// fs.writeFile("demo.txt", "Good Morning", (err) => {
//   if (err) throw err;
//   console.log("File is Created & Data is Added")
// });

// todo readFile ("path","utf-8",CB)

// fs.readFile("demo.txt" , "utf-8" ,(err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

// todo appendFile("file","data",CB)

// fs.appendFile("demo.txt", " Welcome", (err) => {
//   if (err) throw err;
//   console.log("data added");
// });

//!=============

// todo unlink ("path",CB): This method is used to delete the file by using  asyncronous callback

// fs.unlink("folder1", (err) => {
//   if (err) throw err;
//   console.log("File id Deleted");
// });

// todo mkdir() : make directory / folder creation

// fs.mkdir("folder1", (err) => {
//   if (err) throw err;
//   console.log("folder is created");
// });

// todo Nested folder

// fs.mkdir("folder1/folder2", (err) => {
//     if (err) throw err;
//     console.log("folder is created");
//   });

// todo Create file in Nested folder

//  fs.writeFile("folder1/folder2/file.txt", "Good Morning", (err) => {
//   if (err) throw err;
//   console.log("File is Created & Data is Added")
// });

// ! read text

//  fs.readFile("folder1/folder2/file.txt", "utf-8",(err,data) => {
//     if (err) throw err;

//     console.log(" Data is  ")

//     fs.writeFile("folder1/file.txt", data, (err) => {
//         if (err) throw err;
//         console.log("File is Created & Data is Added")
//       });
//   });

// todo rmdir() remove directory  : this method is used to delete directory / folder from workshop

// fs.unlink("folder1/folder2/file.txt",(err)=>{
//     if (err) throw err
//     console.log("file is deleted")
// })

// !folder delete

// fs.rmdir("folder1/folder2" , err => {
//     if(err ) throw err
//     console.log("folder delete")
// })

//  todo rename() : this method is use to rename the file  & we can change the different extention

// fs.rename("folder1/file.js","file.txt",err=>{
//     if (err ) throw err
//     console.log("Its change to js")
// })

// !============================ Create

// fs.mkdir("WebTech",err=>{
//     if (err) throw err
//     console.log("file created")
//     fs.mkdir("WebTech/Backend",err =>{
//         if (err) throw err
//         console.log("Netested folder is created")
//         fs.writeFile("WebTech/Backend/Nodejs.txt","Node Js Class" , err =>{
//             if (err) throw err
//             console.log("File Created")
//         })
//     })
// })

// ! delete

// fs.unlink("WebTech/Backend/Nodejs.txt", (err) => {
//   if (err) throw err;
//   console.log("file deleted");

//   fs.rmdir("WebTech/Backend", (err) => {
//     if (err) throw err;
//     console.log(" nested folder delete");

//     fs.rmdir("WebTech", (err) => {
//       if (err) throw err;
//       console.log("folder delete");
//     });
//   });
// });



