import React from 'react'
import './Shirts.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "D:/React huxn/react-demos/src/shoes.json";

const Shirts = () => {
  const shirt = data.filter(shoe => shoe.type === "t-shirts1");
  const shirts = data.filter(shoe => shoe.type === "t-shirts")

  return (
    <div className='head-shirt'>
      <div className='shirt-inner'>
        <img src='https://cdn.shopify.com/s/files/1/0609/8416/4583/files/Tshirt_Category_Banner.webp?v=1751620956' alt='shirts'/>
      </div>
      <div className='shirt-text'>
        <span>T-Shirts</span>
      </div>
      <div className='shoes'>
            {shirts.map((shoe, index) => (
              <Link
                key={index}
                to={`/product/${shoe.name}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div className='shoe-card'>
                  <img src={shoe.image} alt={shoe.name} style={{ width: "240px", height: "240px" }} />
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
        {shirt.map((shoe, index) => (
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

export default Shirts