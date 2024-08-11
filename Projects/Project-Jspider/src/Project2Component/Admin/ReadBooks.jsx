import React from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./Style/ReadBooks.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const ReadBooks = () => {
  let params = useParams();
  let id = params.id;

  let [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  let {
    categories,
    authors,
    publishedDate,
    longDescription,
    title,
    thumbnailUrl,
    shortDescription,
    isbn,
    pageCount,
    status,
  } = userData;

  //   !===========
  let [msg, setMsg] = useState(true);
  let [show, setShow] = useState(true);

  let Show = () => {
    setMsg(!msg);
  };
  let long = () => {
    setShow(!show);
  };

  let location = useLocation();
  let path = location.pathname.startsWith("/adminportal");

  let navigate = useNavigate();
  let returnback = () => {
    path ? navigate("/adminportal/book") : navigate("/userportal/book");
  };

  // !==================

  let [cart, setCart] = useState([]);
  let [idd, setIdd] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/cart")
      .then((response) => response.json())
      .then((data) => setCart(data));
  }, [cart]);

  useEffect(() => {
    cart.map((elem) => setIdd(elem.id));
  }, [cart]);

  let addToCart = () => {
    let bool = window.confirm(`Are You Want to add the ${title} on your cart `);
    if (bool) {
      let addToCarts = {
        id: String(Number(idd) + 1),
        title: title,
        isbn: isbn,
        pageCount: pageCount,
        publishedDate: {
          $date: publishedDate.$date,
        },
        thumbnailUrl: thumbnailUrl,
        longDescription: longDescription,
        status: status,
        authors: [authors[0]],
        categories: [categories[0]],
      };
      console.log(addToCarts);

      fetch(`http://localhost:4000/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addToCarts),
      });

      alert(`${title} Books is added in your cart`);
    } else {
      alert(`${title} Books is not added in your cart`);
    }
  };

  return (
    <div className="bookss">
      <div className="cardd">
        <div className="booksphoto">
          <img src={thumbnailUrl} alt="" />
        </div>
        <div className="all">
          <div className="readtitle">Title : {title}</div>

          <button className="shortdesc">
            <div className="hii">
              <div>Short Description</div>
              <div className="eye" onClick={Show}>
                {msg ? (
                  <div title="Click to See">
                    <RemoveRedEyeIcon />{" "}
                  </div>
                ) : (
                  <div title="Click to Dont See">
                    <VisibilityOffIcon />
                  </div>
                )}
              </div>
            </div>
            {msg ? setMsg : <p>{shortDescription}</p>}
          </button>
          <button className="longdesc">
            <div className="hii">
              <div>Long Description</div>
              <div className="eye" onClick={long}>
                {show ? (
                  <div title="Click to See">
                    <RemoveRedEyeIcon />
                  </div>
                ) : (
                  <div title="Click to don't See">
                    {" "}
                    <VisibilityOffIcon />
                  </div>
                )}
              </div>
            </div>
            {show ? setShow : <p>{longDescription}</p>}
          </button>

          <div className="cart">
            {path ? (
              <></>
            ) : (
              <>
                <button onClick={addToCart}>Add To Cart</button>
              </>
            )}
          </div>

          <div className="back">
            <button onClick={returnback}>Back to Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
