import React, { useEffect, useRef, useState } from "react";
import "./style/Shopping.css";
const Shopping = () => {
  // !================

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // !=============

  let Cart = useRef();
  let SideBar = useRef();
  let shopping = useRef();

  

  let [bool, setBool] = useState(true);

  let barOpen = () => {
    SideBar.current.classList.toggle("open");
    shopping.current.classList.toggle("open");
  };
  let cartOpen = () => {
    Cart.current.classList.toggle("open");
  };

  // !======================= Code

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  let LoadCategories = () => {
    fetch("http://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        categories.unshift("all");
        setCategories(categories);
      });
  };

  let LoadProducts = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  };

  useEffect(() => {
    LoadCategories();
    LoadProducts("http://fakestoreapi.com/products");
  }, []);

  let handleCategoryChange = (e) => {
    if (e.target.value === "all") {
      LoadProducts("http://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  };

  // !===================
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCartClick(id) {
    fetch(`http://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setCartItems([...cartItems, product]);
        setCartCount(cartItems.length + 1);
        alert(`${product.title}\nAdded to Cart`);
      });
  }

  let removeCart = (id) => {
    fetch(`http://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((elem) => {
        setCartItems(cartItems.filter((product) => product.id !== elem.id));
        setCartCount(cartItems.length - 1);
      });
  };

  const totalAmount = cartItems.reduce((a, b) => a + b.price, 0);
  // !===========================  Buy Now
  let openBuy = useRef();
  let [buy, setBuy] = useState([]);
  let buyOpen = async (id) => {
    await fetch(`http://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setBuy([...buy, product]);
        setCartItems([...cartItems, product]);
        console.log(product);
      });

    openBuy.current.classList.toggle("buy");
  };

  let buyOpenCart = () => {
    openBuy.current.classList.toggle("buy");
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <i onClick={barOpen} className="fa fa-bars"></i>
          <div>
            <i className="fa fa-user"></i> MyLogo
          </div>
        </div>
        <h1>Shopping</h1>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <h3 onClick={cartOpen}>Cart {cartCount}</h3>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>
      <div className="main">
        <div ref={SideBar} className="sideBar">
          <div>
            <label className="">Select Category</label>
            <div onChange={barOpen}>
              <select onChange={handleCategoryChange} className="form-select">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div ref={shopping} className="shopping">
          {products.map((elem) => {
            return (
              <>
                <div className="card ">
                  <div className="name "> {elem.title}</div>
                  <div className="image">
                    <img src={elem.image} alt="Image is Not Yet" />
                  </div>
                  <div className="year">Price : {elem.price}</div>

                  <div className="buttons">
                    <button
                      className="buttons1"
                      onClick={() => {
                        buyOpen(elem.id);
                      }}
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => {
                        handleAddToCartClick(elem.id);
                      }}
                      className="buttons2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div ref={Cart} className="cart">
          <table border={1}>
            <caption> Your Cart Summary</caption>

            <tr>
              <th>Title</th>
              <th>Preview</th>
              <th>Remove</th>
            </tr>

            {cartItems.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>
                  <img src={item.image} width="50" height="50" />
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      removeCart(item.id);
                    }}
                  >
                    remove
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <th colSpan={3}>Total Price :- {totalAmount}</th>
            </tr>

            <tr>
              <th colSpan={3}>
                <button className="buttons1" onClick={buyOpenCart}>
                  Buy
                </button>
              </th>
            </tr>
          </table>
        </div>
        <div ref={openBuy} className="buy-details">
          <>
            <table border={1} className="buyopps">
              <tr>
                <th>Title</th>
                <th>Photo</th>
                <th>Prise</th>
              </tr>{" "}
              {/* <tr>
                <th colSpan={3}>Total Price :- {totalAmount}</th>
              </tr> */}
              {buy.map((elem) => (
                <tr>
                  <td>{elem.title}</td>
                  <td className="opps">
                    <img src={elem.image} alt="" />
                  </td>
                  <td>{elem.price}</td>
                </tr>
              ))}
            </table>
          </>
        </div>
      </div>
    </>
  );
};

export default Shopping;
