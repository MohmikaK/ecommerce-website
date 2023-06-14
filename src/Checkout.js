import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src="data:image/jpeg;base64,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" alt ='ad img'/>
            <div>
              <h2 className='checkout_title'>Your Shopping cart</h2>

            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout