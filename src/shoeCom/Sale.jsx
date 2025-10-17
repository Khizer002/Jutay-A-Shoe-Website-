import React from 'react'
import './Sale.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "../shoes.json";

const Sale = () => {
  const sale = data.filter(shoe => shoe.type === "sale");

  return (
    <div className='head-sale'>
      <div className='sale-inner'>
        <img src='https://cdn.shopify.com/s/files/1/0609/8416/4583/files/Flash_SaleCategory_Banner.webp?v=1751620957' alt='sale'/>
      </div>
      <div className='sale-text'>
        <span>Flash Sale (Shoes)</span>
      </div>
      <div className='slides-btn'>
        <button>
          <Link to='/flash-sale' style={{color:"white",textDecoration:"none"}}>Shoes</Link>
        </button>
        <button>
          <Link to='/slides' style={{color:"white",textDecoration:"none"}}>Slides</Link>
        </button>
      </div>
      
      <div className='shoes'>
        {sale.map((shoe, index) => (
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

export default Sale