import React from "react";
import useCart from "../../Hooks/UseCarts";
import UseProducts from "../../Hooks/UseProducts";
import Cart from "../Cart/Cart";

const Orders = () => {
  const [products, setProducts] = UseProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container">
          <div className="products-container">
              {
                 cart.map( ) 
              }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
