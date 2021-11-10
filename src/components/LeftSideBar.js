import React from 'react'
import prof from '../images/prof.jpg'
import './leftsidebar.css'

const LeftSideBar = () => {
    return (
                <div className="left-sidebar">
                <div className="leftsidebar-container">
                    <div className="left-profile-flex submenu">
                      <image src={prof} className="left-profile-link" /> <h5>Benson Kamau</h5>
                    </div>
                    <div className="friends submenu">
                        <a href="#">Friends</a>
                    </div>
                    <div className="watch submenu">
                        <a href="#">Watch</a>
                    </div>
                    <div className="groups submenu">
                        <a href="#">Groups</a>
                    </div>
                    <div className="market submenu">
                        <a href="#">Marketplace</a>
                    </div>
                    <div className="saved submenu">
                        <a href="#">saved</a>
                    </div>

                </div>
                <div className="shortcuts">
                    <h3>YOUR SHORTCUTS</h3>
                  <a href="">Familia ya Matangazo ya mpira</a>
                  <a href=""> Kiamariga primary</a>
                  <a href=""> Biochemistry</a>
                  <a href="">Chuka university</a>
                </div>
             </div>
       
    )
}

export default LeftSideBar
