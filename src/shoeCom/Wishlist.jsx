import React, { useContext } from 'react';
import Context from './Context';
import data from '../shoes.json';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import "./Wishlist.css";
import NoProductsFav from './NoProductsFav';

const Wishlist = () => {
  const {setFav,favIds,setFavIds } = useContext(Context);
  const wishlistProducts = data.filter(shoe => favIds.includes(shoe.id));
  const clearCart = () => {
    setFav(0);
    setFavIds([]);
    localStorage.setItem("favIds", "[]"); 
  };
  return (
    <div>
      <h2 className='main-wish'>Wishlist</h2>
      {wishlistProducts.length === 0 ? (
        <NoProductsFav />
      ) : (
        <div className='shoes'>
            {wishlistProducts.map((shoe, index) => (
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
            <button onClick={clearCart}>
              Clear
            </button>
          </div>
      )}
    </div>
  );
}

export default Wishlist;
