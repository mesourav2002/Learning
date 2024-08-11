let image = document.querySelector("img");

let i = 1;
let n = 5; 


let changeImageRight = () => {
  image.src = `./Images/f${i}.jpeg`;
  ++i;
  if (i > n) {
    i = 1;
  }
};
 

let changeImageLeft = () => {
  image.src = `./Images/f${i}.jpeg`;
  --i;
  if (i > n) {
    i = 1;
  }
}; 
 setInterval(() => {
  let changeImageLeft = () => {
    image.src = `./Images/f${i}.jpeg`;
    ++i;
    if (i > n) {
      i = 1;
    }
  };
}, 2000);
 


