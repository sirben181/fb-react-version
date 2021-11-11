import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import './Login.css'
import{auth,provider} from './firebase'
const Login = () => {
    const signIn=()=>{
        //signIn
        auth.signinWithPopuP(provider)
        .then(result=>{
            console.log(result)
        }).catch((error)=>alert(error.message))
     
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
