import React from 'react'
import { useState } from 'react';
import './index.css'


export const Book = ({book}) => {

 const [show, setShow] = useState(false);
 const [bookItem, setItem]= useState();


  return (
    <>
   { book.map((item)=> {

let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;


if(thumbnail!=undefined && amount!=undefined) {

return (
  <>
       <div className="card" >
       <img src={thumbnail}/ >
       <div className="bottom">
           <h3 className='title'>{item.volumeInfo.title}</h3>
           <div className='amount'> Rs {amount}</div> 
          
       </div>
      </div> 
       </>
)}
  })}
         
           </>
    
  )
}
