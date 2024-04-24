import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPcXLfEClOeJQeTDB4nDmfzO9eW-ednmM",
    authDomain: "restaurantradar-94824.firebaseapp.com",
    projectId: "restaurantradar-94824",
    storageBucket: "restaurantradar-94824.appspot.com",
    messagingSenderId: "405444063764",
    appId: "1:405444063764:web:ebd6f2bf35966cd1ad6d01"
  };  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }