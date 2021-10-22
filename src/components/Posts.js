import React from 'react'
import '../index.css'
import man4 from '../images/man4.jpg'
import prof from '../images/prof.jpg'

import man3 from '../images/man3.jpg'
import woma2 from '../images/woma2.jpg'
import woman1 from '../images/woman1.jpg'


const Posts = () => {
    return (
        <div class="post-container">
                            <div class="post-wrapper">
                                <div class="postnav">
                                    <div class="post-header">
                                        <div class="post-profile">
                                        <img src={man4} class="post-img"  alt=""/>
                                            <p class="profilename-cont">
                                                <p class="profilename">Steven James </p> 
                                                <small>is at</small> 
                                                <p class="profilename"> Chuka </p> 
                                                <p class="date">OCt 17 at 1400hrs</p>
                                            </p>
                                        </div>
                                        <button>...</button>
                                    </div>
                                    <span>Hello thats a throw back</span>
                                </div>
                                <div class="postphoto">
                                    <img src={man3} alt="" />
                                </div>
                            
                                <div class="likescounter">
                                    <div class="likescount">
                                        <i class="fas fa-thumbs-up"></i> 
                                        <span>25</span>
                                    </div>
                                    <div class="commentcount">
                                    <span>21 comments</span><span> 1 share</span>
                                    </div>
                                </div>
                                <div class="likescounter">
                                    <div class="like">
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>like</span>
                                    </div>
                                    <div class="comment"> 
                                        <i class="far fa-comment-alt"></i>
                                        <span>Comment</span>
                                    </div>
                                    <div class="share">
                                        <i class="fas fa-share"></i>
                                        <span>share</span>
                                    </div>
                                </div>
                                <span class='singlecomment opencomments'> view one more comment</span>
                                <div class="comments">
                                    <div class='comments-cont'>
                                    <div class="commenting-profile">
                                        <img src={woman1} class="post-img commentprof" alt="" />   
                                    </div>
                                    <div class="actualcomments">
                                        <p class='commentname'>Sheila Kendi</p>
                                        <p class='commentmessage'> i saw you there bro</p>
                                        
                                    </div>
                                    </div>
                                    <small class='likereply'> <p>like.</p><p> reply</p></small>
                                </div>
                                <div class="comments">
                                    <div class='comments-cont'>
                                    <div class="commenting-profile">
                                            <img src={woma2} class="post-img commentprof" alt="" />   
                                    </div>
                                    <div class="actualcomments">
                                            <p class='commentname'>Anastacia Bily</p>
                                            <p class='commentmessage'> i saw you there bro</p>
                                    </div>
                                    </div>
                                    <small class='likereply'> <p>like.</p><p> reply</p></small>
                                </div>
                                <span class="multiplecomments opencomments">view 7more comments</span>
                                  <div class="comments-input">
                                     <div class="input-wrapper">
                                        <div class="input-content commentbar">
                                            <img src={prof} alt=""/>
                                            <input  class=" input-bar" type="text" placeholder="What's on your mind,Benson?"/>
                                                <div class="commentbar-icons">
                                                <i class="far fa-smile"></i>
                                                <i class="fas fa-camera"></i>
                                                </div>
                                          </div>
                                     </div>
                                 </div>
                           </div>
                        </div>
    )
}

export default Posts
