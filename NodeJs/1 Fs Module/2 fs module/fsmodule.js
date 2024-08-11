// ! File System Module ❤️😂

// !========================================================

// ! write / create file synchrously
// todo method => writeFileSync() : This Method is used to create file & then add data to the file
// ? syntax : fs.writeFileSync("file path","data")

let fs = require("fs"); // file system module

// console.log(fs);

// fs.writeFileSync("text.txt", "Welcome");
// fs.writeFileSync("demo.txt", "Java script");

// console.log("File is Created Data is Added");


// todo : NOTE : In this method new data is added & Old is Vanished / Deleted (Data is updated in .txt file) 

// !=======================================================

// ! read file scnchrously
// todo method : readFileSync() : This method is used to read the data from another different file
// ? synax: fs.readFileSync("file path","utf-8")

// todo : To convert Unicode to string format we are using utf-8 (Unicode Transformation Format)

// let data = fs.readFileSync("demo.txt") 
// console.log(data) // <Buffer 4a 61 76 61 20 73 63 72 69 70 74> //? unicode (Buffer Data)

// let dat = fs.readFileSync("demo.txt","utf-8") //  Unicode Transformation Format
// console.log(dat)  //Java script





// todo : Using toString() method we can also convert unicode data to the string 

// let Data  = fs.readFileSync("demo.txt")
// console.log(Data.toString()) //Java script

// !=======================================================

// ! read & write with  Synchronously
// ? readFileSync() & writeFileSync()

// let txtData = fs.readFileSync("text.txt","utf-8")
// // console.log(txtData)

// console.log("Sucessfully readed data ")

// fs.writeFileSync("newFile.txt",txtData)
// console.log( "Sucessfully Data Added")

/* 
 todo Note:
 
 In this example extra data is not adding it is updating to the new data (i.e previously data is deleteing & new data is adding),
 If we want to add extra data to the same file then we can use append file method
 
*/

// !======================================================

// ! Appending data to the file with Synchronously 
// todo : method : appendFileSync(): This method is use to add extra data  / append the data to the file 

// ? syntax : fs.appendFileSync("file path" , "data")


// fs.appendFileSync("text.txt","hello new data")
// console.log("new data added")
