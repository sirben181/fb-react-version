import React from 'react'
import {useEffect,useState} from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Grid from './components/Grid';
 const App = () => {
//     const [AddPost,setAddPost]=useState(false)
//     const [posts,setPosts]=useState('')

//    AddPost=(post)=>{ const id=Math.floor(Math.random()*10000)+1
//     const newPost={id,...post}
//     setPosts([...posts,newPost])}
//     const OpenTextArea=()=>{
     
//     }
    return (
        <div>
            <Router>
        
            <Navbar />
            <Grid />
            </Router>
           
        </div>
    )
}
export default App