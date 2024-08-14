import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAvN4vGolAFB4eFtZKbdDvgkflSgxV-20g",
    authDomain: "netflix-clone-27-f9b5b.firebaseapp.com",
    projectId: "netflix-clone-27-f9b5b",
    storageBucket: "netflix-clone-27-f9b5b.appspot.com",
    messagingSenderId: "443584075811",
    appId: "1:443584075811:web:31049afeef6e8817d5f996",
    measurementId: "G-R9VF0CL0SP"
  };


  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);


  export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged   };
  export default db;