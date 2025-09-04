import React, { useEffect, useState } from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchResults from './SearchResults';
// import data from "D:/React huxn/react-demos/src/shoes.json"

const Search = ({ input, setInput ,count}) => {
    // const [input,setInput]=useState("");
    // console.log(data)
    useEffect(() => {
        const button1 = document.querySelector(".onButton");
        const overlay = document.querySelector(".overlay");
        const backdrop = document.querySelector(".backdrop");
        const inpt = document.querySelector(".inp");

        button1.addEventListener("click", (e) => {
            e.stopPropagation();
            overlay.classList.add("show");
            backdrop.classList.add("show");
            inpt.focus();
            document.body.style.overflow = 'hidden';
        });

        overlay.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        document.addEventListener("click", () => {
            overlay.classList.remove("show");
            backdrop.classList.remove("show");
        });
    }, []);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const overlay = document.querySelector(".overlay");
            const backdrop = document.querySelector(".backdrop");
            overlay.classList.remove("show");
            backdrop.classList.remove("show");
            // setInput("")
            // document.body.style.overflow = 'auto';
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
                    <span title='WishList'>
                        <FavoriteBorderIcon style={{ cursor: "pointer" }} />
                    </span>
                    <span>
                        <button title='Cart'>
                            <ShoppingBagIcon style={{ color: "black", cursor: "pointer" }} />
                            <p style={{transform:'translate(-25px,-10px)' , backgroundColor:'red',color:'white' ,padding:'4px',borderRadius:'55%'}}>{count}</p>
                        </button>
                    </span>
                </div>
            </div>
            <div className="backdrop"></div>
            <div className="overlay">
                <img src="https://jutay.co/cdn/shop/files/Jutay_Final_File-02.webp?v=1745919029&width=500" alt="logo" style={{ height: '8rem' }} />
                <input type="text" placeholder="Search products" className='inp' value={input} onChange={(e) => setInput(e.target.value)} style={{ position: 'relative' }} onKeyDown={handleKeyDown}/><SearchIcon style={{ position: 'absolute', transform: "translateX(410px)" }} />
                <span>
                    <FavoriteBorderIcon style={{ cursor: "pointer" }} />
                    <ShoppingBagIcon style={{ color: "black", cursor: "pointer" }} />
                </span>
            </div>

            {/* {input.trim()!=="" && <SearchResults res={input}/>} */}
        </div>
    )
}

export default Search