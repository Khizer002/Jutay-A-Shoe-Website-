import React, { useEffect, useState } from 'react'
import './ProductItems.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import data from "D:/React huxn/react-demos/src/shoes.json"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const ProductItems = ({ count, setCount,quantity,setQuantity }) => {
    const [selectSize, setSize] = useState(null)
    const { id } = useParams();
    const pro = data.find(shoe => id.toLowerCase() === shoe.name.toLowerCase())
    // const [quantity, setQuantity] = useState(1)
    // console.log(pro)
    const increase = () => {
        setQuantity(quantity + 1)
    }
    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const increaseC = () => {
        setCount(count + 1);
    }
    const remove = () => {
        const checkout=document.querySelector(".checkout")
        const checkoutBtn=document.querySelector(".checkout-btn")
        const all = document.querySelector(".oInfo");
        const text = document.querySelector(".empty");
        checkout.style.display="none";
        checkoutBtn.style.display='none';
        all.style.display = "none";
        text.style.opacity = "1";
    }
    useEffect(() => {
        const addBtn = document.querySelector(".add-btn")
        const overlay = document.querySelector(".overlay2")
        const backdrop = document.querySelector(".backdrop2")
        const closeBtn = document.querySelector(".closeIcon")
        const reBtn = document.querySelector(".re-btn")
        const checkout=document.querySelector(".checkout")
        const checkoutBtn=document.querySelector(".checkout-btn")

        const remove = () => {
            setCount(0);
        }
        const openOverlay = () => {
            overlay.classList.add("show2")
            backdrop.classList.add("show2")
            const all = document.querySelector(".oInfo");
            const text = document.querySelector(".empty");
            all.style.display = "flex";
            checkout.style.display="flex";
            checkoutBtn.style.display='flex';
            text.style.opacity = "0";
        }

        const closeOverlay = () => {
            overlay.classList.remove("show2")
            backdrop.style.display = "none"
        }

        reBtn.addEventListener("click", remove)
        addBtn.addEventListener("click", openOverlay)
        closeBtn.addEventListener("click", closeOverlay)
        backdrop.addEventListener("click", closeOverlay)

        return () => {
            reBtn.removeEventListener("click", remove)
            addBtn.removeEventListener("click", openOverlay)
            closeBtn.removeEventListener("click", closeOverlay)
            backdrop.removeEventListener("click", closeOverlay)
        }
    }, [count, setCount])
    return (
        <div className='head'>
            <div className='link'>
                <Link to='/' className='home-link' title='Back to the Home Page'>Home &nbsp;</Link> &nbsp;  <ArrowForwardIosIcon style={{ color: "black", height: "10px" }} />&nbsp;
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
                        <img src='https://cdn.shopify.com/s/files/1/0609/8416/4583/files/payments_3.webp?v=1736138318' alt='payment'></img>
                    </div>
                    <p>Quantity: </p>
                    <div className='shop'>
                        <div className='quan'>
                            <button style={{ transform: "translateX(-10px)" }} onClick={decrease}><RemoveIcon style={{ height: "20px", color: "grey" }} /></button>
                            <div style={{ color: "grey" }}>{quantity}</div>
                            <button style={{ transform: "translateX(10px)" }} onClick={increase}><AddIcon style={{ height: "20px", color: "grey" }} /></button>
                        </div>
                        <button className='add-btn' onClick={increaseC}>Add To Cart</button>
                    </div>
                    <div class="jut-product-page-feat-wrapper">
                        <div class="jut-product-page-feat-item">
                            <img src="https://cdn.shopify.com/s/files/1/0609/8416/4583/files/free-shipping.webp?v=1749632985" alt="Free Shipping"/>
                                <span><strong>Free Shipping</strong></span>
                        </div>
                        <div class="jut-product-page-feat-item">
                            <img src="https://cdn.shopify.com/s/files/1/0609/8416/4583/files/easy-return.webp?v=1749632985" alt="Easy Returns"/>
                                <span><strong>Easy Returns</strong></span>
                        </div>
                        <div class="jut-product-page-feat-item">
                            <img src="https://cdn.shopify.com/s/files/1/0609/8416/4583/files/Cash-on-delivery.webp?v=1749632985" alt="Secure Payment"/>
                                <span><strong>Secure Payment</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backdrop2"></div>
            <div className='overlay2'>
                <div className='header'>
                    <span style={{fontSize:"30px"}}>Shopping Cart</span>
                    <button className='closeIcon'><CloseIcon /></button>
                </div>
                <div className='oInfo'>
                    <img className="Cname" src={pro.image} alt={pro.name} />
                    <div className='content'>
                        <div className="Cname" style={{ paddingBottom: '5px' }}>{pro.name.toUpperCase()}</div>
                        <div className="Cname" style={{ color: 'grey', paddingBottom: '5px' }}>Size: {selectSize}</div>
                        <div className="Cname" style={{ paddingBottom: '5px' }}>Rs. {pro.price * quantity}</div>
                        <div className='quan2'>
                            <button style={{ transform: "translateX(-10px)" }} onClick={decrease}><RemoveIcon style={{ height: "20px", color: "grey" }} /></button>
                            <div style={{ color: "grey" }}>{quantity}</div>
                            <button style={{ transform: "translateX(10px)" }} onClick={increase}><AddIcon style={{ height: "20px", color: "grey" }} /></button>
                        </div>
                    </div>
                    <button className='re-btn' onClick={remove}>Remove</button>
                </div>
                <div className='checkout'>
                    <span>Sub Total:</span>
                    <span>Rs. {pro.price * quantity}</span>
                </div>
                <div className='checkout-btn'>
                    <button>
                        <Link to={`/checkout/${pro.name}`} style={{color:"white", textDecoration:"none"}}>Check Out</Link>
                    </button>
                </div>
                <p className='empty' style={{ opacity: '0', padding: "0 20px" , color:"grey"}}>Your Cart is currently empty!</p>
            </div>
        </div>
    )
}

export default ProductItems