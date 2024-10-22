import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9i6WxY6wiUJoiVmJhDvkDAbVrTwQkqgw",
    authDomain: "discord-clone-react-a6612.firebaseapp.com",
    projectId: "discord-clone-react-a6612",
    storageBucket: "discord-clone-react-a6612.appspot.com",
    messagingSenderId: "402594770021",
    appId: "1:402594770021:web:ad68f80e2753a137e36a8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
