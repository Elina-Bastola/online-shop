import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Newproduct from '../Newproduct/Newproduct';
import Searchh from './Searchh';

function SearchItems() {
    const {term} = useParams();
 const [filterData, setFilterData] = useState([]);
 useEffect (()=> {
    const filteredData = () =>{
        const data = Searchh.filter((a)=>a.title.toLowerCase().include(term.toLowerCase()));
        setFilterData(data)
    }
  filteredData();
 }, [term])
  return (

   <Newproduct items={filterData}/>
  )
}

export default SearchItems
