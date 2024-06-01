import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import background from '../img/backgound-polit.png'
import logo1 from '../img/user-rounded-svgrepo-com.png'
import logo2 from '../img/lock-svgrepo-com.png'
import face from '../img/facebook_ic.svg'
import google from '../img/google_ic.svg'
import apple from '../img/cib_apple.png'
import title from '../img/تسجيل الدخول.png'
import { Link } from 'react-router-dom'
import { baseurl } from '../mvm'
import axios from 'axios'
export default function LogIn() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const handelSubmit = () => {
    axios.post(`${baseurl}/user-login` , {
      headers : {
        Authorzation : 'Bearer ' + '8y8BXTyqnG8dJueL5aqncSzmyYqQyggid2BJxKW0K9Yfw1mHGzDGGYcvcL0S'
      }
    })
  }
  return (
    <div className='body'>
      <NavBar/>
        <img src={background} alt="" className='position-absolute background'/>
        <img src={title} alt=""  className='title'/>
        <form className='mx-auto' onSubmit={(e) => handelSubmit(e)}>
            <div className='input-div'><input type="email" className='input-log' placeholder='البريد الالكتروني' onChange={(e) => setEmail(e.target.value)}/> <img src={logo1} alt="" /></div>
            <div className='input-div'><input type="password" className='input-log' placeholder='كلمة المرور'/> <img src={logo2} alt="" onChange={(e) => setPassword(e.target.value)}/></div>
            <span className='span-log'>هل نسيت كلمة المرور؟</span>
            <Link to='/home' className='a-log'>تسجيل الدخول</Link>
          <h5 className='text-center my-5'>أو</h5>
          <div className='d-flex align-items-center justify-content-center gap-3'>
             <img src={face} alt="" />
             <img src={google} alt="" />
             <img src={apple} alt="" />
          </div>
          <p className='my-5 mx-auto w-50 text-center'>
          لدي حساب بالفعل؟ <span>تسجيل الدخول</span>
          </p>
        </form>
    </div>
  )
}
