import React from 'react'
import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='foot-head'>
        <div className='foot-inner'>
            <span className='feature-item'>
                <img src='https://jutay.co/cdn/shop/files/icons8-shipping-64.png?v=1744286155' alt='truck'/>
                <div>
                    <h3>Free Shipping</h3>
                    <p>Enjoy free shipping</p>
                </div>
            </span>
            <span className='feature-item'>
                <img src='https://jutay.co/cdn/shop/files/icons8-return-64_2.png?v=1744286155' alt='return'/>
                <div>
                    <h3>Easy Return</h3>
                    <p>7 Days Return Policy</p>
                </div>
            </span>
            <span className='feature-item'>
                <img src='https://jutay.co/cdn/shop/files/icons8-payment-64.png?v=1744286154' alt='secure'/>
                <div>
                    <h3>Secure Payments</h3>
                    <p>Multiple Payment options</p>
                </div>
            </span>
            <span className='feature-item'>
                <img src='https://jutay.co/cdn/shop/files/icons8-online-support-64.png?v=1744286155' alt='support'/>
                <div>
                    <h3>Customer Support</h3>
                    <p>Available 24/7</p>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Footer1