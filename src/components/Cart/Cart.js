import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart-div">
      <h1>Oder Summery</h1>
      <p>Selected Items : {quantity}</p>
      {cart?.map((product) => (
        <div>
          <img width={20} src={product.img} alt="" />
          <p>
            {product.name} : {product.quantity}
          </p>
        </div>
      ))}
      <p>Total Price:${total} </p>
      <p>Total Shipping:${shipping} </p>
      <p>Tax:${tax}</p>
      <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
