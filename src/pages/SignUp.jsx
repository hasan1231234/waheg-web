 import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import background from '../img/backgound-polit.png'
import face from '../img/facebook_ic.svg'
import google from '../img/google_ic.svg'
import apple from '../img/cib_apple.png'
import { Link } from 'react-router-dom'
import title from '../img/التسجيل.png'
import axios from 'axios'
export default function SignUp() {
  const [userName , setUsrNmae] = useState('')
  const [email , setEmail] = useState('')
  const [number , setNumber] = useState('')
  const [date , setDate] = useState('')
  const [gender , setGender] = useState('')
  const [password , setPassword] = useState('')

const handelSubmi = (e) => {
  e.preventDefault()
  axios.post('', {userName , email , password , number , date , gender})
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
   setTimeout(() => {
    window.location= '/login'
   } , 2000)
}
  return (
    <div className='position-relative body'>
        <NavBar/>
        <img src={background} alt="" className='position-absolute background'/>
        <img src={title} alt=""  className='title'/>
        <form className='mx-auto' onSubmit={e =>handelSubmi(e)}>
          <input type="text" placeholder='ادخل الاسم' name='userName'  required onChange={e => setUsrNmae(e.target.value)}/>
          <input type="text" placeholder='ادخل البريد الالكتروني' name='email'  required onChange={e => setEmail(e.target.value)}/>
          <input type="text" placeholder='ادخل رقم الهاتف' required name='number' onChange={e => setNumber(e.target.value)}/>
          <input type="text" placeholder='ادخل تاريخ الميلاد' required name='date' onChange={e => setDate(e.target.value)}/>
<select class="form-select" aria-label="Default select example" name='gender' onChange={e => setGender(e.target.value)}>
  <option value='ذكر' selected>ذكر</option>
  <option value='خنثى' >خنثى</option>
  <option value='انثى' >انثى</option>
  <option value='لا افضل الاختيار' >لا افضل الاختيار</option>
</select>
          <input type="password" placeholder='ادخل كلمة المرور' name='password' required onChange={e => setPassword(e.target.value)}/>
          <input type="password" placeholder='تأكيد كلمة المرور' required/>
          <input type="submit" className='bg-blue' value='تسجيل الدخول'/>
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
