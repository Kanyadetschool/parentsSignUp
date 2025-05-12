import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBk2UH2YIoh-Zk260kNADIhs8z7MS4djqo",
    authDomain: "kanyadet-school-parents.firebaseapp.com",
    projectId: "kanyadet-school-parents",
    storageBucket: "kanyadet-school-parents.firebasestorage.app",
    messagingSenderId: "580191712043",
    appId: "1:580191712043:web:900056732e744884fc0b6e",
    databaseURL: "https://kanyadet-school-parents-default-rtdb.firebaseio.com"  // Added databaseURL
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();
const db = getFirestore(app);
const database = getDatabase(app);  // Initialize Realtime Database

export { auth, db, database };
export default { auth, db, database };  // Add this line to include a default export
