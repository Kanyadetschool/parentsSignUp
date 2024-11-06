let deferredPrompt;

// Time constants
const REMINDER_DELAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const ACKNOWLEDGE_EXPIRY = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
const REMINDER_KEY = 'installPromptReminder';
const ACKNOWLEDGED_KEY = 'installPromptAcknowledged';
const ACKNOWLEDGE_TIMESTAMP_KEY = 'installPromptAcknowledgedTimestamp';

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event fired');
  e.preventDefault();
  deferredPrompt = e;
});

function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
}

function isAcknowledgmentExpired() {
  const acknowledgeTimestamp = localStorage.getItem(ACKNOWLEDGE_TIMESTAMP_KEY);
  if (!acknowledgeTimestamp) return true;
  
  const now = Date.now();
  const expiryTime = parseInt(acknowledgeTimestamp) + ACKNOWLEDGE_EXPIRY;
  
  if (now >= expiryTime) {
    // Clear expired acknowledgment
    localStorage.removeItem(ACKNOWLEDGED_KEY);
    localStorage.removeItem(ACKNOWLEDGE_TIMESTAMP_KEY);
    return true;
  }
  
  return false;
}

function shouldShowPrompt() {
  const lastReminder = localStorage.getItem(REMINDER_KEY);
  const acknowledged = localStorage.getItem(ACKNOWLEDGED_KEY);
  const now = Date.now();

  // Check if acknowledgment has expired
  if (acknowledged && isAcknowledgmentExpired()) {
    return true;
  }

  if (!lastReminder || !acknowledged) return true;
  return now - parseInt(lastReminder) >= REMINDER_DELAY;
}

function updateReminderTimestamp() {
  localStorage.setItem(REMINDER_KEY, Date.now().toString());
}

function acknowledgePrompt() {
  localStorage.setItem(ACKNOWLEDGED_KEY, 'true');
  localStorage.setItem(ACKNOWLEDGE_TIMESTAMP_KEY, Date.now().toString());
  updateReminderTimestamp();
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const isInstalled = localStorage.getItem('appInstalled') === 'true' || isAppInstalled();
    
    if (!isInstalled && shouldShowPrompt()) {
      Swal.fire({
        title: 'Install Our App',
        html: `
          <div id="installButtonContainer" >
            <button class="btn" id="installButton">Install App</button>
            <button class="btn btn-secondary" id="remindLaterButton">Remind Me Later</button>
            <button class="btn btn-text" id="acknowledgeButton">Don't Show for 30 Days</button>
          </div>
          <div id="thankYouMessage" style="display: none;">
            Thank you for installing the app!
          </div>
          <button id="shareButton" style="display: none;" class="btn">Share App</button>
        `,
        didOpen: () => {
          console.log('SweetAlert popup opened');
          
          // Install button handler
          document.getElementById('installButton').addEventListener('click', () => {
            console.log('Install button clicked');
            if (deferredPrompt) {
              deferredPrompt.prompt();
              deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the install prompt');
                  Swal.update({
                    title: 'App Installed Successfully',
                  });
                  document.getElementById('installButtonContainer').style.display = 'none';
                  document.getElementById('thankYouMessage').style.display = 'block';
                  document.getElementById('shareButton').style.display = 'block';
                  localStorage.setItem('appInstalled', 'true');
                } else {
                  console.log('User dismissed the install prompt');
                  updateReminderTimestamp(); // Set reminder for later
                }
                deferredPrompt = null;
              });
            } else {
              console.error('Installation prompt is not available.');
            }
          });

          // Remind Later button handler
          document.getElementById('remindLaterButton').addEventListener('click', () => {
            updateReminderTimestamp();
            Swal.close();
          });

          // Acknowledge button handler
          document.getElementById('acknowledgeButton').addEventListener('click', () => {
            acknowledgePrompt();
            Swal.close();
          });

          // Share button handler
          document.getElementById('shareButton').addEventListener('click', () => {
            if (navigator.share) {
              navigator.share({
                title: 'Kanyadet School Official App',
                text: 'Improving Online School Services.🧑‍⚕️!',
                url: window.location.href
              }).then(() => {
                console.log('Shared successfully.');
              }).catch((error) => {
                console.error('Error sharing:', error);
              });
            } else {
              console.error('Sharing not supported.');
            }
          });
        },
        showConfirmButton: false,
      });
    }
  }, 2000);
});