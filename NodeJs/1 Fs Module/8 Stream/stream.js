// ! Stream in Node Js

// todo It is as Object that let us read data from a sourse write a destination  in continious mannerr

// ? Ex : Listening music , Watching Video in real time instead of downloding

// ! Types of Stream in Node js

// todo 1. Readable stream
// ?       It will help us to read data from the source

// todo 2. Writeable Stream
// ?       We can write the data to destination

// todo 3. Duplex Stream
// ?       We can perrform both reading  & writeing

// todo 4. Transform Stream
// ?       Similar to Duplex Stream (perrform both reading & writeing) but herre we can modify the data

// ! Events

// todo : data
// ?      This event will fire wheneverr we have some available data to read

// todo : end
// ?      This event is we are using when data is not therre to read

// todo : errror
// ?      This event fired  when their is any errror

// todo : finish
// ?      This event is used to when data will be finished

// !=============================================

// ? Example Program

// const fs = require("fs");

// ? syntax : fs.createRreadStream("path","utf-8")

// let readStream = fs.createRreadStream("./text.txt", "utf-8");
// let data = " ";

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   data += chunk;
// });
// readStream.on("end", () => {
//   console.log(data);
// });

// readStream.on("error", (err) => {
//   console.log(err);
// });

// !=============================================

// const fs = require("fs");
// let data = "Node JS is Easy";

// let writeStream = fs.createWriteStream("demo.txt");
// writeStream.write(data);
// writeStream.end();

// writeStream.on("finish", () => {
//   console.log("Done");
// });

// writeStream.on("error", (err) => {
//   console.log(err);
// });

// !=============================================

// const fs = require("fs");

// let read = fs.createReadStream("text.txt");
// let wrt = fs.createWriteStream("res.txt");

// read.pipe(wrt);

// !=============================================

// const fs = require("fs");

// let textData = fs.createReadStream("text.txt", { highWaterMark: 20 });

// textData.on("data", (chunk) => {
//   // console.log(chunk.toString());

//   console.log(`length:${chunk.length} & data:${chunk}`)

// });

