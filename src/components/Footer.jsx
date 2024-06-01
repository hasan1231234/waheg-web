import React from 'react'
import titfoot from '../img/تواصل معنا.png'
import social1 from '../img/instagram (2).png'
import social2 from '../img/threads 1.png'
import social3 from '../img/twitter-alt.png'
import social4 from '../img/facebook (3).png'
export default function Footer() {
  return (
    <div className="footer-home">
    <div className="foot center d-flex flex-column align-items-center gap-3 justify-content-center ">
        <img src={titfoot} alt=""/>
        <div className="d-flex align-items-center my-5 gap-3 justify-content-center">
            <img src={social1} alt="" />
            <img src={social2} alt="" />
            <img src={social3} alt="" />
            <img src={social4} alt="" />
        </div>
    </div>
  </div>
  )
}
