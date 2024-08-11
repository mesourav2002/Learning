import React from "react";
import { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState({ Name: "", Age: "", Mobile: "", City: "" });
  const [show, setShow] = useState({ Name: "", Age: "", Mobile: "", City: "" });

  let handleNameChange = (e) => {
    setUser({
      Name: e.target.value,
      Age: user.Age,
      Mobile: user.Mobile,
      City: user.City,
    });
  };

  let handleAgeChange = (e) => {
    setUser({
      Name: user.Name,
      Age: e.target.value,
      Mobile: user.Mobile,
      City: user.City,
    });
  };

  let handleMobileChange = (e) => {
    setUser({
      Name: user.Name,
      Age: user.Age,
      Mobile: e.target.value,
      City: user.City,
    });
  };

  function handleCityChange(e) {
    setUser({
      Name: user.Name,
      Age: user.Age,
      Mobile: user.Mobile,
      City: e.target.value,
    });
  }

  let handleSubmitClick = (e) => {
    e.preventDefault();
    setShow(user);
    alert(JSON.stringify(user));
    setUser({ Name: "", Age: "", Mobile: "", City: "" });
  };

  return (
    <div>
      <div className="container-fluid  d-flex  rounded rounded-5  justify-content-center border border-5 border-danger w-50 mt-5 p-5 bg-black text-bg-danger text-center  ">
        <form onSubmit={handleSubmitClick}>
          <h3>Register User</h3>
          <dl>
            <dt>User Name</dt>
            <dd>
              <input
                type="text"
                value={user.Name}
                onChange={handleNameChange}
              />
            </dd>
            <dt>Age</dt>
            <dd>
              <input
                value={user.Age}
                type="number"
                onChange={handleAgeChange}
              />
            </dd>
            <dt>Mobile</dt>
            <dd>
              <input
                type="number"
                value={user.Mobile}
                onChange={handleMobileChange}
              />
            </dd>
            <dt>City</dt>
            <dd>
              <select onChange={handleCityChange} value={user.City}>
                <option value="-1">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Banglore">Banglore</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Odisha">Odisha</option>
              </select>
            </dd>
          </dl>
          <button>Submit</button>
          <div>
            <h2 className="text-warning mt-5">{user.Name}</h2>
            <h2 className="text-warning ">{user.Age}</h2>
            <h2 className="text-warning ">{user.Mobile}</h2>
            <h2 className="text-warning ">{user.City}</h2>
          </div>
          {/* Its for  */}
          <div>
            <h2 className="text-warning mt-5">{show.Name}</h2>
            <h2 className="text-warning ">{show.Age}</h2>
            <h2 className="text-warning ">{show.Mobile}</h2>
            <h2 className="text-warning ">{show.City}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
