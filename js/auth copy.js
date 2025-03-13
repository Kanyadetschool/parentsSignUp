import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const SESSION_TIMEOUT = 2 * 60 * 60 * 1000; // 2 hours (Google's standard)
const ACTIVITY_KEY = 'lastUserActivity';
const ACTIVITY_CHECK_INTERVAL = 60000; // Check every minute (more efficient)
const SESSION_DURATION_KEY = 'sessionDuration';
const SESSION_START_KEY = 'sessionStartTime';
const USER_SESSION_KEY = 'userSessionTime_';
let activityInterval;
let sessionTimer;

function getUserSessionKey(uid) {
    return USER_SESSION_KEY + uid;
}

function updateActivity() {
    // Only update if the time difference is significant (> 1 minute)
    const currentTime = Date.now();
    const lastActivity = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0');
    if (currentTime - lastActivity > 60000) {
        localStorage.setItem(ACTIVITY_KEY, currentTime.toString());
        localStorage.setItem('activityBroadcast', currentTime.toString());
    }
}

function startActivityMonitoring(uid) {
    updateActivity();
    const startTime = Date.now();
    localStorage.setItem(SESSION_START_KEY, startTime.toString());
    
    // Get user-specific previous duration
    const userSessionKey = getUserSessionKey(uid);
    const previousDuration = parseInt(localStorage.getItem(userSessionKey) || '0');

    // Monitor meaningful user interactions only
    ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach(event => {
        document.addEventListener(event, updateActivity, { passive: true });
    });

    // Listen for activity from other tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'activityBroadcast') {
            localStorage.setItem(ACTIVITY_KEY, e.newValue);
        }
        if (e.key === 'logout') {
            window.location.href = 'https://kanyadet-school-parents.web.app/login.html';
        }
    });

    // Check for inactivity less frequently to improve performance
    activityInterval = setInterval(() => {
        const lastActivity = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0');
        const inactiveTime = Date.now() - lastActivity;
        
        // Update user-specific cumulative duration
        const sessionStart = parseInt(localStorage.getItem(SESSION_START_KEY));
        const currentDuration = previousDuration + (Date.now() - sessionStart);
        localStorage.setItem(userSessionKey, currentDuration.toString());
        
        // Show warning at 1:45 hours of total time
        if (currentDuration > (SESSION_TIMEOUT - (15 * 60 * 1000))) {
            alert(`Your session time is ${Math.round(currentDuration/1000/60)} minutes. It will expire in 15 minutes.`);
        }
        
        if (currentDuration > SESSION_TIMEOUT || inactiveTime > SESSION_TIMEOUT) {
            handleLogout(uid);
        }
    }, ACTIVITY_CHECK_INTERVAL);
}

function stopActivityMonitoring() {
    clearInterval(activityInterval);
    ['mousedown', 'keydown', 'touchstart', 'scroll', 'mousemove'].forEach(event => {
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
    const publicPages = ['https://kanyadet-school-parents.web.app/login.html', 
                        'https://kanyadet-school-parents.web.app/signup.html', 
                        'https://kanyadet-school-parents.web.app/reset.html'];
    const currentFullUrl = window.location.href;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userSessionKey = getUserSessionKey(user.uid);
            if (!localStorage.getItem(userSessionKey)) {
                localStorage.setItem(userSessionKey, '0');
            }
            if (publicPages.some(page => currentFullUrl.includes(page))) {
                window.location.href = 'https://kanyadet-school-parents.web.app/index.html';
                return;
            }
            addLogoutButton();
            startActivityMonitoring(user.uid);
        } else {
            stopActivityMonitoring();
            if (!publicPages.some(page => currentFullUrl.includes(page))) {
                window.location.href = 'https://kanyadet-school-parents.web.app/login.html';
            }
        }
    });
}

window.handleLogout = async function(uid) {
    try {
        stopActivityMonitoring();
        // Don't remove the user's session time on logout
        // Just remove active session markers
        localStorage.removeItem(ACTIVITY_KEY);
        localStorage.removeItem(SESSION_START_KEY);
        localStorage.setItem('logout', Date.now().toString());
        await signOut(auth);
        window.location.href = 'https://kanyadet-school-parents.web.app/login.html';
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// Clean up on page unload
window.addEventListener('unload', () => {
    stopActivityMonitoring();
});
