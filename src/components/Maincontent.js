
import React, { useEffect, useState } from 'react'
import Chatrooms from './Chatrooms'
import Inputcontent from './Inputcontent'
import Posts from './Posts'
import Statuses from './Statuses'
// import { useStateValue } from './StateProvider';
import db from './firebase'

const Maincontent = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>{
         setPosts(snapshot.docs.map(doc=>({
             id:doc.id,data:doc.data()
         })))
         })
           },[])
    return (
        <div className="main-container">
            <div className="main-container-wrapper" style={{paddingBottom:'50px'}}>
                 <Statuses />
                 <Inputcontent />
                 <Chatrooms />
                 <Posts profPic={posts.postphoto}
                 comments={posts.comments}
                 postPhoto={posts.postphoto}
                 Timestamp={posts.timestamp}
                userName={posts.profilePic}
                 message={posts.span}

                 />
                

            </div>
        </div>
    )
}

export default Maincontent
