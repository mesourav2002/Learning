/* // todo : ------------------------------------

let a = 10;
let b = "10";

if (a == b) {
  console.log("Hii");
} else {
  console.log("Byy");
}

a == b ? console.log("Hii") : console.log("Byy");

// todo : even odd ----------------------------------

let x = "10";

if (x % 2 == 0) {
  console.log(`${x} is even number`);
} else {
  console.log(`${x} is odd number`);
}

// todo : rcb own  ----------------------------------

let rcb = "own";

if (rcb == "own") {
  console.log("E sala cub Namdu");
} else {
  console.log("Next Sala cup Namde");
}

// todo :Mock ex-----------------------

let mock = "clear";

if (mock == "clear") {
  console.log("Getting Requirments");
} else {
  console.log("Moye Moye");
}

// todo : --------------------------

let num = "a";
if (num > 0) {
  console.log(`${num} positive number`);
} else if (num < 0) {
  console.log(`${num} negetive number`);
} else {
  console.log(`${num} is nithetr + nor -ve number`);
}

// todo ----------------------------------

let num1 = 1;

if (typeof num1 === "number") {
  if (num1 > 0) {
    console.log(`${num1} positive number`);
  } else if (num < 0) {
    console.log(`${num1} negetive number`);
  } else {
    console.log(`${num1} is nithetr + nor -ve number`);
  }
} else {
  console.log("Enter Proper Number");
}

todo:----------------------------------

let numm = 10;
if (typeof numm === "number") {
  if (numm >= 0 && numm % 2 == 0) {
    console.log(`${numm} is +ve and even number`);
  } else if (numm < 0 && numm % 2 == 0) {
    console.log(`${numm} is -ve and even number `);
  } else if (numm < 0 && numm % 2 != 0) {
    console.log(`${numm} is -ve  and odd number `);
  } else {
    console.log(`${numm} is +ve and odd number`);
  }
} else {
  console.log(`${numm} is not a number`);
} */

// todo ----------------------------------------------------------------------------------------

// ! Switch Case statement
//--------------------------

let signal = "gren";

switch (signal) {
  case "red":
    console.error("Stop ❤️ ");
    break;
  case "yello":
    console.error("Be Ready 💛 ");
    break;
  case "green":
    console.error("Lets go 💚 ");
    break;
  default:
    console.error("RIP 🪦");
}

// !  - - - - - - - - - - - - - - - - - - - - - - - - - -- - -- - - -- - -- - -

let x = Number(prompt("enter num", "first number"));
let y = Number(prompt("enter num", "first number"));

let sum = x + y;
console.log(sum);


