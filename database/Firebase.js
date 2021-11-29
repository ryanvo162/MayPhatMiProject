import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC16l-Pu_emEcgSu5t2RXNMZOXGoxBHko0",
    authDomain: "mayphatmiproject.firebaseapp.com",
    databaseURL: "https://mayphatmiproject-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mayphatmiproject",
    storageBucket: "mayphatmiproject.appspot.com",
    messagingSenderId: "902382966711",
    appId: "1:902382966711:web:6317a1ea9a76e2c275fa32",
    measurementId: "G-2MMH1ZF3ZR"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
