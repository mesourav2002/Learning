let root = document.getElementById("photo");

const photoClick = (e) => {
  root.innerHTML = `
  
     <div class="left">
        <img  id="photo" src="${e.target.src}" alt="" width="100%"  />
        <div class="chrome">
          <div class="google">Google</div>
          <div class="text">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Google or type a URL" />
            <i class="fa-solid fa-microphone"></i>
            <i class="fa-solid fa-qrcode"></i>
          </div>
        </div>
        <button class="pen" onclick="openmenu()" ondblclick="closemenu()" >
        <i class="fa-solid fa-pen" ></i>
      </button>
      </div>
                    `;
};

// let icon = document.getElementById("right");

// let theamOpen = () => {
//   icon.style.right = "0px";
// };

let sidemenu = document.getElementById("right");
let menmenu = document.getElementById("photo");

function openmenu() {
  sidemenu.style.right = "";
  menmenu.style.width = "";
}
function closemenu() {
  sidemenu.style.right = "0";
  menmenu.style.width = "60%";
}
