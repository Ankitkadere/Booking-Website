// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMpWDStktk6IRwJjPBQ0exKTCMYENQ-c",
  authDomain: "room-booking-9dcf1.firebaseapp.com",
  projectId: "room-booking-9dcf1",
  storageBucket: "room-booking-9dcf1.appspot.com",
  messagingSenderId: "603961601605",
  appId: "1:603961601605:web:c3a0530829de90605ebd2c"
};
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth=getAuth();
 const db=getFirestore();

 onAuthStateChanged(auth, (user)=>{
   const loggedInUserId=localStorage.getItem('loggedInUserId');
   if(loggedInUserId){
       console.log(user);
       const docRef = doc(db, "users", loggedInUserId);
       getDoc(docRef)
       .then((docSnap)=>{
           if(docSnap.exists()){
               const userData=docSnap.data();
               document.getElementById('loggedUserFName').innerText=userData.firstName;
               document.getElementById('loggedUserEmail').innerText=userData.email;
               document.getElementById('loggedUserLName').innerText=userData.lastName;

           }
           else{
               console.log("no document found matching id")
           }
       })
       .catch((error)=>{
           console.log("Error getting document");
       })
   }
   else{
       console.log("User Id not Found in Local storage")
   }
 })

 const logoutButton=document.getElementById('logout');

 logoutButton.addEventListener('click',()=>{
   localStorage.removeItem('loggedInUserId');
   signOut(auth)
   .then(()=>{
       window.location.href='index.html';
   })
   .catch((error)=>{
       console.error('Error Signing out:', error);
   })
 })