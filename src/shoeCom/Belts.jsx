import React from 'react'
import './Belts.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "D:/React huxn/react-demos/src/shoes.json";

const Belts = () => {
  const belts = data.filter(shoe => shoe.type === "belts");

  return (
    <div className='head-belts'>
      <div className='belts-text'>
        <span>Belts & Wallets</span>
      </div>
      
      <div className='shoes'>
        {belts.map((shoe, index) => (
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

export default Belts