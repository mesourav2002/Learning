// ! Events

const EventEmitter = require("stream");
// console.log(EventEmitter);

// let emitter = new EventEmitter();
// console.log(emitter);

// emitter.on("execute", () => {
//   console.log("Thsi is an event");
// });

// emitter.emit("execute");

//    todo : emit
//    ?It is used to trigger any events

//    todo : on
//    ?It is used to add a callback function & this callback function will be execute when event is triggered

let emitter = new EventEmitter();

emitter.on("msg", (sender, reciver) => {
  console.log(`${sender} is Sending Rose to ${reciver}`);
});
emitter.emit("msz", "Sourav", "Kumar");
