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
const addActive=(e)=>{
//  const links=document.querySelector('.navlist')
 const here=e.target
if(here.classList.contains('active')){
    here.classList.remove('active')
} else{
    here.classList.add('active')
}
    }
    return (
        <div>
            <Router>
        
            <Navbar onAdd={addActive} />
            <Grid />
            </Router>
           
        </div>
    )
}
export default App