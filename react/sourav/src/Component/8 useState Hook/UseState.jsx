import React from "react";
import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  // const [bool, setBool] = useState(true);

  // let toggolBtn = () => {
  //   setBool(!bool);
  //   bool === true ? console.log("On") : console.log("Off");
  // };

  //   !onClick Show Paragraph
  // const [msg, showMsg] = useState(true);
  // let ShowMsg = () => {
  //   showMsg(!msg);
  // };

  // ! onClick ChangeName

  // let [name, setName] = useState(true);

  // let changeName = () => {
  //   setName(!name);
  // };

  // ! Increment Decrement

  // let [count, setCount] = useState(0);

  // let increment = () => {
  //   setCount(count + 1);
  // };
  // let decrement = () => {
  //   setCount(count - 1);
  // };

  // !

  let persons = [
    { id: 1, fname: "Abhi", lname: "Ram", age: 50 },
    { id: 2, fname: "Darshan", lname: "JS", age: 45 },
    { id: 3, fname: "Abhijeet", lname: "Singh", age: 69 },
  ];

  let [users, setUsers] = useState(persons);
  // console.log(users)

  let viewUser = (lname, age) => {
    alert(`${lname} is ${age}`);
  };

  let deleteUser = (id, lname) => {
    // let x=users.filter((elem)=>{
    //     return elem.id !== id
    // })
    // setUsers([...x])

    let bool = window.confirm(`Do you want to delete ${lname} data...?`);

    if (bool) {
      setUsers([...users.filter((elem) => elem.id !== id)]);
      alert(`${lname} is deleted`);
    } else {
      alert(`${lname} data is not deleted`);
    }
  };
  return (
    <>
      {/* <button onClick={toggolBtn}>Click</button> */}

      {/* <button className="btn btn-primary text-warning  " onClick={ShowMsg}>
            {msg ? "Show Para" : "Hide Para"}
            {msg ? (
              showMsg
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                facilis, tempore commodi voluptate, voluptatem consectetur
                saepe, sunt repellat quas aut laboriosam cupiditate? Vitae
                nostrum incidunt, aliquid dolore a necessitatibus veritatis
                blanditiis ratione beatae? Dolore molestias veniam quo, vitae
                est eligendi eius soluta tempora unde autem quas culpa ducimus
                tenetur suscipit voluptates vero accusantium quidem dolores
                quibusdam. Aspernatur voluptatibus dolorum officiis quae
                similique nostrum rerum iusto ex, amet assumenda quam aut
                doloremque fugit dolore voluptatem est odio sapiente alias natus
                repudiandae minus vero cupiditate facere commodi. Corrupti
                necessitatibus neque molestias deserunt id praesentium eaque
                ratione totam, libero magnam omnis optio. Libero.
              </p>
            )}
          </button> */}

      {/* <button className="btn btn-primary text-warning  " onClick={ShowMsg}>
            {msg ? "Show Image" : "Hide Image"}
            {msg ? (
              showMsg
            ) : (
              <p>
                <img src="realmeBlack.jpg" alt="" />
              </p>
            )}
          </button> */}

      {/* <div>
        <div className="usestate">
          <div className="header">ChangeName</div>
          <div className="container">
            <h1>My Name is {name ? "Sourav" : "Rocky"} </h1>
            <button onClick={changeName}>Click here</button>
          </div>
        </div>
      </div> */}

      {/* <div className="usestate">
        <div className="header"> Increment and Decrement</div>
        <h1>{count}</h1>

        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
      </div> */}

      <div className="arrayObject">
        <div className="header">Users Details</div>
        <table border={1}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem, index) => {
              let { id, fname, lname, age } = elem;

              return (
                <tr>
                  <th>{index + 1}</th>
                  <th>{fname}</th>
                  <th>{lname}</th>
                  <th>{age}</th>
                  <th>
                    <button onClick={() => viewUser(lname, age)}>View</button>
                  </th>
                  <th>
                    <button onClick={() => deleteUser(id, lname)}>
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UseState;
