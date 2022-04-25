import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, handelAddToCart }) => {
  // console.log(props.product);

  //
  // const { product, handelAddToCart } = props;
  const { name, img, seller, price, ratings } = product;
  // another option
  // const { name, img, seller, price, ratings } = props.product;

  return (
    <div className="product-div">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price :${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handelAddToCart(product)} className="cart-button">
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
      {/* <button onClick={() => props.handelAddToCart(props.product)} className="cart-button">
        <p>Add to cart</p>
      </button> */}
    </div>
  );
};

export default Product;
