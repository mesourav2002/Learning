//!  Key word

//todo : var keyword

// ------------------  VAR KEYWORD ----------------------

console.warn("");

var a; // declaration
a = 10; // initialazation
document.writeln(a);
console.log(a);

a = "hai"; // re-initialazation
document.writeln(a);
console.log(a);

var a; // re-declaration
a = true;
document.writeln(a);
console.log(a);

// ------------------  LET KEYWORD ----------------------

console.warn("");

let b; // declaration
b = 10; // initialazation
document.writeln(b);
console.log(b);

b = "hai"; // re-initialazation
document.writeln(b);
console.log(b);

// let b ; // re-declaration is not posible in let

// ------------------  CONST KEYWORD ----------------------

console.warn("");

const c = 10;
document.writeln(c);
console.log(c);

function hello(c) {
  a = 2;
  b = 3;

  c = a + b;
  return c;
}

console.log(hello());
