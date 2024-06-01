import React from 'react'
import NavBar from '../components/NavBar'
import background from '../img/backgound-polit.png'
import title from '../img/السلة.png'
import Footer from '../components/Footer'
import img1 from '../img/Frame 1000004712.png'
import img2 from '../img/طريقة الدفع.png'
import btn1 from '../img/Frame 1000004485 (2).png'
import btn2 from '../img/Frame 1000004485 (1).png'
import img3 from '../img/عدد الكورسات.png'
import img4 from '../img/المجموع.png'
import img5 from '../img/عرض.png'
import img6 from '../img/الاجمالي.png'
import del from '../img/delete-2-svgrepo-com 1.png'
import line from '../img/Line 131.png'
import imgcard from '../img/Rectangle 6512.png'
import imgcard2 from '../img/Frame 1000004708.png'
import imgcard3 from '../img/القدرات.png'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartProvider } from '../Context/CartContext'
export default function Cart() {
    const {cors , deleteFromCart} = useContext(CartProvider)
    return (
        
        <div className='body'>
            <NavBar />
            <img src={background} alt="" className='position-absolute background' />
            <img src={title} alt="" className='title' />
            <div className='d-flex container align-items-center gap-3 div-cart justify-content-center mb-5'>
                <div className="d-flex box-cart box-cart-1 flex-column gap-3 align-items-center justify-content-center ">
                      <div className="d-flex align-items-center justify-content-between w-100">
                           <span><img src={img3} alt="" /> <strong>{cors.length}</strong></span>
                           <img src={del} alt="" className='curser'/>
                      </div>
                      <img src={line} alt="" />

                      {cors.map((e) => {
                        return(
                            <div className='mb-3'>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <img src={e.sub} alt="" />
                            <img src={del} className='curser' alt="" onClick={() => deleteFromCart(e)}/>
                        </div> 
                        <div className='d-flex gap-3'>
                        <img src={e.img} alt="" width='46%'/>
                         <img src={imgcard2} alt="" width='46%'/>
                        </div>

                      </div> 
                        )
                      })}
                      

                      <div className="d-flex align-items-center justify-content-between w-100 mt-5">
                           <img src={img4} alt="" />
                           <span className='text-secondary'>500.00 ر.س</span>
                      </div>



                      <div className="d-flex align-items-center justify-content-between w-100">
                           <img src={img5} alt="" />
                           <span>  <span className='text-danger'>(10%)</span><strong>450.00 ر.س</strong><span className='text-secondary'>500.00 ر.س</span></span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between w-100">
                           <img src={img6} alt="" />
                           <strong>450.00 ر.س</strong>
                      </div>


                </div>
                <div className="d-flex box-cart flex-column gap-3  ">
                   <img src={img1} alt="" />
                   <img src={img2} alt="" width='115'/>
                   <div className='d-flex align-items-center gap-3'>
                       <Link to='credit'><img src={btn1} alt="" /></Link>
                       <Link to='paypal'><img src={btn2} alt="" /></Link>
                   </div>
                   <Outlet/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
