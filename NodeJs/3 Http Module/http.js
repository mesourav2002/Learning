//   ! http : hyper text transfer protocol

// todo It is a protocol & it is used to transfer data between client & server

// ! methods of http
//! todo get ,put , patch,delete,post

// todo  : get method
// ? It is used to fetch the data from the sourse

// todo : post method
// ? It is used to sending data / creating new sourse

// todo : put method
// ? It is used to modify the stored data

// todo : delete method
// ? It is used to delete the resourse

// ! HTTP response status code

// *
// *
// *
// *
// *

// ! Http Module

// todo import http module

// const http = require("http");
// // console.log(http);

// let server = http.createServer((req, res) => {
//   res.writeHead(200, "OK", { "content-type": "text/plain" });
//   res.end("This Is My Server");
// });

// server.listen(3000, (err) => {
//   if (err) throw err;
//   console.log("Server is running in port 3000");
// });

// !ex2 serve html file

// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   fs.readFile("demo.html", "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       res.writeHead(200, "OK", { "content-type": "text/html" });
//       res.end(data);
//     }
//   });
// });

// server.listen(5000, (err) => {
//   if (err) throw err;
//   console.log("Server is ready With port 5000 ");
// });

// // !ex3 serve css file

// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   fs.readFile("style.css", "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       res.writeHead(200, "OK", { "content-type": "text/css" });
//       res.end(data);
//     }
//   });
// });

// server.listen(5000, (err) => {
//   if (err) throw err;
//   console.log("Server is ready With port 5000 ");
// });

// !ex3 serve json file

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.writeHead(200, "OK", { "content-type": "text/json" });
      res.end(data);
    }
  });
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is ready With port 5000 ");
});

// !=================================================================================

// !ex-4 serve the html file using stream

// //? import http

// const http = require("http");
// const fs = require("fs");

// // ? create Server

// let server = http.createServer((req, res) => {
//   res.writeHead(200, "OK", { "content-type": "text/html" });
//   let data = fs.createReadStream("./demo.html");
//   data.pipe(res);
// });

// // ? listen
// server.listen(5000, (err) => {
//   if (err) throw err;
//   console.log("Server Is Ready With Port 5000");
// });

// !ex-5 serve the json file using stream

// //? import http

// const http = require("http");
// const fs = require("fs");

// //? create Server

// let server = http.createServer((req, res) => {
//   res.writeHead(200, "OK", { "content-type": "text/json" });
//   let data = fs.createReadStream("./data.json");
//   data.pipe(res);
// });

// //? listen
// server.listen(5000, (err) => {
//   if (err) throw err;
//   console.log("Server Is Ready With Port 5000");
// });

// !ex-6 serve the css file using stream

// //? import http & fs

// let http = require("http");
// let fs = require("fs");

// // ? create Server

// let server = http.createServer((req, res) => {
//   res.writeHead(200, "OK", { "content-type": "text/css" });
//   let data = fs.createReadStream("./style.css");
//   data.pipe(res);
// });

// // ? listen

// server.listen(5000, (err) => {
//   if (err) throw err;
//   console.log("Server is Ready to run");
// });
