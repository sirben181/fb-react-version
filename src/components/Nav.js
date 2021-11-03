import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import {FaHome} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
// import {FaBars} from 'react-icons/fa'
import  watch from '../images/watch.svg'
import store from '../images/store.svg'

const Nav = ({onAdd}) => {

    return (
        <div className='nav-wrapper' >
            <ul>
            <li className='home navlist' onClick={onAdd} >
                <Link to='#'><FaHome className="navhome"/></Link>
            </li>
            <li className="watch navlist" onClick={onAdd} >
                <Link to='#'><img src={watch} alt=""/></Link>
            </li>
            <li className='market navlist' onClick={onAdd} >
                <Link to='#'><img src={store} alt="" /></Link>
            </li>
            <li className="groups navlist" onClick={onAdd}>
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
