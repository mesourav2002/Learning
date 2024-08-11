let loginPage = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(e.target)
  
    let user = e.target[0];
    let pswd = e.target[1];
    let b = e.target[2]
  
    if (user.value === "Sourav Kumar Dash" && pswd.value === "2002") {
      window.location = "home.html";
    } else {
      let err = "border: 2px solid red";
      user.style.cssText = err;
      pswd.style.cssText = err;
      window.alert("Incorrect password")
    }
  };
    