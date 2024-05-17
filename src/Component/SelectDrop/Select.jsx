import React, { useEffect, useState } from 'react'
import "./Select.scss"
import { Link } from 'react-router-dom'
const Select = () => {
  let[data, setData]=useState([])
   
    useEffect(()=>{
fetch(`https://dummyjson.com/products/categories`).then((a)=>a.json()).then((b)=>setData(b))
    },[])
  return (
    <>
    
  <div class="dropdown">
  <a class="btn  dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    All Categories
  </a>

  <ul class="dropdown-menu">
     {data.slice(0,10).map((a)=>(
//   
  <li className="list-group-item ps-3 pb-2 opacity-75 ">
    <Link to={`/cat/${a}`} className='link-dark link'>{a}</Link>
    </li>
                    ))}
  
  </ul>
</div>

    </>
  )
}

export default Select

