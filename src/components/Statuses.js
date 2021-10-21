import React from 'react'
import '../index.css'
import  man1 from '../images/man1.jpg'
import  woman1 from '../images/woman1.jpg'
import  man2 from '../images/man2.jpg'
import  man3 from '../images/man3.jpg'
import  woma2 from '../images/woma2.jpg'

const Statuses = () => {
    return (
        <div class="spanning">
                            <div class="main-wrapper">
                                <span class="first-status">
                                    <span class="singlestatus-profile status">
                                        <img src={man1} alt="" />
                                    </span>
                                </span>
                                <span class="singlestatus1 status">
                                    <img src={woman1} alt="" />
                                </span>
                                <span class="singlestatus2 status">
                                    <img src={man2}alt="" />
                                </span>
                                <span class="singlestatus3 status">
                                    <img src={man3} alt="" />
                                </span>
                                <span class="singlestatus4 status">
                                    <img src={woma2} alt="" />
                                </span>
                            </div>
                        </div>
    )
}

export default Statuses
