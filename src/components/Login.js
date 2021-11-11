import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import './Login.css'
const Login = () => {
    const signIn=()=>{
        console.log('signed in')
    }
    
    return (
        <div className="container"> 
         <div className="Logincard">
         <FaFacebookSquare className="fb-icon" />
        <button type='submit' onClick={signIn}
    className="btnSignin">SignIn</button>
            
         </div>
     
        </div>
    )
}

export default Login
