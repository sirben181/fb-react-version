import React from 'react'
import "../index.css"

const Post = ({username,timestamp,image,message}) => {
    return (
        <div className="post">
            <div className="wrapper">
                <div className="postsheader">
                    <div className="header">
                <img src={image} alt="" className="smallProfile"/>
                <p className="username">{username}</p>
                </div>
                <p className="text.timestamp">{timestamp}</p>
                <p className="postmessage">{message}</p>
                <div className="postbody">
                    <img src={image} className="postbodyimage"/>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post
