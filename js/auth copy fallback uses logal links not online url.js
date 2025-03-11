import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const ACTIVITY_KEY = 'lastUserActivity';
const ACTIVITY_SYNC_INTERVAL = 1000; // Sync every second
const ACTIVITY_CHECK_INTERVAL = 1000; // Check every second
let activityInterval;
let syncInterval;

function updateActivity() {
    const timestamp = Date.now().toString();
    localStorage.setItem(ACTIVITY_KEY, timestamp);
    // Broadcast activity to other tabs
    localStorage.setItem('activityBroadcast', timestamp);
}

function startActivityMonitoring() {
    updateActivity();

    // Monitor current tab activity
    ['mousedown', 'keydown', 'touchstart', 'scroll', 'mousemove'].forEach(event => {
        document.addEventListener(event, updateActivity);
    });

    // Listen for activity from other tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'activityBroadcast') {
            localStorage.setItem(ACTIVITY_KEY, e.newValue);
        }
        if (e.key === 'logout') {
            window.location.href = 'login.html';
        }
    });

    // Check for inactivity across all tabs
    activityInterval = setInterval(() => {
        const lastActivity = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0');
        const inactive = Date.now() - lastActivity > SESSION_TIMEOUT;
        
        if (inactive) {
            handleLogout();
        }
    }, ACTIVITY_CHECK_INTERVAL);
}

function stopActivityMonitoring() {
    clearInterval(activityInterval);
    ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach(event => {
        document.removeEventListener(event, updateActivity);
    });
}

function addLogoutButton() {
    const header = document.createElement('div');
    header.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
            <button onclick="handleLogout()" 
                style="padding: 10px 20px; 
                       background: linear-gradient(90deg, #182c59, #ff1cac);
                       color: white; 
                       border: none; 
                       border-radius: 10px; 
                       cursor: pointer;
                       font-family: 'Poppins', sans-serif;
                       font-size: 16px;
                       box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}

function startSessionTimer() {
    clearTimeout(sessionTimer);
    sessionTimer = setTimeout(() => {
        handleLogout();
    }, SESSION_TIMEOUT);
}

function resetSessionTimer() {
    startSessionTimer();
}

export function initAuth() {
    const publicPages = ['/login.html', '/signup.html', '/reset.html'];
    const currentPage = window.location.pathname;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (publicPages.some(page => currentPage.endsWith(page))) {
                window.location.href = 'index.html';
                return;
            }
            addLogoutButton();
            startActivityMonitoring();
        } else {
            stopActivityMonitoring();
            if (!publicPages.some(page => currentPage.endsWith(page))) {
                window.location.href = 'login.html';
            }
        }
    });
}

window.handleLogout = async function() {
    try {
        stopActivityMonitoring();
        localStorage.removeItem(ACTIVITY_KEY);
        localStorage.setItem('logout', Date.now().toString());
        await signOut(auth);
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// Clean up on page unload
window.addEventListener('unload', () => {
    stopActivityMonitoring();
});
