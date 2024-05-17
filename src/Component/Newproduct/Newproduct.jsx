
import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../../Cart/Cart'
function Newproduct() {
    let[data, setData]=useState([])
    let{state,dispatch}=useContext(Cart)
    useEffect(()=>{
fetch(`https://dummyjson.com/products`).then((a)=>a.json()).then((b)=>setData(b.products))
    },[])
  return (
    <>
       <section className='mt-4'>
<div className="container ">
  <h2 className=''>NEW PRODUCTS</h2>
  <div className="row">
    <div className="col-lg-3">

    </div>
<div className="row mt-3">
    {data.map((a)=>(
  <div className="col-md-3 col-sm-6">
  <div className="product-grid4">
    <div className="product-image4">
      <a href="#">
        <img className="pic-1 mt-4 mb-4 " src={a.thumbnail} />
        <img className="pic-2 mt-4 mb-4" src= {a.images[1]}/>
      </a>
      <ul className="social">
        <li><a href="#" data-tip="Quick View"><i className="fa fa-eye" /></a></li>
        <li><a href="#" data-tip="Add to Wishlist" onClick={()=>dispatch({type: 'addtocart', payload: a})}><i className="fa fa-shopping-bag" /></a></li>
        <li><a href="#" data-tip="Add to Cart" onClick={()=>dispatch({type: 'addtocart', payload: a})}><i className="fa fa-shopping-cart" /></a></li>
      </ul>
      <span className="product-new-label mt-4">New</span>
      <span className="product-discount-label mt-4">-10%</span>
    </div>
    <div className="product-content">
      <h3 className="title text-center"><a href="#">{a.title}</a></h3>
      <div className="price">
        ${a.price}
       
      </div>
    <div> <a className="add-to-cart" onClick={()=>dispatch({type: 'addtocart', payload: a})}>ADD TO CART</a></div> 
    </div>
  </div>
</div>
    ))}

 
</div>
  </div>
</div>
      </section>
    </>
  )
}

export default Newproduct
