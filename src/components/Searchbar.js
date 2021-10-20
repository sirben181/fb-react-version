import React from 'react'
import '../index.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'


const Searchbar = () => {
    return (
        <>
        <div className='search'>
            <div className='facebook'>
                <FaFacebookSquare />
                </div>
                <FaSearch className='search-image'/>
                <input type='text'  className='input' placeholder='search' />            
        </div>
        </>
    )
}

export default Searchbar
