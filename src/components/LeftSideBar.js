import React from 'react'
import prof from '../images/prof.jpg'
import '../index.css'

const LeftSideBar = () => {
    return (
        <div className="wrapper">
            <div className="content-container">
                <div className="left-sidebar">
                    <div className="left-profile-flex">
                      <image src={prof} className="left-profile-flex" /> <h5>Benson Kamau</h5>
                    </div>
                    <div className="groups">
                        
                    </div>

                </div>
             </div>
        </div>
    )
}

export default LeftSideBar
