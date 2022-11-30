import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>

                <li className='li'><Link to="/">home</Link></li>
                <li className='li'><Link to="/add"> add product</Link></li>
                <li className='li'><Link to="/update"> update product</Link></li>
                <li className='li'><Link to="/log-out">Log out</Link></li>
                <li className='li'><Link to="/profile">profile</Link></li>
                <li className='li'><Link to="/signup">signup</Link></li>


            </ul>
        </div>
    )
}
export default Nav;