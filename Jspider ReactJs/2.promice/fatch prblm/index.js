let root = document.getElementById("root");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.map((ele) => {
      let { name, email, address, website, company } = ele;
      //   console.log(name);

      root.innerHTML += `<div class=container>
        <div class="text-name"> ${name}</div>
        <div class="text">Email: ${email}</div>
        <div class="text">Address: ${address.city}</div>
        <div class="text">Website: ${website}</div>
        <div class="text">Company: ${company.name}</div>

        </div>`;
    });
  });

// let roott = document.getElementById("root");

// let url = fetch("https://jsonplaceholder.typicode.com/users");
// console.log();

// let obj = url.then((res) => {
//   return res.json();
// });
// console.log();

// obj.then((data) => {
//   data.map((ele) => {
//     roott.innerHTML += `
//     <div class="container>
//         <div class="text">${ele.name}</div>
//     </div>
//     `;
//   });
// });


