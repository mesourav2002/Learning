import "./basic.css";


let BasicJsx = () => {
  let fname = "Dinga";
  let lname = "Raja";
  let num = 12;
  let multiple = num * num;

  let root = document.getElementById("root");
  let generateOtp = () => {
    let a = Math.floor(Math.random() * 9000 + 1000);
    root.innerText = a;
  };
  var msg = "Welcome to React";
  // var price = prompt("Enter Price");

  return (
    <>
      {/* Static Content */}
      <h1> Welcome to React class</h1>

      {/* Static with Dynamic Content */}
      <h3>
        My name is {fname} {lname}
      </h3>

      {/* Dynamic Content */}
      <h3>
        {num} * {num} = {num * num}
      </h3>
      <h3>
        {num} * {num} = {multiple}
      </h3>

      <button onClick={generateOtp}> Get OTP</button>
      <p id="root" className="hello">
        OTP
      </p>
      
      <img src="indian_flag.gif" alt=""  width={200} />
    

      <p> {msg.toUpperCase().slice(7)} </p>
      
      {/* <p> Price = {price == null ? "Please Enter Price" : price} </p> */}
    </>
  );
};
export default BasicJsx;
