
import React, { useEffect, useState } from 'react'
import Chatrooms from './Chatrooms'
import Inputcontent from './Inputcontent'
import Posts from './Posts'
import Statuses from './Statuses'
import { useStateValue } from './StateProvider';
import db from './firebase'

const Maincontent = () => {
    const [posts,setPosts]=useState()
   
    useEffect(()=>{
        db.collection('posts')
        .orderBy("timestamp")
        .onSnapshot((snapshot)=>{
         setPosts(snapshot.docs.map((doc)=>{ 
        //  id:doc.id
        //  data:doc.data();     
        } ))
         })
           },[])
          
    return (
        <div className="main-container">
            <div className="main-container-wrapper" style={{paddingBottom:'50px'}}>
                 <Statuses />
                 <Inputcontent />
                 <Chatrooms />
                 
                {/* {posts.map((posts)=>{ */}
                        <Posts 
                // key={posts.id}
                // profilePic={posts.data.profilePic}
                //  Timestamp={posts.data.timestamp}
                // userName={posts.data.username}
                //  message={posts.data.message}

                 />
                {/* } )} */}
            
                

            </div>
        </div>
    )
}

export default Maincontent
