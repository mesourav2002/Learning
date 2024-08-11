// ! uniform resourse locator

// * URL is web address used to locate a resourse on the internet
// *It is a string of characters the starts with "http://" or "https://" and is followed

// ? ex1 http://localhost:3000/home?-------
// *      protocol dominename portnumber path queryparameter

// ? ex2 https://localhost:3000/home?------
// *      protocol dominename path

/* 
npm init
npm i url

*/

// !=======================

let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "content-type": "text/plain" });
  url.parse(req.url, true);
  fs.readFile("./txet.txt", (err, data) => {
    if (err) res.end(err);
    res.end(data);
  });
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server Is Ready");
});




