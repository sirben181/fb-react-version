import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import './Login.css'
const Login = () => {
    return (
        <div className="container"> 
         <div className="Logincard">
         <FaFacebookSquare className="fb-icon" />
        <button type='text' 
    className="btnSignin">SignIn</button>
            
         </div>
     
        </div>
    )
}

export default Login
