// const { mkdir } = require("fs")

let fs = require("fs").promises
// console.log("heloo")


// ! WriteFile():
// ? syntax : fs.watchFile("path" ,"data").then().catch() 

// fs.writeFile("text.txt","hello everone") 
// .then(()=>{
//     console.log("file is created ")
// })
// .catch((err)=>{
//     console.log(err)
// })


// ! ReadFile()
// ? syntax : fs.ReadFile("path" ,"utf-8").then().catch() 

// fs.readFile("text.txt","utf-8") 
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ! appendFile

// ? Syntax : fs.appendFile("path","newdata").then().catch()

// fs.appendFile("text.txt","hiii")
//     .then(_=>{
//         console.log("data is added")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// !unlink
// ? Syntax : fs.unlink("demo.txt").then() .catch()


// fs.unlink("demo.txt")
// .then(_=>{
//     console.log("file is deleted ")
//     })
//     .catch((err)=>{
//         console.log(err)

// })




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

// ! creating a folder 
// ? fs.mkdir("foldername ") .then() .catch()

// fs.mkdir("NewFolder") .then(_=>{
//     console.log("Folder is cereated")
// })
// .catch((err)=>{
//     console.log(err)
// })

// ! nested folder

// fs.mkdir("NewFolder/New1") .then(_=>{
//         console.log("Folder is cereated")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//  ! creating file in nexted folder

// fs.writeFile("Newfolder/New1/demo.txt","hello everone") 
// .then(()=>{
//     console.log("file is created ")
// })
// .catch((err)=>{
//     console.log(err)
// })


// ! adding data in nested file
// fs.appendFile("Newfolder/New1/demo.txt","hello qt") 
// .then(()=>{
//     console.log("addd succesfully")
// })
// .catch((err)=>{
//     console.log(err)
// })



//  ! deleting the folder with file using nexted method
// fs.unlink("Newfolder/New1/demo.txt")
//     .then(() => {
//         console.log("delete succefully")

//         fs.rmdir("Newfolder/New1")
//         .then(_ => {
//             console.log("folder is deleted")
//         fs.rmdir("Newfolder")
//         .then(_ => {
//             console.log("second Folder is deleted")
//             })
//             .catch((err) => {
//                 console.log(err)
//                 })
//             })
//             .catch((err) => {
//                 console.log(err)
//                 })
//         })
//     .catch ((err) => {
//     console.log(err)
// })


// ! rename 

// fs.rename("Promisess/text.txt","Promisess/Demo.txt")
// .then(_=>{
//     console.log("file is renamed ")
// })
// .catch((err)=>{
//     console.log(err)
// })



