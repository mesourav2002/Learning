let loginPage = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);

  let user = e.target[0];
  let pswd = e.target[1];
  let b = e.target[2];

  if (user.value === "Sourav Kumar Dash" && pswd.value === "2002") {
    window.location = "index.html";
  } else {
    let err = "border: 1px solid red";
    user.style.cssText = err;
    pswd.style.cssText = err;
    window.alert("Incorrect password");
  }
};

// let str = "sourav";
// s1 = str.substring(0, 1).toUpperCase(); // first letter = J
// s2 = str.substring(1); // after 1st letter = avatpoint
// console.log(s1 + s2);

let Name = (a) => {
 
 let b = a.split(" ")
    .map((ele) => {
      return ele[0].toUpperCase() + ele.slice(1);
    })
    .join();
 console.log(b)
};

Name("vsele");

let arr = [10, 15, 30, 25, 30, 35, 40];

const num = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      console.log(`${a[i]}`);
    }
  }
};

num(arr);


let a = [20,37,28,943,11,2,28,92,1]

let b = a.sort((a,b)=>{a-b})
let c =b[0]
console.log(c)