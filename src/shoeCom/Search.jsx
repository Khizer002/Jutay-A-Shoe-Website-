import React, { useContext, useEffect, useState } from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import Context from './Context';

const Search = ({ input, setInput, count, fav }) => {
    const { cartItems, setcartItems } = useContext(Context)

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const removeFromCart = (itemId, itemSize) => {
        const updatedCart = cartItems.filter(
            item => !(item.id === itemId && item.size === itemSize)
        )
        setcartItems(updatedCart)
        localStorage.setItem("cartItems", JSON.stringify(updatedCart))
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

    const openCartOverlay = (e) => {
        e.stopPropagation()
        const overlay = document.querySelector(".overlay2")
        const backdrop = document.querySelector(".backdrop2")
        
        if (overlay) overlay.classList.add("show2")
        if (backdrop) {
            backdrop.classList.add("show2")
            backdrop.style.display = "block"
        }
        document.body.style.overflow = 'hidden'
    }

    const closeCartOverlay = () => {
        const overlay = document.querySelector(".overlay2")
        const backdrop = document.querySelector(".backdrop2")
        
        if (overlay) overlay.classList.remove("show2")
        if (backdrop) backdrop.style.display = "none"
        document.body.style.overflow = 'auto'
    }

    useEffect(() => {
        const button1 = document.querySelector(".onButton")
        const overlay = document.querySelector(".overlay")
        const backdrop = document.querySelector(".backdrop")
        const inpt = document.querySelector(".inp")

        button1.addEventListener("click", (e) => {
            e.stopPropagation()
            overlay.classList.add("show")
            backdrop.classList.add("show")
            inpt.focus()
            document.body.style.overflow = 'hidden'
        })

        overlay.addEventListener("click", (e) => {
            e.stopPropagation()
        })

        document.addEventListener("click", () => {
            overlay.classList.remove("show")
            backdrop.classList.remove("show")
            document.body.style.overflow = "auto"
        })

        const closeBtn = document.querySelector(".closeIcon2")
        const backdrop2 = document.querySelector(".backdrop2")

        if (closeBtn) closeBtn.addEventListener("click", closeCartOverlay)
        if (backdrop2) backdrop2.addEventListener("click", closeCartOverlay)

        return () => {
            if (closeBtn) closeBtn.removeEventListener("click", closeCartOverlay)
            if (backdrop2) backdrop2.removeEventListener("click", closeCartOverlay)
        }
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const overlay = document.querySelector(".overlay")
            const backdrop = document.querySelector(".backdrop")
            overlay.classList.remove("show")
            backdrop.classList.remove("show")
        }
    }

    return (
        <div className='head'>
            <div className='inputBox'>
                <button className='onButton'>
                    <SearchIcon />
                    Search Products
                </button>
                <div className='image'>
                    <img src='https://jutay.co/cdn/shop/files/Jutay_Final_File-02.webp?v=1745919029&width=500' alt='logo' title='Jutay.co' />
                </div>
                <div className='icons' >
                    <Link to='/WishList' style={{ color: "black" }}>
                        <FavoriteBorderIcon style={{ cursor: "pointer" }} />
                    </Link>
                    {fav > 0 && (
                        <p style={{ transform: 'translate(-15px,-15px)', backgroundColor: 'red', color: 'white', padding: '3px', borderRadius: '50%' }}>{fav}</p>
                    )}
                    <span>
                        <button title='Cart' onClick={openCartOverlay} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            <ShoppingBagIcon style={{ color: "black", cursor: "pointer" }} />
                            {count > 0 && (
                                <p style={{ transform: 'translate(-25px,-10px)', backgroundColor: 'red', color: 'white', padding: '4px', borderRadius: '55%' }}>{count}</p>
                            )}
                        </button>
                    </span>
                </div>
            </div>
            <div className="backdrop"></div>
            <div className="overlay">
                <img src="https://jutay.co/cdn/shop/files/Jutay_Final_File-02.webp?v=1745919029&width=500" alt="logo" style={{ height: '8rem' }} />
                <input type="text" placeholder="Search products" className='inp' value={input} onChange={(e) => setInput(e.target.value)} style={{ position: 'relative' }} onKeyDown={handleKeyDown} /><SearchIcon style={{ position: 'absolute', transform: "translateX(410px)" }} />
                <span>
                    <FavoriteBorderIcon style={{ cursor: "pointer" }} />
                    <ShoppingBagIcon style={{ color: "black", cursor: "pointer" }} onClick={openCartOverlay} />
                </span>
            </div>

            <div className="backdrop2"></div>
            <div className='overlay2'>
                <div className='header'>
                    <span style={{ fontSize: "30px" }}>Shopping Cart</span>
                    <button className='closeIcon2'><CloseIcon /></button>
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

                {cartItems.length > 0 ? (
                    <>
                        <div className='checkout'>
                            <span>Sub Total:</span>
                            <span>Rs. {calculateTotal()}</span>
                        </div>
                        <div className='checkout-btn'>
                            <button>
                                <Link to={`/checkout/all`} style={{ color: "white", textDecoration: "none" }} onClick={closeCartOverlay}>Check Out</Link>
                            </button>
                        </div>
                    </>
                ) : (
                    <p className='empty' style={{ padding: "20px", color: "grey", textAlign: "center" }}>Your Cart is currently empty!</p>
                )}
            </div>
        </div>
    )
}

export default Search