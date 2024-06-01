import React from 'react'
import img1 from '../img/Frame 1000004714.png'
import img2 from '../img/تفاصيل البطاقة الائتمانية.png'
import btn from '../img/Frame 1000004722.png'
import foot from '../img/Frame 1000004727.png'
import { Link } from 'react-router-dom'
export default function Credit() {
  return (
    <div className="d-flex flex-column gap-3">
        <img src={img1} alt="" />
        <img src={img2} alt="" width='135'/>
        <input type="text" placeholder='رقم البطاقة' className='input-credit'/>
        <div className="d-flex align-items-center gap-3">
        <input type="text" placeholder='تاريخ الانتهاء' className='input-credit' />
        <input type="text" placeholder='cvc' className='input-credit' />
        </div>
        <Link to='/sub'><img src={btn} alt="" className='curser mb-5'/></Link>
        <img src={foot} alt="" />
    </div>
  )
}
