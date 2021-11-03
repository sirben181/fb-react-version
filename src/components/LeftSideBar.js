import React from 'react'
import prof from '../images/prof.jpg'
import '../index.css'

const LeftSideBar = () => {
    return (
        <div className="wrapper">
                <div className="left-sidebar">
                <div className="content-container">
                    <div className="left-profile-flex">
                      <image src={prof} className="left-profile-link" /> <h5>Benson Kamau</h5>
                    </div>
                    <div className="friends">
                        <a href="#">Friends</a>
                    </div>
                    <div className="watch">
                        <a href="#">Watch</a>
                    </div>
                    <div className="groups">
                        <a href="#">Groups</a>
                    </div>
                    <div className="market">
                        <a href="#">Marketplace</a>
                    </div>
                    <div className="saved">
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
        </div>
    )
}

export default LeftSideBar
