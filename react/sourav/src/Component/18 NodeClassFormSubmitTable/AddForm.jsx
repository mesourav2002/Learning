import React, { useRef, useState } from "react";
import "./Style.css";
const AddForm = () => {
  let fname = useRef();
  let lname = useRef();
  let dob = useRef();
  let imgUrl = useRef();

  let tfname = useRef();
  let tlname = useRef();
  let tdob = useRef();
  let edob = useRef();

  let [count, setCount] = useState(0);

  let [url, setUrl] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let a = dob.current.value;
    let obj = new Date();
    let Year = obj.getFullYear();

    if (a !== "") {
      setCount(count + 1);
      edob.current.innerText = Year - a;
      setUrl(imgUrl.current.value);
      tfname.current.innerText = fname.current.value;
      tlname.current.innerText = lname.current.value;
      tdob.current.innerText = dob.current.value;
    } else {
      alert("jhs");
    }

    fname.current.value = "";
    lname.current.value = "";
    dob.current.value = "";
    imgUrl.current.value = "";
  };

  return (
    <div>
      <div className="formDetails">
        <form onSubmit={handleSubmit}>
          <input ref={fname} type="text" placeholder="Enter First Name" />
          <input ref={lname} type="text" placeholder="Enter Last Name" />
          <input ref={dob} type="number" placeholder="Enter DOB" />
          <input ref={imgUrl} type="text" placeholder="Enter Image Url" />
          <input type="submit" />
        </form>
      </div>
      <div className="table-details">
        <table border={1}>
          <tr>
            <th>Sl no</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Dob</th>
            <th>Age</th>
            <th>Photo</th>
          </tr>
          <tr>
            <th>{count}</th>
            <th ref={tfname}></th>
            <th ref={tlname}></th>
            <th ref={tdob}></th>
            <th ref={edob}></th>
            <th>
              <img src={url} alt="" />
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddForm;
