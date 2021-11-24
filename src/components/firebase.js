import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCPXMBUgs0vYsnCBPaNtp8p3Z7PCZzUOmI",
    authDomain: "fb-react2.firebaseapp.com",
    projectId: "fb-react2",
    storageBucket: "fb-react2.appspot.com",
    messagingSenderId: "465563499300",
    appId: "1:465563499300:web:01ffa781da337575d311b1",
    measurementId: "G-NXWDSTS08J"
  };

 const firebaseApp=firebase.initializeApp(firebaseConfig)
 const db=firebaseApp.firestore();
 const auth =firebase.auth();
 const storage=firebase.storage()
 const provider= new firebase.auth.GoogleAuthProvider()
 
 export{auth, provider,storage};
 export default db