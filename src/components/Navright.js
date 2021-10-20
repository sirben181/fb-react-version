import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import prof from '../images/prof.jpg'

const Navright = () => {
    return (
        <div className="right-icons">
            {/* <Link to='#'> */}
                <div className="profile right-icon">
                    <img src={prof}  />
                    <span className='profName'>benson</span>
                </div>
            {/* </Link> */}

            
        </div>
    )
}

export default Navright
