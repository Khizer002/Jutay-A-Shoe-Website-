import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../shoes.json";
import "./CheckOut.css";

const CheckOut = ({quantity}) => {
  const { id } = useParams();
  const pro = data.find((shoe) => shoe.name === id);

  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert("Please enter your address before placing the order.");
      return;
    }

    alert("✅ Thank you for placing your order!");
    setAddress(""); 
  };

  if (!pro) {
    return <ProductNotFound res={res} setRes={setRes}/>;
  }

  return (
    <div className="checkout-container">
      <h2 style={{textAlign:"center", fontSize:"30px"}}>Checkout</h2>

      <div className="product-summary">
        <img src={pro.image} alt={pro.name} />
        <div>
          <h3>{pro.name}</h3>
          <p>Rs. {pro.price * quantity}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Delivery Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="4"
          placeholder="Enter your delivery address"
        />

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default CheckOut;
