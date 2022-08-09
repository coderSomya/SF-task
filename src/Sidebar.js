import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'; 
import { Outlet } from 'react-router-dom';

export const Sidebar = () => {
  const s = { paddingLeft: 13,
 color: 'white' };

  return (<>
    <div className='top_menu' >
     
     <ul>
        <Link to="/home" style={s}>home</Link>
        <Link to="/sports" style={s}>sports</Link>
        <Link to="/gk" style={s}>gk</Link>
        <Link to="/iitjee" style={s}>iitjee</Link>
        <Link to="/science" style={s}>science</Link>
        
     </ul>
    </div>

    <Outlet/>
    </>
  )
}
