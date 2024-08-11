// let person = {
//   username: { fname: "dinga", lname: "raja" },
//   dob: 2002,
//   address: { houseNo: "#420", street: "chor Bazzar", dist: "dholokpur" },
//   fullname: function () {
//     console.log(username.fname);
//   },
//   calculteAge:function(){
//     let dateObj = new Date
//     let age = dateObj.getFullYear() - this.dob
//     console.log(age)
//   }
// };

// //!destructing

// let { username, address, fullname } = person;
// let { fname, lname } = username;
// let { street } = address;

// console.log(`${fname} ${lname}c${street}`);
// person.fullname();
// person.calculteAge()

//!==============

// let cons = {
//   lg: function (msz) {
//     console.log(msz);
//   },
//   wrn: function (wr) {
//     console.warn(wr);
//   },
//   err: function (er) {
//     console.error(er);
//   },
//   calAge: function (d = 0) {
//     let dateObj = new Date();
//     let a = dateObj.getFullYear() - d;

//     console.log(a);
//   },
// };

// cons.lg("hello");
// cons.wrn("sjj");
// cons.err("sjj");
// cons.calAge(2002);

// let person = {
//   fullName: function (e) {
//     console.log(e);
//   },
// };

// let { fullName } = person;
// fullName("hello");

// let number = {
//   add: function (...arr) {
//     // console.log(...arr);
//     let c = arr.reduce((a, b) => a + b);
//     console.log(c);
//   },
// };
// number.add(10, 2, 40);

let number = {
  add: function (num) {
    if (num % 2 == 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  },
  findEven: function (...a) {
    let res = a.filter((e) => {
      return e % 2 == 0;
    });
    console.log(res);
  },
  findOdd: function (...b) {
    let ress = b.filter((e) => {
      return e % 2 != 0;
    });
    console.log(ress);
  },
  printNum: function (...arr) {
    let res = arr.filter((elem) => typeof elem === "number");
    console.log(res);
  },
  palindrome: function (num) {
    let str = String(num);
    let res = str.split("").reverse().join("");
    str === res
      ? console.log(num + " is palindrome ")
      : console.log(num + " is not palindrome ");
  },
  secondLargest: function (...num) {
    // let a = Math.max(...num);
    // let b = num.indexOf(a);
    // num.splice(b, 1);
    // let secNum = Math.max(...num);
    // console.log(secNum);

    let large = num.sort((a, b) => b - a);
    console.log(large);
    console.log(large[1]);
  },
};
number.add(34);
number.add(33);
number.findEven(20, 30, 34, 58, 9, 53);
number.findOdd(30, 47, 37);
number.printNum("euu", 287, "heh", true, false, 26, 37, "rocky");
number.palindrome(22);
number.secondLargest(20, 30, 34, 58, 9, 59);
