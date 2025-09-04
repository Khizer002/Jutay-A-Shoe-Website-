import React from 'react'
import './MajorLoafors.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "D:/React huxn/react-demos/src/shoes.json";

const MajorLoafors = () => {
  const majorLoafors = data.filter(shoe => shoe.type === "major-loafors");

  return (
    <div className='head-major'>
      <div className='major-inner'>
        <img src='https://jutay.co/cdn/shop/files/1_copy_5_326273d6-1833-449b-8cbd-efeef43d9fa8.webp?v=1744279321&width=2000' alt='major-loafors'/>
      </div>
      <div className='women-text'>
        <span>Major Loafers</span>
      </div>
      
      <div className='shoes'>
        {majorLoafors.map((shoe, index) => (
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

export default MajorLoafors