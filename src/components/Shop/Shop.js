import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
    // console.log("clicked");
    console.log(product);
    // cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
        <h2>Selected Items: {cart.length}</h2>
        <h2>Total Price: $ {}</h2>
        <h3> Total Shipping Charge: $ {}</h3>
        <h3>Tax: $ {}</h3>
      </div>
    </div>
  );
};

export default Shop;
