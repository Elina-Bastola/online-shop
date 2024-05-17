
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cart } from '../../Cart/Cart'

function Category() {
    let {cid}=useParams()
    let[data, setData]=useState([])
    let{state,dispatch}=useContext(Cart)
    useEffect(()=>{
fetch(`https://dummyjson.com/products/category/${cid}`).then((a)=>a.json()).then((b)=>setData(b.products))
    },[cid])
  return (
    <>
      <section className='container mt-5'>
        <h2>{cid}</h2>
      <div className="row mt-3">
    {data.map((a)=>(
  <div className="col-md-3 col-sm-6">
  <div className="product-grid4">
    <div className="product-image4">
      <Link to={`/details/${a.id}`}>
        <img className="pic-1 mt-4 mb-4" src={a.thumbnail} />
        <img className="pic-2 mt-4 mb-4" src= {a.images[1]}/>
      </Link>
      <ul className="social">
        <li><a href="#" data-tip="Quick View"><i className="fa fa-eye" /></a></li>
        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
      </ul>
      <span className="product-new-label mt-4">New</span>
      <span className="product-discount-label mt-4">-10%</span>
    </div>
    <div className="product-content">
      <h3 className="title text-center"><a href="#">{a.title}</a></h3>
      <div className="price">
        ${a.price}
        <span>$16.00</span>
      </div>
     <div><a className="add-to-cart" onClick={()=>dispatch({type: 'addtocart', payload: a})}>ADD TO CART</a>
     </div>
   </div>
  </div>
</div>
    ))}

 
</div>
      </section>
    </>
  )
}

export default Category
