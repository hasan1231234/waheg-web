import React from 'react'
import NavBar from '../components/NavBar'
import title from '../img/الكورسات.png'
import Footer from '../components/Footer'
import background from '../img/backgound-polit.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heart from '../img/Frame 1000004485.png'
import imgcard1 from '../img/القدرات.png'
import Slider from "react-slick";
import imgcard from '../img/Rectangle 6512.png'
import imgcard2 from '../img/احمد ابو العزم.png'
import imgcard3 from '../img/Frame 377.png'
import imgcard5 from '../img/الثالث ثانوي.png'
import imgcard6 from '../img/250 ر.س.png'
import imgcard7 from '../img/Frame 1000004538.png'
import search from '../img/fi-rr-search.png'
import imgcard4 from '../img/مدرس رياضيات لديه خبرة اكثر من عشر سنوات وقام بتدريس اكثر من 5000 طالب على مدار عشر سنوات لدية خبرة في تدريس القدرات لي اكثر من خمس سنوات.png'

import { useContext } from 'react'
import { CartProvider } from '../Context/CartContext'

const initState = {
    loading : true,
    error : '',
    post : {}

}

// const reducer = (state , action) =>{
//     switch(action.type){
//         case "Suc":
//             return{
//                 loading : false,
//                 error : '',
//                 post : action.payload
//             };
//         case "Faild" :
//             return{
//                 loading : false,
//                 error : 'Error',
//                 post : {}
//             };
//     }
// }

export default function Corsat() {

    // const [state , dispatch] = useReducer(reducer , initState)
    // useEffect(() => {
    //    axios.get('https://jsonplaceholder.typicode.com/posts/')
    //    .then((response) => dispatch({type:'Suc' , payload : response.data}))
    //    .catch((error) => dispatch({type : 'Faild'}))
    // },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
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
                  



        <Slider {...settings} className='container my-5 slider'>
            {dataCorse.map((item) => {
              return(
              <div>
              <div className="card">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={heart} alt="" />
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
            <Footer/>
    </div>
  )
}
