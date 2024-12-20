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

// Initialize Firebase Auth and Firestore
const auth = getAuth();
const db = getFirestore();

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is authenticated, fetch user data from Firestore
    const loggedInUserId = user.uid;  // Use user.uid from auth state
    console.log(user);  // Log the user object for debugging
    
    // Fetch user data from Firestore
    const docRef = doc(db, "users", loggedInUserId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          // Display user data on the page
          document.getElementById('loggedUserFName').innerText = userData.firstName;
          document.getElementById('loggedUserEmail').innerText = userData.email;
          document.getElementById('loggedUserLName').innerText = userData.lastName;
        } else {
          console.log("No document found matching user ID");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  } else {
    // If no user is logged in, log this out
    console.log("No user is logged in");
  }
});

// Logout functionality
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
  // Sign out the user and remove their ID from localStorage
  signOut(auth)
    .then(() => {
      // Optionally remove the user data from localStorage if you're using it elsewhere
      localStorage.removeItem('loggedInUserId');  // Clear user data from localStorage
      window.location.href = 'index.html';  // Redirect to login page
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
});
