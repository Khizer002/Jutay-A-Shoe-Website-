import React from 'react'
import './Slides.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "D:/React huxn/react-demos/src/shoes.json";

const Slides = () => {
    const slide = data.filter(shoe => shoe.type === "slide");
    const slides = data.filter(shoe => shoe.type === "slides")

    return (
        <div className='head-slide'>
            <div className='slide-inner'>
                <img src='https://cdn.shopify.com/s/files/1/0609/8416/4583/files/New_Arrival_Banner_1_1.webp?v=1684994775' alt='slide' />
            </div>
            <div className='slide-text'>
                <span>Slides</span>
            </div>
            <div className='slides-btn'>
                <button>
                    <Link to='/flash-sale' style={{ color: "white", textDecoration: "none" }}>Shoes</Link>
                </button>
                <button>
                    <Link to='/slides' style={{ color: "white", textDecoration: "none" }}>Slides</Link>
                </button>
            </div>
            <div className='shoes'>
            {slides.map((shoe, index) => (
              <Link
                key={index}
                to={`/product/${shoe.name}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div className='shoe-card'>
                  <img src={shoe.image} alt={shoe.name} style={{ width: "240px", height: "220px" }} />
                  <h4>{shoe.name.toUpperCase()}</h4>
                  <p>Rs. {shoe.price}</p>
                  <span>{shoe.sizes.join(', ')}</span>

                  <div className='shoe-actions'>
                    <span className='add-cart'>Add To Cart</span>
                    <span>
                      <FavoriteBorderIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
            <div className='shoes'>
                {slide.map((shoe, index) => (
                    <Link
                        key={index}
                        to={`/product/${shoe.name}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <div className='shoe-card'>
                            <img src={shoe.image} alt={shoe.name} />
                            <h4>{shoe.name.toUpperCase()}</h4>
                            <p>Rs. {shoe.price}</p>
                            <span>{shoe.sizes.join(', ')}</span>

                            <div className='shoe-actions'>
                                <span className='add-cart'>Add To Cart</span>
                                <span>
                                    <FavoriteBorderIcon />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Slides