import React from 'react'
import Searchbar from './Searchbar'
import '../index.css'
import Nav from './Nav'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-container'>
            <Searchbar />
            <Nav />
        
            </div> 
        </div>
    )
}

export default Navbar
