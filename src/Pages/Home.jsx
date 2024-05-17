import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../Pages/Home.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Newproduct from '../Component/Newproduct/Newproduct';
import { Cart } from '../Cart/Cart';

// import slide from '../assets/slide4.JPG';

function Home() {
    let[data, setData]=useState([])
   
    useEffect(()=>{
fetch(`https://dummyjson.com/products/categories`).then((a)=>a.json()).then((b)=>setData(b))
    },[])
  return (
    <>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 shadow p-4">
                <ul className="list-group list-group-flush ">
            <Link>    <li style={{backgroundColor: '#6D62FF'}} className="list-group-item text-uppercase text-center p-3 fw-bold rounded-3 ">All Categories</li></Link>
                    {data.slice(0,10).map((a)=>(
//   
  <li className="list-group-item text-uppercase pt-2 opacity-75 ">
    <Link to={`/cat/${a}`} className='link-dark link'>{a}</Link>
    </li>
                    ))}
  
</ul>

                </div>
                <div className="col-lg-9">
                  <div className='sliderimg'>
                  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src={slide} alt="" /></SwiperSlide> */}
        
        <SwiperSlide><img className='w-100   rounded-4 shadow' src="https://xtore.magentech.com/pub/media/wysiwyg/slidershow/home-1/item-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://xtore.magentech.com/pub/media/wysiwyg/slidershow/home-1/item-2.jpg" alt="" className='w-100  rounded-4 shadow'/></SwiperSlide>
        <SwiperSlide><img src="https://xtore.magentech.com/pub/media/wysiwyg/slidershow/home-1/item-1.jpg" alt="" className='w-100  rounded-4 shadow'/></SwiperSlide>
      </Swiper>
                </div>
            </div>
            </div>
        
        </div>
      </section>
     <Newproduct/>
    </>
  )
}

export default Home
