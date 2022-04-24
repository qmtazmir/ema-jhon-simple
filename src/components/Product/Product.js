import React from "react";
import "./Product.css";
const Product = (props) => {
  // console.log(props.product);

  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className="product-div">
      <img src={img} alt=""></img>
    </div>
  );
};

export default Product;
