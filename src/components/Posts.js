import React, { useEffect, useState } from 'react'
// import { useStateValue } from './StateProvider';
import db from './firebase'
import Post from './Post';

const Posts = () => {
  const [posts,setPosts]=useState([])
  // const[{user},dispatch]=useStateValue()
   
  useEffect(()=>{
      db.collection('posts')
      .orderBy("timestamp")
      .onSnapshot((snapshot)=>{
       setPosts(snapshot.docs.map(doc=>({ 
       id:doc.id,
       data:doc.data()     
      }) ))
       })
         },[])
  return (
    <div>
           {posts.map((post)=>{ 
           <Post 
            key={post.id}
            username={post.data.username}
            timestamp={post.data.timestamp}
            message={post.data.message}
            image={post.data.profilePic}
            />})}
      
    </div>
  )
}

export default Posts
