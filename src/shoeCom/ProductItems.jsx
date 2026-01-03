import React, { useEffect, useState, useContext } from 'react'
import './ProductItems.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import data from "../shoes.json"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Context from './Context'

const ProductItems = ({ count, setCount, quantity, setQuantity }) => {
    const [selectSize, setSize] = useState(null)
    const { id } = useParams()
    const pro = data.find(shoe => id.toLowerCase() === shoe.name.toLowerCase())
    const { cartItems, setcartItems } = useContext(Context)

    // FIXED: Reset quantity when product changes
    useEffect(() => {
        setQuantity(1)
    }, [id, setQuantity])

    useEffect(() => {
        if (pro && pro.sizes && pro.sizes.length > 0) {
            setSize(pro.sizes[0])
        }
    }, [pro])

    useEffect(() => {
        setCount(cartItems.length)
    }, [cartItems, setCount])

    useEffect(() => {
        const cartContainer = document.querySelector(".cart-items-container")
        const text = document.querySelector(".empty")
        const checkout = document.querySelector(".checkout")
        const checkoutBtn = document.querySelector(".checkout-btn")

        if (cartItems.length > 0) {
            if (cartContainer) cartContainer.style.display = "block"
            if (checkout) checkout.style.display = "flex"
            if (checkoutBtn) checkoutBtn.style.display = "flex"
            if (text) text.style.opacity = "0"
        } else {
            if (cartContainer) cartContainer.style.display = "none"
            if (checkout) checkout.style.display = "none"
            if (checkoutBtn) checkoutBtn.style.display = "none"
            if (text) text.style.opacity = "1"
        }
    }, [cartItems])

    const increase = () => {
        setQuantity(quantity + 1)
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addToCart = () => {
        const newItem = {
            id: pro.id,
            name: pro.name,
            image: pro.image,
            price: pro.price,
            size: selectSize || pro.sizes[0],
            quantity: quantity
        }

        const existingItemIndex = cartItems.findIndex(
            item => item.id === newItem.id && item.size === newItem.size
        )

        let updatedCart
        if (existingItemIndex !== -1) {
            updatedCart = [...cartItems]
            updatedCart[existingItemIndex].quantity += quantity
        } else {
            updatedCart = [...cartItems, newItem]
        }

        setcartItems(updatedCart)
        localStorage.setItem("cartItems", JSON.stringify(updatedCart))
        
        setTimeout(() => {
            openOverlay()
        }, 50)
    }

    const removeFromCart = (itemId, itemSize) => {
        const updatedCart = cartItems.filter(
            item => !(item.id === itemId && item.size === itemSize)
        )
        setcartItems(updatedCart)
        localStorage.setItem("cartItems", JSON.stringify(updatedCart))
        
        if (updatedCart.length === 0) {
            const cartContainer = document.querySelector(".cart-items-container")
            const text = document.querySelector(".empty")
            const checkout = document.querySelector(".checkout")
            const checkoutBtn = document.querySelector(".checkout-btn")
            
            if (cartContainer) cartContainer.style.display = "none"
            if (text) text.style.opacity = "1"
            if (checkout) checkout.style.display = "none"
            if (checkoutBtn) checkoutBtn.style.display = "none"
        }
    }

    const updateCartQuantity = (itemId, itemSize, newQuantity) => {
        if (newQuantity < 1) return

        const updatedCart = cartItems.map(item =>
            item.id === itemId && item.size === itemSize
                ? { ...item, quantity: newQuantity }
                : item
        )
        setcartItems(updatedCart)
        localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const openOverlay = () => {
        const overlay = document.querySelector(".overlay2")
        const backdrop = document.querySelector(".backdrop2")
        const cartContainer = document.querySelector(".cart-items-container")
        const text = document.querySelector(".empty")
        const checkout = document.querySelector(".checkout")
        const checkoutBtn = document.querySelector(".checkout-btn")

        if (overlay) overlay.classList.add("show2")
        if (backdrop) {
            backdrop.classList.add("show2")
            backdrop.style.display = "block"
        }

        const currentCart = JSON.parse(localStorage.getItem("cartItems")) || []

        if (currentCart.length > 0) {
            if (cartContainer) cartContainer.style.display = "block"
            if (checkout) checkout.style.display = "flex"
            if (checkoutBtn) checkoutBtn.style.display = "flex"
            if (text) text.style.opacity = "0"
        } else {
            if (cartContainer) cartContainer.style.display = "none"
            if (checkout) checkout.style.display = "none"
            if (checkoutBtn) checkoutBtn.style.display = "none"
            if (text) text.style.opacity = "1"
        }
    }

    const closeOverlay = () => {
        const overlay = document.querySelector(".overlay2")
        const backdrop = document.querySelector(".backdrop2")
        
        if (overlay) overlay.classList.remove("show2")
        if (backdrop) backdrop.style.display = "none"
    }

    useEffect(() => {
        const closeBtn = document.querySelector(".closeIcon")
        const backdrop = document.querySelector(".backdrop2")

        if (closeBtn) closeBtn.addEventListener("click", closeOverlay)
        if (backdrop) backdrop.addEventListener("click", closeOverlay)

        return () => {
            if (closeBtn) closeBtn.removeEventListener("click", closeOverlay)
            if (backdrop) backdrop.removeEventListener("click", closeOverlay)
        }
    }, [])

    if (!pro) {
        return <PageNotFound />
    }

    return (
        <div className='head'>
            <div className='link'>
                <Link to='/' className='home-link' title='Back to the Home Page'>Home &nbsp;</Link>
                &nbsp; <ArrowForwardIosIcon style={{ color: "black", height: "10px" }} />&nbsp;
                <span>&nbsp;{id.toUpperCase()}</span>
            </div>
            <div className='result'>
                <div className='image'>
                    <img src={pro.image} alt={pro.name} />
                </div>
                <div className='info'>
                    <h2>{pro.name.toUpperCase()}</h2>
                    <p style={{ color: "rgba(232,78,78,1" }}>Rs. {pro.price}</p>
                    <div className='sizes'>
                        <p>Size: {selectSize === null ? pro.sizes[0] : selectSize}</p>
                        {pro.sizes.map((size, index) => (
                            <button
                                key={index}
                                className="btn"
                                onClick={() => setSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <div className='pay'>
                        <img src='https://cdn.shopify.com/s/files/1/0609/8416/4583/files/payments_3.webp?v=1736138318' alt='payment' />
                    </div>
                    <p>Quantity: </p>
                    <div className='shop'>
                        <div className='quan'>
                            <button style={{ transform: "translateX(-10px)" }} onClick={decrease}>
                                <RemoveIcon style={{ height: "20px", color: "grey" }} />
                            </button>
                            <input
                                type="text"
                                value={quantity === 0 ? "" : quantity}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (/^\d*$/.test(val)) {
                                        setQuantity(val === "" ? 0 : parseInt(val))
                                    }
                                }}
                                style={{
                                    width: "40px",
                                    textAlign: "center",
                                    border: "none",
                                    borderRadius: "4px",
                                    color: "grey",
                                    outline: "none",
                                    appearance: "none",
                                    MozAppearance: "textfield",
                                }}
                            />
                            <button style={{ transform: "translateX(10px)" }} onClick={increase}>
                                <AddIcon style={{ height: "20px", color: "grey" }} />
                            </button>
                        </div>
                        <button className='add-btn' onClick={addToCart}>
                            Add To Cart
                        </button>
                    </div>
                    <div className="jut-product-page-feat-wrapper">
                        <div className="jut-product-page-feat-item">
                            <img src="https://cdn.shopify.com/s/files/1/0609/8416/4583/files/free-shipping.webp?v=1749632985" alt="Free Shipping" />
                            <span><strong>Free Shipping</strong></span>
                        </div>
                        <div className="jut-product-page-feat-item">
                            <img src="https://cdn.shopify.com/s/files/1/0609/8416/4583/files/easy-return.webp?v=1749632985" alt="Easy Returns" />
                            <span><strong>Easy Returns</strong></span>
                        </div>
                        <div className="jut-product-page-feat-item">
                            <img src="https://cdn.shopify.com/s/files/1/0609/8416/4583/files/Cash-on-delivery.webp?v=1749632985" alt="Secure Payment" />
                            <span><strong>Secure Payment</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backdrop2"></div>
            <div className='overlay2'>
                <div className='header'>
                    <span style={{ fontSize: "30px" }}>Shopping Cart</span>
                    <button className='closeIcon'><CloseIcon /></button>
                </div>
                
                <div className='cart-items-container'>
                    {cartItems.map((item, index) => (
                        <div className='oInfo' key={`${item.id}-${item.size}-${index}`} style={{ display: 'flex' }}>
                            <img className="Cname" src={item.image} alt={item.name} />
                            <div className='content'>
                                <div className="Cname" style={{ paddingBottom: '5px' }}>{item.name.toUpperCase()}</div>
                                <div className="Cname" style={{ color: 'grey', paddingBottom: '5px' }}>Size: {item.size}</div>
                                <div className="Cname" style={{ paddingBottom: '5px' }}>Rs. {item.price * item.quantity}</div>
                                <div className='quan2'>
                                    <button 
                                        style={{ transform: "translateX(-4px)" }} 
                                        onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)}
                                    >
                                        <RemoveIcon style={{ height: "20px", color: "grey" }} />
                                    </button>
                                    <input
                                        type="text"
                                        value={item.quantity === 0 ? "" : item.quantity}
                                        onChange={(e) => {
                                            const val = e.target.value
                                            if (/^\d*$/.test(val)) {
                                                updateCartQuantity(item.id, item.size, val === "" ? 0 : parseInt(val))
                                            }
                                        }}
                                        style={{
                                            width: "40px",
                                            textAlign: "center",
                                            border: "none",
                                            borderRadius: "4px",
                                            color: "grey",
                                            outline: "none",
                                            appearance: "none",
                                            MozAppearance: "textfield",
                                        }}
                                    />
                                    <button 
                                        style={{ transform: "translateX(4px)" }} 
                                        onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)}
                                    >
                                        <AddIcon style={{ height: "20px", color: "grey" }} />
                                    </button>
                                </div>
                            </div>
                            <button className='re-btn' onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
                        </div>
                    ))}
                </div>

                <div className='checkout'>
                    <span>Sub Total:</span>
                    <span>Rs. {calculateTotal()}</span>
                </div>
                <div className='checkout-btn'>
                    <button>
                        <Link to={`/checkout/all`} style={{ color: "white", textDecoration: "none" }}>Check Out</Link>
                    </button>
                </div>
                <p className='empty' style={{ opacity: '0', padding: "0 20px", color: "grey" }}>Your Cart is currently empty!</p>
            </div>
        </div>
    )
}

export default ProductItems