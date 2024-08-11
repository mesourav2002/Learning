import React, { useRef, useEffect, useState } from "react";

const AddBooks = () => {
  let bookTitle = useRef();
  let imgUrl = useRef();
  let pageCountt = useRef();

  let [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();

    let newBook = {
      id: books.length + 1,
      title: bookTitle.current.value,
      isbn: "",
      pageCount: pageCountt.current.value,
      publishedDate: {
        $date: date,
      },
      thumbnailUrl: imgUrl.current.value,
      shortDescription: "",
      longDescription: "",
      status: "PUBLISH",
      authors: [""],
      categories: [""],
    };
    fetch(`http://localhost:4000/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });

    setTimeout(() => {
      bookTitle.current.value = "";
      imgUrl.current.value = "";
      pageCountt.current.value = "";
    }, 500);
  };
  return (
    <div className="addBooks">
      <form onSubmit={handleSubmit}>
        <input ref={bookTitle} type="text" placeholder="Enter Book Name" />
        <input ref={imgUrl} type="text" placeholder="Enter Image URL" />
        <input ref={pageCountt} type="text" placeholder="Enter Page Count" />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
