export function hello() {
  let div = document.querySelector("h1");
  return (div.innerText = "Imported");
}

// !===============

export const fnm = "dinga";

// !===============

const fname = "dingi";
export default fname;

// !===============

export const sourav = (a, b) => {
  return a + b;
};
export const mul = (a, b) => {
  return a * b;
};

// !==============Array export

export const array = [
  { fname: "dinga", lname: "raja" },
  { fname: "dingi", lname: "rani" },
  { fname: "dingu", lname: "raju" },
];

// !==================

export const palindrome = (num) => {
  let str = String(num);
  let res = str.split("").reverse().join("");
  str === res
    ? console.log(num + " is palindrome ")
    : console.log(num + " is not palindrome "); 
};
