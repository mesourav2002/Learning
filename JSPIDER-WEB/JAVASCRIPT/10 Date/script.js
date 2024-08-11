// ! =============== Date ================

// function digitalClock() {

//   let dateObj = new Date();
//   console.log(dateObj);

//   //? Get month in number
//   console.log(`getmonth : ${dateObj.getmonth()+1}`);

//   //? Get month in number
//   console.log(`getMonth : ${dateObj.getMonth()+1}`);

//   //? Get year
//   console.log(`getFullYear : ${dateObj.getFullYear()}`);

//   //? Get Hour
//   console.log(`getHours : ${dateObj.getHours()}`);

//   //?Get Minute
//   console.log(`getMinutes : ${dateObj.getMinutes()}`);

//   //? Get Second
//   console.log(`getSeconds : ${dateObj.getSeconds()}`);

//   //? Get milisecond
//   console.log(`getMillisecond : ${dateObj.getMilliseconds()}`);

//   //? Get
//   console.log(`getTime : ${dateObj.getTime()}`);
// }

// digitalClock()
//!========

let ageCalculator = () => {
  let userName = prompt("enter your name");
  let dob = prompt("enter dob (YYYY)");

  let obj = new Date();
  let age = obj.getFullYear()-dob

  alert(`${userName} age is ${age}`)
};
// ageCalculator()

let Day;
switch (new Date().getDay()) {
  case 0:
    Day = "Sunday";
    break;
  case 1:
    Day = "Monday";
    break;
  case 2:
    Day = "Tuesday";
    break;
  case 3:
    Day = "Wednesday";
    break;
  case 4:
    Day = "Thursday";
    break;
  case 5:
    Day = "Friday";
    break;
  case 6:
    Day = "Saturday";
}
console.log(`Today is ${Day}`);

let month;
switch (new Date().getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "Feb";
    break;
  case 2:
    month = "Mar";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "Aug";
    break;
  case 8:
    month = "Sept";
    break;
  case 9:
    month = "Aug";
    break;
  case 10:
    month = "Oct";
    break;
  case 11:
    month = "Nov";
    break;
  case 12:
    month = "Dec";
    break;
}
console.log(`This month name is ${month}`);
