import React from 'react'
import './Women.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "../shoes.json";

const NewArrival = () => {
  const newArrival = data.filter(shoe => shoe.type === "new-arrival");
  const newArrivals = data.filter(shoe => shoe.type === "new-arrival1");

  return (
    <div className='head-new'>
      <div className='new-inner'>
        <img src='https://cdn.shopify.com/s/files/1/0609/8416/4583/files/New_Arrival_Category_Banner.webp?v=1751620957' alt='new-arrival'/>
      </div>
      <div className='women-text'>
        <span>New Arrival</span>
      </div>
      <div className='shoes'>
          {newArrivals.map((shoe, index) => (
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
      <div className='shoes'>
        {newArrival.map((shoe, index) => (
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

export default NewArrival