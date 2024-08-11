const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    let read = fs.createReadStream("./index.html", "utf-8");
    read.pipe(res);
  } else if (req.url === "/about") {
    res.end("i am in about page");
  } else if (req.url === "/service") {
    res.end("i am in service page");
  } else if (req.url === "/contact") {
    res.end("i am in contact page");
  } else {
    res.end("Server is Not Found");
  }
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is ready to run");
});
