import { auth } from './js/firebase-config.js';
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const googleProvider = new GoogleAuthProvider();

document.getElementById('googleSignIn').addEventListener('click', () => {
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            showUserInfo(user);
            startRedirectCountdown();
        })
        .catch((error) => {
            console.error("Error during sign in:", error);
        });
});

function showUserInfo(user) {
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('user-name').textContent = user.displayName;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('googleSignIn').style.display = 'none';
}

function startRedirectCountdown() {
    let seconds = 4;
    const countdownElement = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        seconds--;
        countdownElement.textContent = `Redirecting in ${seconds} seconds...`;
        
        if (seconds <= 0) {
            clearInterval(interval);
            window.location.href = 'index.html';
        }
    }, 1000);
}

// Check if user is already signed in
auth.onAuthStateChanged((user) => {
    if (user) {
        showUserInfo(user);
        startRedirectCountdown();
    }
});

// Update logout handler
function initializeLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            auth.signOut().then(() => {
                console.log('User signed out');
                window.location.href = 'Login.html';
            }).catch((error) => {
                console.error('Error signing out:', error);
            });
        });
    }
}

// Initialize logout handler when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLogout);
} else {
    initializeLogout();
}
