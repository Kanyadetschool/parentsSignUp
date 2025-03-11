import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBk2UH2YIoh-Zk260kNADIhs8z7MS4djqo",
    authDomain: "kanyadet-school-parents.firebaseapp.com",
    projectId: "kanyadet-school-parents",
    storageBucket: "kanyadet-school-parents.firebasestorage.app",
    messagingSenderId: "580191712043",
    appId: "1:580191712043:web:900056732e744884fc0b6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
