import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import UseProducts from "../../Hooks/UseProducts";
import { Link } from "react-router-dom";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import PopupModal from "../Modal/Modal";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = UseProducts([]);
  const [cart, setCart] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [dupProduct, setDupProduct] = useState(null);

  useEffect(() => {
    // console.log("local storeg first");
    const storedCart = getStoreCart();
    // console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart) {
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);

        // console.log(addedProduct);
      }
      // console.log(addedProduct);
    }
    setCart(savedCart);
    // console.log("logcal storeg finish");
  }, [products]);

  const handelAddToCart = (selectedProduct) => {
    // let newCart =[]
    const exists = cart.find((product) => product.id === selectedProduct.id);

    if (exists) {
      setShowModal(true);
      setDupProduct(selectedProduct);
      // newCart = [...rest, exists];
    } else {
      selectedProduct.quantity = 1;
      setCart((prev) => [...prev, selectedProduct]);

      // newCart = [...cart, selectedProduct];
    }

    // const newCart = [...cart, selectedProduct];
    addToDb(selectedProduct.id);
  };

  const handleDuplicateCart = () => {
    if (dupProduct) {
      const rest = cart.filter((product) => product.id !== dupProduct.id);
      const existsProduct = cart.find((product) => product.id === dupProduct.id);
      existsProduct.quantity += 1;
      setCart([...rest, existsProduct]);
      setShowModal(false);
    }
  };

  return (
    <>
      <PopupModal show={showModal} title={dupProduct?.name} handleClose={() => setShowModal(false)} onAdd={handleDuplicateCart} />
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/orders">
              <button>
                Review Order
                <FontAwesomeIcon></FontAwesomeIcon>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
