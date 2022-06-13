// import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

export default UseProducts;
