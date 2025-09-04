import React from 'react'
import { Link } from 'react-router-dom'
import "./ProNF.css"

const ProductNotFound = ({res,setRes}) => {
  return (
    <div className='firstt'>
        <span>Found 0 results for "{res}"</span>
            <button>
                <Link to="/men" style={{color:"white" , textDecoration:"none"}}>Go to Home</Link>
            </button>
    </div>
  )
}

export default ProductNotFound