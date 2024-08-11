// ! Local Modules

// let add = (a, b) => {
//   console.log(a + b);
// };
// add(10, 2);

// let ad = (a, b) => {
//   return a + b;
// };
// let res = ad(10, 30);
// console.log(res);

// ! Export the modules
// !==================
// todo : 1st way

// let sum = (a, b) => {
//   return a + b;
// };

// let sub = (a, b) => {
//   return a - b;
// };

// let mul = (x, y) => {
//   return x * y;
// };

// module.exports = { sum ,sub , mul };

// !===================

// todo : 2nd Way

// let add = (a, b) => {
//   return a + b;
// };

// let sub = (a, b) => {
//   return a - b;
// };

// module.exports.add = add;
// module.exports.sub = sub;

// !======================

// todo : 3rd Way

// exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.sub = (a, b) => {
//   return a - b;
// };

// !=============================================================================


module.exports.calculateAge = (dob) =>{
    let dateObj= new Date()
    return dateObj.getFullYear() - dob
}

module.exports.generateOtp = () => {
    return Math.floor(Math.random() * 9000 + 1000);
  };

