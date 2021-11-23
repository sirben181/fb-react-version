import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import './Login.css'
import  {auth,provider}  from './firebase'
import { actionTypes } from './reducer'
import{useStateValue} from "./StateProvider"
const Login = () => {
    const [state,dispatch]=useStateValue()
    const signIn=()=>{
     auth
     .signInWithPopup(provider)
     .then((result)=>{
dispatch({
    type:actionTypes.SET_USER,
    user:result.user
})
        //  console.log(result);
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
