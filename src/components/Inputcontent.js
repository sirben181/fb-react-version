import React,{useRef, useState}from 'react'
import prof from '../images/prof.jpg'
import '../index.css'
import './inputcontent.css'
import {useStateValue} from "./StateProvider";
import db from './firebase';
import firebase from'firebase'


const Inputcontent = () => {

    const [input,setInput]=useState('')
    const [imageToPost,setImageToPost]=useState('')
    const[{user},dispatch]=useStateValue()
    const filepickerRef=useRef(null)
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(!input)return
   db.collection("posts",'desc').add({
       message:input,
       timestamp:firebase.firestore.FieldValue
       .serverTimestamp(),
       profilePic:user.photoURL, 
       username:user.displayName,

   })
   setInput('')
 }
 const addImageToPost=(e)=>{
    const reader=new FileReader()
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload=(readerEvent)=>{
        setImageToPost(readerEvent.target.result)
    }
 }
 const removeImage=()=>{
    setImageToPost('') 
 }

    return (
        <div class="input-container">
        <div class="input-container1">
           <div class="input-wrapper">
              <div className="first-input">
             <div class="input-content">
                <img src={user.photoURL} alt="" className="smallProfile"/>
               
               <form>
                    <input  class=" input-bar" type="text" 
                    value={input}
                onChange={(e)=>setInput(e.target.value)}
             placeholder="What's on your mind {user.displayName}" 
             />
             <button type="submit"
              style={hiddenBtn}
             class='hiddenBtn' onClick ={handleSubmit}>Hidden btn</button>
             </form>
             {imageToPost && (
                 <div className="removeimage"
                  onClick={removeImage}>
                     <image src={imageToPost} alt=""
                     className="imagepost"/>
                     <p className="textimage">remove</p>
                 </div>
             )}
            </div>
            
            <div class="inputType">
                <div class="livevideo">
                    <i class="fas fa-video"></i>
                    <p>live video</p>
                </div>
                <div class="gallery"  
                onClick={()=>filepickerRef.current.click()}>
                    <i class="far fa-images"></i>
                    <p>photos</p>
                    <input type="file" hidden 
                    ref={filepickerRef}
                    onChange={addImageToPost}
                   
                    />
                </div>
                <div class="feeling">
                    <i class="far fa-smile"></i>
                    <p>feeling/activity</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    {/* <div className="postForm-container">
    <div className='postForm'>
        <h2>Create Post</h2>
        <div className="profT"> 
            <img src={prof} alt="" className="smallProfile"/> 
            <textarea type="textrarea" class="input-post"/>                </div>
        <span name="" id="commentPad"></span>
        <button className="btn-post" type="submit">Post</button>
    </div>
    </div> */}
    </div>
    )
}
 const hiddenBtn={display:'none'}
export default Inputcontent
