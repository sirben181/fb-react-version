import React, { useState,useEffect } from 'react'
import '../index.css'
import man4 from '../images/man4.jpg'
import prof from '../images/prof.jpg'
import man3 from '../images/man3.jpg'
import woma2 from '../images/woma2.jpg'
import woman1 from '../images/woman1.jpg'
import db from './firebase'
import { useStateValue } from './StateProvider';


const Posts = () => {
    
    const [{user},dispatch]=useStateValue()
 
    
    return (
    <div>

  </div>
    ) 
}

export default Posts
