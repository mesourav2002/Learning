import React, { useState } from "react";
import "./Form.css";

const AddForm2 = () => {
  let [fnm, setFnm] = useState("");
  let [lnm, setlnm] = useState("");

  let [count, setCount] = useState(0);

  let handleFname = (e) => {
    setFnm(e.target.value);
  };
  let handleLname = (e) => {
    setlnm(e.target.value);
  };

  let [newFnm, setNewFnm] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = { count, fnm, lnm };
    setNewFnm((preData) => [...preData, data]);
  };

  return (
    <>
      <div className="todo-form">
        <div className="header">Todo Form</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={handleFname}
          />
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={handleLname}
          />
          <input type="submit" />
        </form>
        <div>
          <table border={2} width={500}>
            <thead>
              <tr>
                <th>Slno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {newFnm.map((elem) => {
                let { fnm, lnm } = elem;
                return (
                  <tr>
                    <td>
                      {() => {
                        setCount(count + 1);
                      }}
                    </td>
                    <td>{fnm}</td>
                    <td>{lnm}</td>
                    <th>
                      <button>Delete</button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddForm2;
