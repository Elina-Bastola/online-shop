import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  let[data, setData]=useState([])
   
    useEffect(()=>{
fetch(`https://dummyjson.com/products/categories`).then((a)=>a.json()).then((b)=>setData(b))
    },[])
  return (
    <>
    <div style={{backgroundColor: '#00425A'}} className='shadow rounded-2'>
    <div className="container mt-5 mb-0">
  {/* Footer */}
  <footer className="text-center text-lg-start text-white" >
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Links */}
      <section className>
        {/*Grid row*/}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            {/* <p>
              <a className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a className="text-white">MDWordPress</a>
            </p>
            <p>
              <a className="text-white">BrandFlow</a>
            </p>
            <p>
              <a className="text-white">Bootstrap Angular</a>
            </p> */}
             {data.slice(0,4).map((a)=>(
//   
  <li className="list-group-item ps-3 pb-2 opacity-75 text-white ">
    <Link to={`/cat/${a}`} className='text-white text-center text-decoration-none link'>{a}</Link>
    </li>
                    ))}
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="text-white">Your Account</a>
            </p>
            <p>
              <a className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="bi bi-geo-alt-fill"></i> New York, NY 10012, US</p>
            <p><i class="bi bi-envelope-fill"></i> info@gmail.com</p>
            <p><i class="bi bi-telephone-fill"></i> + 01 234 567 88</p>
            <p><i class="bi bi-telephone-fill"></i> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
      <hr className="my-3" />
      {/* Section: Copyright */}
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          {/* Grid column */}
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            {/* Copyright */}
            <div className="p-3">
              © 2020 Copyright:
              <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* Copyright */}
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i class="bi bi-facebook"></i></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i class="bi bi-twitter"></i></a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i class="bi bi-google"></i></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i class="bi bi-instagram"></i></a>
          </div>
          {/* Grid column */}
        </div>
      </section>
      {/* Section: Copyright */}
    </div>
    {/* Grid container */}
  </footer>
  {/* Footer */}
</div>
</div>

    </>
  )
}

export default Footer
