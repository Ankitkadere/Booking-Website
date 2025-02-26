// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAcMpWDStktk6IRwJjPBQ0exKTCMYENQ-c",
  authDomain: "room-booking-9dcf1.firebaseapp.com",
  projectId: "room-booking-9dcf1",
  storageBucket: "room-booking-9dcf1.appspot.com",
  messagingSenderId: "603961601605",
  appId: "1:603961601605:web:c3a0530829de90605ebd2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Check Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    loadUserData(user.uid);
  } else {
    
    window.location.href = "Dahsboard.html"; // Redirect to login
  }
});

// Load User Data from Firestore
async function loadUserData(userId) {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = value || "N/A";
        }
      };

      // First Set of Fields
      setText("email", userData.email);
      setText("firstName", userData.firstName);
      setText("lastName", userData.lastName);
      setText("userID", userData.id);
      setText("fullName", userData.name);
      setText("phone", userData.phone);
      setText("address", userData.address);
      setText("state", userData.state);
      setText("gender", userData.gender);
      setText("roomType", userData.roomType);
      setText("floor", userData.floor);
      setText("paymentMethod", userData.paymentMethod);
      setText("roomPrice", userData.roomPrice);
      setText(
        "amenities",
        Array.isArray(userData.amenities)
          ? userData.amenities.join(", ")
          : "N/A"
      );
    } else {
      console.log("User data not found.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Logout Function
document.getElementById("logout").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      
      window.location.href = "index.html"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Logout Error:", error);
    });
});
