// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHME2jOJamwChjvMAfWOS7MC03vHuewE0",
  authDomain: "private-route-d9316.firebaseapp.com",
  projectId: "private-route-d9316",
  storageBucket: "private-route-d9316.firebasestorage.app",
  messagingSenderId: "483676869928",
  appId: "1:483676869928:web:7f5b4caaf56506560a6c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;