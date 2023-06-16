// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD87dn4Nb-FQ8eo-Mj0-4mOSYjCQns2zeA",
    authDomain: "jackan-f7100.firebaseapp.com",
    databaseURL: "https://jackan-f7100-default-rtdb.firebaseio.com",
    projectId: "jackan-f7100",
    storageBucket: "jackan-f7100.appspot.com",
    messagingSenderId: "677584601589",
    appId: "1:677584601589:web:76152cef2d7cf43e93e0bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


database.ref('users/'+'people').set({
    name:'zack ma ali',

})