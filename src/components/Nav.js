import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import {FaHome} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import  watch from '../images/watch.svg'
import store from '../images/store.svg'

const Nav = () => {
    return (
        <div className='nav-wrapper'>
            <ul>
            <li className='home navlist'>
                <Link to='#'><FaHome className="navhome"/></Link>
            </li>
            <li>
                <Link to='#'><img src={watch} /></Link>
            </li>
            <li className='market navlist'>
                <Link to='#'><img src={store} alt="" /></Link>
            </li>
            <li className="groups navlist">
                <Link to='#'>
                    <FaUsers className="navgroups" />
                    {/* <FaBars  className="group-top"/> */}
                </Link>
            </li>
            </ul>
            
        </div>
    )
}

export default Nav
