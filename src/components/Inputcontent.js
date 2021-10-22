import React from 'react'
import prof from '../images/prof.jpg'
import '../index.css'

const Inputcontent = () => {
    

    return (
        <div class="input-container">
           <div class="input-wrapper">
              <div className="first-input">
             <div class="input-content">
                <img src={prof} alt="" className="smallProfile"/>
                <input  class=" input-bar" type="text"
                 placeholder="What's on your mind,Benson?" />
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
            <div className="postForm-container">
            <div className='postForm'>
                <h2>Create Post</h2>
                <div className="profT"> 
                    <img src={prof} alt="" className="smallProfile"/> 
                    <span>Samuel Maina</span>
                </div>
                <span name="" id="commentPad"></span>
                <button className="btn-post" type="submit">Post</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Inputcontent
