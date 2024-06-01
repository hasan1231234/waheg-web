import React from 'react'
import NavBar from '../components/NavBar'
import title from '../img/المفضلة.png'
import Footer from '../components/Footer'
import background from '../img/backgound-polit.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heart from '../img/best.png'
import Slider from "react-slick";
import imgcard3 from '../img/Frame 377.png'
import imgcard5 from '../img/الثالث ثانوي.png'
import imgcard7 from '../img/Frame 1000004538.png'
import search from '../img/fi-rr-search.png'
import { useContext } from 'react'
import { BestProvider } from '../Context/BestContext'
import { CartProvider } from '../Context/CartContext'
export default function Best() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const {best} = useContext(BestProvider)
  const {addToCart} = useContext(CartProvider)

  return (

    <div className='body'>
        <NavBar/>
        <img src={background} alt="" className='position-absolute background'/>
        <img src={title} alt=""  className='title'/>

        <div className="slider2">
        <div className='container slide-search position-relative'>
        <input type="search" />
        <img src={search} alt="" className='search-icon'/>
        </div>
        <Slider {...settings} className='container my-5 slider '>
            {best.map((e) => {
                return(
                    <div>
                    <div className="card">
                      <div className="d-flex align-items-center justify-content-between">
                          <img src={heart} alt="" />
                          <img src={e.sub} alt="" />
                      </div>
                      <img src={e.img} alt="" className='my-3'/>
                      <div className="d-flex align-items-center justify-content-between">
                      <img src={imgcard3} alt="" />
                          <img src={e.name} alt="" />
                      </div>
                      <img src={e.desc} alt="" className='my-3'/>
                      <img src={imgcard5} alt="" className=' imgcard5'/>
                      <div className="d-flex align-items-center justify-content-between">
                      <img src={e.price} alt="" />
                          <img src={imgcard7} alt="" className='curser' onClick={() => addToCart()}/>
                      </div>
                    </div>
                  </div>
                )
            })}
      {/* <div>
        <div className="card">
          <div className="d-flex align-items-center justify-content-between">
              <img src={heart} alt="" />
              <img src={imgcard1} alt="" />
          </div>
          <img src={imgcard} alt="" className='my-3'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard3} alt="" />
              <img src={imgcard2} alt="" />
          </div>
          <img src={imgcard4} alt="" className='my-3'/>
          <img src={imgcard5} alt="" className=' imgcard5'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard6} alt="" />
              <img src={imgcard7} alt="" />
          </div>
        </div>
      </div>
      <div>
                <div className="card">
          <div className="d-flex align-items-center justify-content-between">
              <img src={heart} alt="" />
              <img src={imgcard1} alt="" />
          </div>
          <img src={imgcard} alt="" className='my-3'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard3} alt="" />
              <img src={imgcard2} alt="" />
          </div>
          <img src={imgcard4} alt="" className='my-3'/>
          <img src={imgcard5} alt="" className=' imgcard5'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard6} alt="" />
              <img src={imgcard7} alt="" />
          </div>
        </div>
      </div>
      <div>
                <div className="card">
          <div className="d-flex align-items-center justify-content-between">
              <img src={heart} alt="" />
              <img src={imgcard1} alt="" />
          </div>
          <img src={imgcard} alt="" className='my-3'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard3} alt="" />
              <img src={imgcard2} alt="" />
          </div>
          <img src={imgcard4} alt="" className='my-3'/>
          <img src={imgcard5} alt="" className=' imgcard5'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard6} alt="" />
              <img src={imgcard7} alt="" />
          </div>
        </div>
      </div>
      <div>
                <div className="card">
          <div className="d-flex align-items-center justify-content-between">
              <img src={heart} alt="" />
              <img src={imgcard1} alt="" />
          </div>
          <img src={imgcard} alt="" className='my-3'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard3} alt="" />
              <img src={imgcard2} alt="" />
          </div>
          <img src={imgcard4} alt="" className='my-3'/>
          <img src={imgcard5} alt="" className=' imgcard5'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard6} alt="" />
              <img src={imgcard7} alt="" />
          </div>
        </div>
      </div>
      <div>
                <div className="card">
          <div className="d-flex align-items-center justify-content-between">
              <img src={heart} alt="" />
              <img src={imgcard1} alt="" />
          </div>
          <img src={imgcard} alt="" className='my-3'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard3} alt="" />
              <img src={imgcard2} alt="" />
          </div>
          <img src={imgcard4} alt="" className='my-3'/>
          <img src={imgcard5} alt="" className=' imgcard5'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard6} alt="" />
              <img src={imgcard7} alt="" />
          </div>
        </div>
      </div>
      <div>
                <div className="card">
          <div className="d-flex align-items-center justify-content-between">
              <img src={heart} alt="" />
              <img src={imgcard1} alt="" />
          </div>
          <img src={imgcard} alt="" className='my-3'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard3} alt="" />
              <img src={imgcard2} alt="" />
          </div>
          <img src={imgcard4} alt="" className='my-3'/>
          <img src={imgcard5} alt="" className=' imgcard5'/>
          <div className="d-flex align-items-center justify-content-between">
          <img src={imgcard6} alt="" />
              <img src={imgcard7} alt="" />
          </div>
        </div>
      </div> */}
    </Slider>
        </div>
            <Footer/>
    </div>
  )
}
