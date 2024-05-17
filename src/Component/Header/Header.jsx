import React, { useContext, useEffect, useState } from 'react'

import "./Header.scss"
import Select from '../SelectDrop/Select';
import { FaCartPlus } from "react-icons/fa6";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../../Pages/Home';
import Category from '../../Pages/Category/Category';
import Details from '../../Pages/Details/Details';
import { Cart } from '../../Cart/Cart';
import CartDetails from '../../Cart/CartDetails';
import About from '../About/About';
import Contact from '../Contact/Contact';
import SearchItems from '../SearchItem/SearchItems';

function Header() {
  // let [scrollNav, setScrollNav]=useState()
  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     if(scrollY > 100){
  //       setScrollNav('sticky')
  //     }
  //     else{
  //       setScrollNav()
  //     }
  //   })
  // })
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  let { state, dispatch } = useContext(Cart)
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    <>
      <section className='top shadow '>
        <p className='text-center  '>Get 20% off today with code XTORE. Limited stock!</p>
      </section>
      {/* header start */}
      <section className='topsearch  '>
      {/* <div className={scrollNav}> */}
        <div className="container">
          <div className="row ">
            <div className='topbar d-flex justify-content-sm-between '>
              <div className="col-lg-3 ">
                <div className="logo ">
                  <Link to='/' ><img src="https://xtore.magentech.com/pub/static/version1713779752/frontend/Sm/xtore/en_US/images/logo.svg" alt="Toplogo" /></Link>
                </div>
              </div>
              <div className="col-lg-6  flex d-none d-lg-block">
                <div className="row">
                  <div className="headersearch d-flex align-item-start rounded-pill position-relative ">
                    <div className="col-lg-3 col-3">
                      <Select />
                    </div>
                    <div className="col-lg-6  col-6">
                      <form
                        onSubmit={handleSubmit}
                        className="search position-relative d-inline-flex ">

                        <input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          type="text"
                          placeholder='search for items..'
                        />
                      </form>
                    </div>
                    <div className="col-lg-3 col-3">
                      <ul className=' text-end'>
                        <li className=' searchicon position-absolute   p-2 '><i class="bi bi-search"></i></li>
                      </ul>

                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-3 gap-3 m-0 d-flex justify-content-end p-0 ps-5 m-0">
                <div className="icon  ">
                  <button type="button" class="btn btn-primary position-relative gap-3 ">
                    <i class="bi bi-person-circle"></i>
                  </button>
                </div>

                <div className="icon  ">
                  <Link type="button" className="btn position-relative" to="/CartDetails">
                    <i class="bi bi-bag-fill"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill " >
                      {state.cartItems.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>

                </div>

                <div className="icon ">
                  <button type="button" class="btn  position-relative  ">
                    <i class="bi bi-heart-fill"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                   0
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

    

        <div className="row">
          <div className="col-lg-12">
        
            <div className="navsection ">
              <nav className="navbar navbar-expand-lg text-white ">

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end " tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                    <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body " >
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contact">ContactUS</Link>
                      </li>
                    </ul>

                  </div>
                </div>

              </nav>


            </div>
          </div>
        </div>
        {/* </div> */}
        </div>
      </section>
      {/* header end */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cat/:cid/" element={<Category />} />
        <Route path="/details/:id/" element={<Details />} />
        <Route path="/CartDetails/" element={<CartDetails />} />
        <Route path="/details/:id/" element={<Select />} />
        <Route path="/search/:term" element={<SearchItems />} />
      </Routes>
    </>
  )
}

export default Header
