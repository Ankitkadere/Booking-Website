// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
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

function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}
const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;

  const id = document.getElementById("id").value;
  const roomType = document.getElementById("type").value;
  const name = document.getElementById("Name").value;
  const phone = document.getElementById("Number").value;
  const address = document.getElementById("Address").value;
  const state = document.getElementById("State").value;
  const gender = document.getElementById("Gender").value;
  const floor = document.getElementById("Floor").value;
  const paymentMethod = document.getElementById("Payment").value;
  const roomPrice = document.getElementById("RoomPrice").value;

  // Get selected amenities
  const amenities = [];
  if (document.getElementById("wifi").checked) amenities.push("WiFi");
  if (document.getElementById("kitchen").checked) amenities.push("Kitchen");
  if (document.getElementById("Ebill").checked) amenities.push("Electricity");
  if (document.getElementById("furniture").checked) amenities.push("Furniture");

   
  // Booking data object

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        id: id,
        roomType: roomType,
        name: name,
        phone: phone,
        address: address,
        state: state,
        gender: gender,
        floor: floor,
        paymentMethod: paymentMethod,
        amenities: amenities,
        roomPrice: roomPrice,
        timestamp: new Date(),
      };
      showMessage("Account Created Successfully", "signUpMessage");
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "Dahsboard.html";
        })
        .catch((error) => {
          console.error("error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage");
      } else {
        showMessage("unable to create User", "signUpMessage");
      }
    });
});

const signIn = document.getElementById("submitSignIn");
signIn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("login is successful", "signInMessage");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "Dahsboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage("Account does not Exist", "signInMessage");
      }
    });
});
