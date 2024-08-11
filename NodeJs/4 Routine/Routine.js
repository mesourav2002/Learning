// ! Rouing
// > Routing defines how the client requests are handeled by the application endpoints.
// > Routing in Node refers to the process of determining how an application responds to client request to different endpoints(URL).
// > In a web application , these (URL's) endpoints typically correspond to different pages or functionalities withen the application.
// > Node.js along with framework like express , provides  a way to define routes, which are responsible for handling specific HTTP requeist and sending back appropritate responce.

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    let read = fs.createReadStream("./index.html", "utf-8");
    read.pipe(res);
  } else if (req.url == "/css") {
    res.writeHead(200, "OK", { "content-type": "text/css" });
    fs.createReadStream("./style.css", "utf-8").pipe(res);
  } else if (req.url == "/json") {
    res.writeHead(200, "OK", { "content-type": "application/json" });
    fs.createReadStream("./data.json", "utf-8").pipe(res);
  } else {
    res.end("Server is Not Found");
  }
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is ready to runn");
});
