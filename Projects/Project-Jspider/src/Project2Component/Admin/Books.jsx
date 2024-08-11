import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Style/Books.css";
const Books = () => {
  let [book, setBook] = useState([]);

  let fetchApi = async () => {
    let apiData = await fetch("http://localhost:4000/books").then((res) =>
      res.json()
    );
    setBook(apiData);
  };
  fetchApi();

  // !==========================
  // console.log(book.id)
  let navigate = useNavigate();

  let location = useLocation();
  let path = location.pathname;
  let bool = path.startsWith("/adminportal");

  let readBook = (id) => {
    bool
      ? navigate(`/adminportal/readbooks/${id}`)
      : navigate(`/userportal/readbooks/${id}`);
  };

  // !======== Delete

  let deleteBook = (id, title) => {
    let hi = prompt("Enter Title name");
    if (title === hi) {
      let bool = window.confirm(`Do you want yo delete ${title} book ...?`);
      if (bool) {
        fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" });
        alert(`${title} Book is Deleted`);
      }
    } else {
      alert(`Book Not Deleted`);
    }
  };
  return (
    <>
      <div className="books">
        {book.map((elem) => {
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
            <>
              <div className="card ">
                <div className="name "> {title}</div>
                <div className="image">
                  <img src={thumbnailUrl} alt="Image is Not Yet" />
                </div>
                <div className="year">Authors : {authors[0]}</div>
                <div className="year1">Page Count :{pageCount}</div>
                <div className="year1 a">Reg No : {isbn}</div>
                <div className="year1 b">Status :{status}</div>
                <div className="year1 c">Categories : {categories[0]}</div>
                <div className="buttons">
                  <button
                    className="buttons1"
                    onClick={() => {
                      readBook(id);
                    }}
                  >
                    Read Books
                  </button>

                  {bool ? (
                    <>
                      <button
                        onClick={() => deleteBook(id, title)}
                        className="buttons2"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Books;
