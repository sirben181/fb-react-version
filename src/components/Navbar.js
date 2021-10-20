import React from 'react'
import Searchbar from './Searchbar'
import '../index.css'
import Nav from './Nav'
import Navright from './Navright'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-container'>
            <Searchbar />
            <Nav />
            <Navright />
        
            </div> 
        </div>
    )
}

export default Navbar
