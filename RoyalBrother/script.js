let b = document.getElementById("hi");
let hello = () => {
  b.play();
  b.controls = true;
};

let hii = () => {
  b.pause();
  b.controls = false;
};
