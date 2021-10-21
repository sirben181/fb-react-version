import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


import '../index.css'
import prof from '../images/prof.jpg'

const Navright = () => {
    return (
        <div className="rightmenucontainer">
            <div className='rightmenuwrapper'>
                <div className="navprofile">
                    <img src={prof} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navright
