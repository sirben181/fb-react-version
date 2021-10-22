import React from 'react'
import '../index.css'
import  man1 from '../images/man1.jpg'
import  woman1 from '../images/woman1.jpg'
import  woman3 from '../images/woman3.jpg'
import  woman4 from '../images/woman4.jpg'
import  man2 from '../images/man2.jpg'
import  man3 from '../images/man3.jpg'
import  woma2 from '../images/woma2.jpg'


const Chatrooms = () => {
    return (
        <div class="chatroom-container">
        <div class="chatrooms">
            <div class="crooms">
                <i class="fas fa-video"></i><p>createRoom</p>
            </div>
            <div class="rooms">
                <img src={woman1}alt="" />
                <img src={woma2} alt=""/>
                <img src={woman3}alt="" />
                <img src={woman4} alt=""/>
                <img src={man1} alt=""/>
                <img src={man2} alt=""/>
                <img src={man3}alt=""/>
                <div class="addmore"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>
    </div>
    )
}

export default Chatrooms
