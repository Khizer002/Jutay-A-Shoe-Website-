import React, { useContext } from 'react'
import './Belts.css'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import data from "../shoes.json";
import Context from './Context';

const Belts = () => {
  const { fav, setFav, favIds, setFavIds } = useContext(Context);
  const belts = data.filter(shoe => shoe.type === "belts");

  const addToFav = (e, id) => {
    e.preventDefault();

    if (!favIds.includes(id)) {
      const updatedIds = [...favIds, id];
      setFavIds(updatedIds);                    // store product ids
      localStorage.setItem("favIds", JSON.stringify(updatedIds));
      setFav(updatedIds.length);                // update count
    }
  }

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
                <button
                  title='Add to Wishlist'
                  style={{ backgroundColor: "white", cursor: "pointer", border: "none" }}
                  onClick={(e) => addToFav(e, shoe.id)}
                >
                  <FavoriteBorderIcon />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Belts
