// ! OS Module

// * OS is a node module used to provide information about the computer operating system

// ? Advantages

// * It provides functions to interact with the operating system , its provides the
// * hostname of the operating system and returns the amount of free system memory in bytes

let os = require("os");

let a = os.arch();
// console.log("CPU Architecture " + a);

let fre = os.freemem();
// console.log("Free Memory " + fre);

let total = os.totalmem();
// console.log("Total Memory in Bytes" + total);

// ! Calculation of memory

let kb = total / 1024;
// console.log("Memory in KB " + kb);

let mb = kb / 1024;
// console.log("Memory in MB " + mb);

let gb = mb / 1024;
// console.log("Memory in GB " + gb);

// !=========

let netwrk = os.networkInterfaces();
// console.log(netwrk);

let temp = os.tmpdir();
// console.log(temp);

let t = os.type();
// console.log(t);

let host = os.hostname();
// console.log(host)

let plat = os.platform();
// console.log(plat)

let home = os.homedir()
console.log(home)