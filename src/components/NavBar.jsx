import React from 'react'
import heart from '../img/heart-nav.png'
import person from '../img/btn-person.png'
import cart from '../img/btn-cart.png'
import logo from '../img/logo.png'
import '../App.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
   return (
      <div className="nav py-3 container d-flex align-items-center justify-content-between">
          <img src={logo} alt="logo" />
         <ul className="d-flex align-items-center pt-3 m-0 gap-5">
            <li>
               <div class="dropdown">
                  <p class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  خدماتنا &nbsp;
                  </p>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
               </div>
            </li>
            <li>
            <div class="dropdown">
                  <p class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  عننا &nbsp;
                  </p>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
               </div>
            </li>
            <Link to='/corsat'><li className='li-nav'>الكورسات</li></Link>
            <li>
            <div class="dropdown">
                  <p class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  الرئيسية &nbsp;
                  </p>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
               </div>
            </li>
         </ul>
         
         <div className='d-flex align-items-center gap-3'>
         <Link to='/'><img src={person} alt="" /></Link>
         <Link to='/cart'><img src={cart} alt="" /></Link>
         <Link to='/best'><img src={heart} alt="" /></Link> 
         </div>
      </div>
   )
}
