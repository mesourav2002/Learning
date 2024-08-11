let root = document.getElementById("root");
fetch("https://api.github.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.map((ele) => {
      let { avatar_url, login } = ele;
      console.log(avatar_url);

      root.innerHTML += `<div class=container>
        <div><img src=${avatar_url}></div>
        <div class=text>${login}</div>
        </div>`;
    });
  })
  .catch((e) => {
    console.log(e);
  });
