import React, { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import data from "../shoes.json"
import "./CheckOut.css"
import Context from "./Context"

const CheckOut = () => {
  const { id } = useParams()
  const { cartItems, setcartItems } = useContext(Context)
  const [address, setAddress] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!address.trim()) {
      alert("Please enter your address before placing the order.")
      return
    }

    alert("Thank you for placing your order!")
    
    setcartItems([])
    localStorage.setItem("cartItems", JSON.stringify([]))
    setAddress("")
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2 style={{textAlign:"center", fontSize:"30px"}}>Checkout</h2>
        <p style={{textAlign:"center", padding: "50px", color: "grey"}}>Your cart is empty!</p>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h2 style={{textAlign:"center", fontSize:"30px"}}>Checkout</h2>

      <div className="checkout-items">
        <h3>Order Summary</h3>
        {cartItems.map((item, index) => (
          <div className="product-summary" key={`${item.id}-${item.size}-${index}`}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name.toUpperCase()}</h3>
              <p style={{color: "grey"}}>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p style={{fontWeight: "bold"}}>Rs. {item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        
        <div className="checkout-total">
          <h3>Total Amount: Rs. {calculateTotal()}</h3>
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

        <button type="submit">Place Order</button>
      </form>
    </div>
  )
}

export default CheckOut