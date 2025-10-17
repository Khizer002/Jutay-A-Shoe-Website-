import React from 'react'
import { Link } from 'react-router-dom'
import data from "../shoes.json"
import ProductNotFound from './ProductNotFound'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SearchResults = ({ res, setRes }) => {
  const trimmed = res.trim().toLowerCase();
  const shoe = data.find(shoe => shoe.name.toLowerCase() === trimmed);

  if (trimmed === "") return null;

  if (!shoe) {
    return <ProductNotFound res={res} setRes={setRes}/>;
  }

  return (
    <div>
      <p style={{ textAlign: "center" , fontSize:"30px"}}>Found 1 result for {`"${res}"`} </p>
      <Link to={`/product/${shoe.name}`} onClick={() => setRes("")} style={{ textDecoration: "none", color: "black" }}>
        <div style={{ border: "2px solid rgba(232,78,78,1)", maxWidth: "15rem", margin: '10px', height: "27rem" }}>
          <img
            src={shoe.image}
            alt={shoe.name}
            style={{ width: "240px", objectPosition: "center center" }}
          />
          <h4 style={{ padding: "0 1rem" ,color:"grey"}}>{shoe.name.toUpperCase()}</h4>
          <p style={{ padding: "0 1rem", color: "rgba(232,78,78,1)" }}>Rs. {shoe.price}</p>
          <span style={{ padding: "1rem" }}>
            {shoe.sizes.join(", ")}
          </span>

          <div style={{ margin: " 25px 15px" }}>
            <span style={{ color: "white", backgroundColor: "rgba(232,78,78,1)", padding: "10px 40px", borderRadius: "5px" }}>Add To Cart</span>
            <span><FavoriteBorderIcon style={{transform:"translate(5px,5px)", paddingLeft:"5px"}}/></span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchResults;
