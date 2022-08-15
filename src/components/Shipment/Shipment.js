import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
  };
  return (
    <div className="from-container">
      <div>
        <h2 className="login-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} readOnly type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone number</label>
            <input onBlur={handlePhone} type="text" name="phone" id="" required />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping now" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
