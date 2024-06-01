import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import background from '../img/Group 1000004515.png'
import background1 from '../img/backgound-polit.png'
import title from '../img/وهج العلم منصة تعليمية في مختلف المجالات.png'
import store from '../img/Frame 1 4679.png'
import mobile from '../img/Group 1000004495.png'
import section from '../img/Frame 1000004751.png'
import section1 from '../img/Frame 1000004680.png'
import img1 from '../img/10.png'
import img2 from '../img/سنوات.png'
import img3 from '../img/نعمل بجهد لاجل نجاحك.png'
import img4 from '../img/التثبيت على جهازك.png'
import img5 from '../img/download.png'
import img6 from '../img/تنزيل وهج العلم.png'
import logo1 from '../img/Frame 1000004820.png'
import logo2 from '../img/Frame 1000004821.png'
import logo3 from '../img/Frame 1000004822.png'
import button from '../img/Frame 1000004824.png'
import imgcor1 from '../img/الكورسات.png'
import imgcor2 from '../img/الكل.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import heart from '../img/Frame 1000004485.png'
import imgcard1 from '../img/القدرات.png'
import Slider from "react-slick";
import imgcard from '../img/Rectangle 6512.png'
import imgcard2 from '../img/احمد ابو العزم.png'
import imgcard3 from '../img/Frame 377.png'
import imgcard5 from '../img/الثالث ثانوي.png'
import imgcard6 from '../img/250 ر.س.png'
import imgcard7 from '../img/Frame 1000004538.png'
import imgcard4 from '../img/مدرس رياضيات لديه خبرة اكثر من عشر سنوات وقام بتدريس اكثر من 5000 طالب على مدار عشر سنوات لدية خبرة في تدريس القدرات لي اكثر من خمس سنوات.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react'
import { CartProvider } from '../Context/CartContext'
import { BestProvider } from '../Context/BestContext'
import { baseurl } from '../mvm'
import axios from 'axios'
export default function Home() {
  useEffect(() => {
  axios.get('')
  .then(res => console.log(res))
  .catch(e => console.log(e))
  },[])
  const dataCorse = [
    {
      id : 1,
      'img' : imgcard,
      'sub' : imgcard1,
      'name' : imgcard2,
      'desc' : imgcard4,
      'price' : imgcard6
    },
    {
      id : 2,
      'img' : imgcard,
      'sub' : imgcard1,
      'name' : imgcard2,
      'desc' : imgcard4,
      'price' : imgcard6
    },
    {
      id : 3,
      'img' : imgcard,
      'sub' : imgcard1,
      'name' : imgcard2,
      'desc' : imgcard4,
      'price' : imgcard6
    },
    {
      id : 4,
      'img' : imgcard,
      'sub' : imgcard1,
      'name' : imgcard2,
      'desc' : imgcard4,
      'price' : imgcard6
    },
    {
      id : 5,
      'img' : imgcard,
      'sub' : imgcard1,
      'name' : imgcard2,
      'desc' : imgcard4,
      'price' : imgcard6
    },
    {
      id : 6,
      'img' : imgcard,
      'sub' : imgcard1,
      'name' : imgcard2,
      'desc' : imgcard4,
      'price' : imgcard6
    },
  ]
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
   const {addToCart} = useContext(CartProvider)
   const {addToBest} = useContext(BestProvider)
   const data = () => {
       axios.get(`${baseurl}/courses`).then((res) => console.log(res)).catch((error) => console.log(error))
      //  console.log('sfg');
   }
  return (
  
    <div className='home'>
      <button onClick={() => data()}>send</button>
      <NavBar/>
      <img src={background} alt="" className='background background-home'/>
      <img src={title} alt=""  className='tit'/>
      <img src={store} alt=""  className='store'/>
      <img src={mobile} alt="" className='mobile'/>
      <div className='my-5 bg-white'>
           <div className="d-flex align-items-center py-5 justify-content-between container">
               <Link to='/corsat'><img src={imgcor1} alt="" /></Link>
               <img src={imgcor2} alt="" />

           </div>
           <Slider {...settings} className='container my-5 slider'>
            {dataCorse.map((item) => {
              return(
              <div>
              <div className="card">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={heart} alt="" className='curser' onClick={() => addToBest(item)}/>
                    <img src={item.sub} alt="" />
                </div>
                <img src={item.img} alt="" className='my-3'/>

                <div className="d-flex align-items-center justify-content-between">
                <img src={imgcard3} alt="" />
                    <img src={item.name} alt="" />
                </div>
                <img src={item.desc} alt="" className='my-3'/>
                <img src={imgcard5} alt="" className=' imgcard5'/>
                <div className="d-flex align-items-center justify-content-between">
                <img src={item.price} alt="" />
                    <img src={imgcard7} alt="" className='curser' onClick={() => addToCart(item)}/>
                </div>
              </div>
            </div>
              )
            })}
    </Slider>
      </div>
      <div className="container-fluid sec1-home">
         <img src={section1} alt="" width='100%'/>
      </div>

      <div className="home home1">
      <div className="container">
        <img src={section} alt="" className='w-100'/>
      </div>
      <div className='sec1-home'>
        <img src={background1} alt="" />
        <div className="center d-flex flex-column align-items-center gap-3 justify-content-center sec2-home">
           <img src={img1} alt="" className='mb-3'/>
           <img src={img2} alt="" />
           <img src={img3} alt="" />
        </div>
        <div className='sec3-home'>
        <div className="center d-flex flex-column align-items-center gap-3 justify-content-center ">
           <img src={img4} alt="" />
           <img src={img5} alt="" />
           <img src={img6} alt="" />
        </div>
        <div className='center d-flex align-items-center gap-3 my-5 justify-content-center '>
           <img src={logo1} alt="" />
           <img src={logo2} alt="" />
           <img src={logo3} alt="" />
        </div>
        <img src={button} alt="" className='mx-auto d-block pointer'/>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
