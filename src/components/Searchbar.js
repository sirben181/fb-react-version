import React from 'react'
import '../index.css'
import {FaFacebookSquare} from 'react-icons/fa'

const Searchbar = () => {
    return (
        <div className='search'>
            <div className='facebook' >
                <FaFacebookSquare />
                <input type='text'  className='input' placeholder='search' />
            </div>

            
        </div>
    )
}

export default Searchbar
