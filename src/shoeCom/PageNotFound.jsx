import React from 'react'
import { Link } from 'react-router-dom';
import './PNF.css'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const PageNotFound = () => {
  return (
    <div className='headd'>
      <div className='inner'>
        <div><SentimentVeryDissatisfiedIcon className="bigIcon"/></div>
        <div className='shock'>Oops!</div>
        <div className='shock'>Page Not Found!</div>
        <button><Link to="/" style={{color:"white",textDecoration:"none"}}>Go to Home</Link></button>
      </div>
    </div>
  )
}

export default PageNotFound