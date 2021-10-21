import React from 'react'
import prof from '../images/prof.jpg'
import '../index.css'

const Inputcontent = () => {
    return (
        <div class="input-container">
           <div class="input-wrapper">
             <div class="input-content">
                <img src={prof} alt=""/>
                <input  class=" input-bar" type="text" placeholder="What's on your mind,Benson?" />
            </div>
            <div class="inputType">
                <div class="livevideo">
                    <i class="fas fa-video"></i>
                    <p>live video</p>
                </div>
                <div class="gallery">
                    <i class="far fa-images"></i>
                    <p>photos</p>
                </div>
                <div class="feeling">
                    <i class="far fa-smile"></i>
                    <p>feeling/activity</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Inputcontent
