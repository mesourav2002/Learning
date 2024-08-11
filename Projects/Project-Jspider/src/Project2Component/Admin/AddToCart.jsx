import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AddToCart = () => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/cart")
      .then((data) => data.json())
      .then((elem) => setUser(elem));
  });

  let deleteBook = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/cart/${id}`, { method: "DELETE" });
  };

  return (
    <div>
      <h3>User Details</h3>

      {user.length === 0 ? (
        <div>
          <p>No Cart Found </p>
          <Link to="/userportal/book">
            <button>Add Books in to your Cart</button>
          </Link>
        </div>
      ) : (
        <div>
          <table>
            <tr>
              {/* <th>Id</th> */}
              <th>No</th>
              <th>Title</th>
              <th>Isbn No</th>
              <th>PageCount</th>
              <th>Image</th>
              <th>Status</th>
              <th>Authors Name</th>
              <th>Categories Name</th>
              {/* <th>View</th>
            <th>Password</th> */}
              <th>Delete</th>
            </tr>
            {user.map((elem, index) => {
              let {
                id,
                title,
                isbn,
                pageCount,
                thumbnailUrl,
                status,
                authors,
                categories,
              } = elem;
              return (
                <tr>
                  {/* <td>{id}</td> */}
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>{isbn}</td>
                  <td>{pageCount}</td>
                  <td>
                    <img src={thumbnailUrl} alt="" />
                  </td>
                  <td>{status}</td>
                  <td>{authors[0]}</td>
                  <td>{categories[0]}</td>
                  {/* <td>
                  <button onClick={() => viewDetails(id)}>View</button>
                </td>
                <td>sourav</td> */}
                  <td>
                    <button onClick={() => deleteBook(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
