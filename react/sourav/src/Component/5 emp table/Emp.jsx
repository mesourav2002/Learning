import React from "react";
import EmpData from "./EmpData";
import "./Emp.css";

const Emp = () => {
  console.log(EmpData);
  return (
    <>
      <div className="text-center h2 bg-black text-bg-primary ">Emp Data</div>
      <div className="table-data">
        {EmpData.map((elem) => {
          let { id, fname, lname, age, job, salary, imgUrl } = elem;
          return (
            <table border={1}>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Image</th>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{age}</td>
                <td>{job}</td>
                <td>{salary}</td>
                <td> <img src={imgUrl} alt=""  height={90} width={90}/></td>
              </tr>
            </table>
          );
        })}
      </div>
      {/* <div className="empdata">
        <div className="header">Employee Table</div>
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee fname</th>
                        <th>Employee Lname</th>
                        <th>age</th>
                        <th>job</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                {
                    EmpData.map((elem)=>{
                        let { id, fname, lname, age, job, salary } = elem;
                        return(
                   <tr>
                        <td>{id}</td>
                        <td>{fname}</td>
                        <td>{lname}</td>
                        <td>{age}</td>
                        <td>{job}</td>
                        <td>{salary}</td>
                    </tr>  
                        )
                    })
                }
                           
                </tbody>
            </table>
        </div>
      </div> */}
    </>
  );
};

export default Emp;
