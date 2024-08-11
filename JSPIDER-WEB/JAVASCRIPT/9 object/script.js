//! ---------------------- Objects -----------------------

// let obj = {};
// console.log(typeof obj);

let car = {
  carName: ["BMW", "hello"],
  carColor: "Black",
  carNumber: 4561,
};

// console.log(car);
// console.log(typeof car);

// console.log(
//   `my car name is ${car.carName[0]} and that color is  ${car.carColor}`
// );
// console.log("car number is " + car.carNumber);

// todo: change the property value modification
// ? syntax : objectName.propertyName = newValue

// car.carColor = "red";
// console.log(car);

// todo: adding the property to the object
// ? ObjectName.newPropetyName = newValue

// car.place = "goa";
// console.log(car);

// todo: delete the property
// ? delete(keyword) objectName.propertyName

// delete car.carNumber;
// console.log(car);

// ! ------------------ THIS. ---------------------------
//? This keyword us in object

// let person = {
//   firstName: "Sourav",
//   lastName: "Dash",
//   place: "Odisha",
//   dob: 2002,
//   marriedStatus: false,
//   fullName: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
//   calculateAge: function () {
//     let age = 2024 - this.dob;
//     console.log(`${this.firstName} age is ${age}`);
//   },
// };
// ! this keyword is used to refer  the current object

// person.fullName();
// person.calculateAge();

// todo : example program 2

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
// };

// cons.lg("hello");
// cons.wrn("sjj");
// cons.err("sjj");

// ! ==============================================

// class Student {
//   constructor(name = "Rocky", age = 12, grade = "A") {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   getGrade = () => {
//     console.log(this.grade);
//   };
//   setGrade = (grade) => {};
// }
// let rocky = new Student("Rocky", 20, "A");
// let milan = new Student("Milan", 20, "A");
// let jagannath = new Student("Jagannath", 20, "A");
// let himanshu = new Student("Himanshu", 20, "A");
// rocky.getGrade();
// rocky.setGrade("B");
// rocky.getGrade();
// console.log(rocky.name);
// console.log(rocky.age);
// console.log(rocky.grade);

// ! Object creation by using constructor function

// function fun(fname = "dinga", lname = "raja", age = 20) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
// }

// let a = new fun();
// let p = new fun("rocky", "dash", 20);
// let d = new fun("sourav", "dash", 23);

// console.log(a);
// console.log(p);
// console.log(d);

// !====================

// function movies(
//   name = "Pushpa2",
//   duration = "2 hour",
//   lang = "hindi",
//   actor = "Allu Arjun",
//   reldate = "15 - Aug - 2024"
// ) {
//   this.name = name;
//   this.duration = duration;
//   this.lang = lang;
//   this.actor = actor;
//   this.reldate = reldate;
// }

// let z = new movies();

// console.log(z);

setInterval(console.log(new Date()));
