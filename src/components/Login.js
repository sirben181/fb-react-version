import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import './Login.css'
import  {auth,provider}  from './firebase'
const Login = () => {
    const signIn=()=>{
     auth
     .signInWithPopup(provider)
     .then((result)=>{
         console.log(result);
        //  console.log(result.user.displayName)
        //  console.log(result.user.email)
        //  console.log(result.user.photoURL)


        
    }).catch(( error)=>
        alert(error.message))
    }
    return (
        <div className="container"> 
         <div className="Logincard">
         <FaFacebookSquare className="fb-icon" />
        <button type='submit' 
    className="btnSignin"  onClick={signIn}>SignIn</button>
            
         </div>
     
        </div>
    )
}

export default Login 
