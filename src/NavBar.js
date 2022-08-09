import {React, useState} from 'react'
import { Book } from './Book';
import axios from 'axios';
import './index.css'



export const NavBar = () => {

  const [search, setSearch] = useState("");
  const [bookData, setData]= useState([]);

  const searchBook=(evt)=>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBGRVHucACeAGJlDwGROLhqzqqhLrn2B-4')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }

  return ( 
    <>
    <div className='header'>
    <div className="row1">
        <h1>Books for you... <br />A reader's delight</h1>
    </div>
    <div className="row2">
        <h2>Find your Book</h2>
        <div className="search">

            <input type="text" placeholder='Enter the name of book' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
            <button id='btn'> Search</button>
        </div>
        <img src='../images/book1.png'/>
    </div>
</div>

<div className='container'>
 
 {
<Book book={bookData}/>
 }

</div>

</>
  );
}
