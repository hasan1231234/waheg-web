import React from 'react'
import btn1 from '../img/btn1Paypal.png'
import btn2 from '../img/btn2Paypal.png'
import alert from '../img/alertPaypal.png'
import { Link } from 'react-router-dom'
export default function Paypal() {
  return (
    <div className='d-flex flex-column gap-3'>
       <img src={btn1} alt="" />
       <Link to='/sub2'><img src={btn2} alt="" /></Link>
      <img src={alert} alt="" />
    </div>
  )
}
