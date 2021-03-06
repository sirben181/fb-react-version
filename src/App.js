import React from 'react'
import {useEffect,useState} from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Grid from './components/Grid';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import db from './components/firebase'
 const App = () => {
     const [{user},dispatch]=useStateValue()
     
 
//create a local firebase and a remote firebase
//connect the data base
//create the context api 
//grab the posts from the data base

// const addActive=(e)=>{
//  const links=document.querySelector('.navlist')
// links.filter((link)=>link.event.target!==e.target)
//     console.log('filtered')

// }
    
    return (
        <div>
            {!user ? (<Login />):( 
                 <Router>
                 <Navbar  />
                 <Grid />
                 </Router>
            )}
           
           
        </div>
    )
}
export default App