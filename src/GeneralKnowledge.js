import React from 'react'
import './index.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Book } from './Book'; 

export const GeneralKnowledge = () => {

    const [bookData, setData]= useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=gk&key=AIzaSyBGRVHucACeAGJlDwGROLhqzqqhLrn2B-4')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    })

  return ( <>
<div className='container'>
 
 {
<Book book={bookData}/>
 }

</div>

  </>
  )
}
