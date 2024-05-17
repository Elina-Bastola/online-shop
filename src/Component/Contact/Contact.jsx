import React, { useState } from 'react'
import {  Link } from 'react-router-dom'

import contactimg from '../../assets/contactt.jpg';
import './Contact.scss'
import Userform from './Userform';



function Contact() {
  

  return (
    <>
     <div className="container">
      <div className="row">
      <div className="pages d-flex gap-2 m-4 text-dark opacity-75">
     <Link to='/'> <p className='text-dark'>Home  / </p></Link>
     <Link to='/About'> <p className='text-dark' > About  /</p> </Link>
     <Link to='/Contact'> <p className='text-black'> Contact</p> </Link>
      </div>
    </div>
    <div className="contactpage">
      <h2 className='fs-2 mx-5 p-4'>Contact Us</h2>
    </div>
    <div className="contactimg animate__animated animate__bounce animate__backInUp animate__delay-1s">
        <img src={contactimg} alt="" className='w-100 rounded-4 shadow opacity-75 bg-dark mx-0 px-0' />
    </div>
    </div>
    <div className="container ">
      <div className="row">
    <div className="Contactdetail d-flex justify-content-between ">
    <div className="col-lg-3 col-12 col-md-12">    
<div className="contact rounded-4 shadow   text-center py-4 px-2" >
  <div className="contact-body my-5">
    <h4 className="card-city" >New Work</h4>
    <div className="contact-detail  text-secondary">
    <p> Address: Seestrasse 21, New York</p>
    <p>Email: biagiotti@qodeinteractive.com</p>
    <p>Phone : + 99 411 725 39 12</p>
    </div>
  
</div>
</div>
</div>

<div className="col-lg-3 col-md-12 col-12    ">    
<div className="contact rounded-4 shadow  text-center py-4 px-2 gap-2">
 
  <div className="contact-body my-5">
    <h4 className="contact-city" >    London</h4>
    <div className="contact-detail  text-secondary">

    <p>Address: Rue Vieille Du Temple, London</p>
<p>Email: biagiotti@qodeinteractive.com</p>
<p>Phone : + 99 411 725 39 12</p>
    </div>
 
</div>
</div>
</div>

<div className="col-lg-3 col-md-12 col-12   ">    
<div className="contact rounded-4 shadow  text-center py-4 px-2 gap-2">
 
  <div className="contact-body my-5">
    <h4 className="contact-city" >  California</h4>
    <div className="contact-detail  text-secondary">
  
<p>Address: 191 Victoria Street, California</p>
<p>Email: biagiotti@qodeinteractive.com</p>
<p>Phone : + 99 411 725 39 12</p>
    </div>
    </div>
</div>
</div>
</div>
</div>

  {/* <div className="inquiry-form">
    <div className="row">
      <div className="col-lg-6">
<Userform/>
      </div>
    </div>
  </div> */}
    </div>


    </>
  )
}

export default Contact
