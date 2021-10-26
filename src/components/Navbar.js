import React from 'react'
import Searchbar from './Searchbar'
import '../index.css'
import Nav from './Nav'
import Navright from './Navright'

const Navbar = ({onAdd}) => {
    return (
        <div className='nav'>
            <div className='nav-container'>
            <Searchbar />
            <Nav onAdd={onAdd}/>
            <Navright />
        
            </div> 
        </div>
    )
}

export default Navbar
