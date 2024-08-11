let arr = [
  [0, 1, -2],
  [4, 5, 6],
  [-2, -3, -1],
];

// let hello = arr[s];
// arr[s] = arr[s + 1];
// arr[s + 1] = hello;

let first = arr[0];
let second = arr[1];
let third = arr[2];

let newFirst = first.reduce((a, b) => {
  return a + b;
});

let newSecond = second.reduce((a, b) => {
  return a + b;
});

let newThird = third.reduce((a, b) => {
  return a + b;
});

let newArr = [];
newArr.push(newFirst, newSecond, newThird);
let res = newArr.sort((a, b) => a - b);

// console.log(res);

// !=============================

let firstArr = (a) => {
  for (let i = 0; i < a.length; i++) {
    return a[0] + a[1] + a[2];
  }
};

let value1 = firstArr(first);
let value2 = firstArr(second);
let value3 = firstArr(third);

let newValueArr = [];

newValueArr.push(value1, value2, value3);
// console.log(newValueArr);

let hello = (a) => {
  // !===========
  let b = [];
  for (i of a) {
    if (i < -1) {
      b.push(i);
    }
  }
  for (i of a) {
    if (i < 0 && i > -2) {
      b.push(i);
    }
  }
  for (i of a) {
    if (i > 0) {
      b.push(i);
    }
  }

  console.log(b);
};

// hello(newValueArr);

// ! find sum  of array

let arr1 = [1, 2, [4, 5, 6], -2];
let arr2 = arr1[2];
let value4 = firstArr(arr2);
// console.log(value4 + arr1[0] + arr1[1] + arr1[3]); // 16

function Assend(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let s = 0; s < len - 1 - i; s++) {
      if (arr[s] > arr[s + 1]) {
        let hello = arr[s];
        arr[s] = arr[s + 1];
        arr[s + 1] = hello;
      }
    }
  }
  return arr;
}

console.log(Assend(newValueArr));



