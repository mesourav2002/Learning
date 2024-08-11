let root = document.getElementById("photo");

const photoClick = (e) => {
  root.innerHTML = `<div class="container-img">
                       <img src="${e.target.src}" alt="" class="hello">
                     <div>`;
};
