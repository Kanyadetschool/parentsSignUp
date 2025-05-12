// Precomputed SHA-256 hash of the correct password 'kaka'
const correctPasswordHash = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';

// Function to hash a string using SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Password prompt function
function showPasswordPrompt() {
    Swal.fire({
        title: 'Enter correction Key',
        input: 'password',
        inputPlaceholder: 'Enter editing Key',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        allowOutsideClick: false,
        allowEscapeKey: false,
        preConfirm: async (input) => {
            const hashedInput = await hashPassword(input);
            if (hashedInput !== correctPasswordHash) {
                Swal.showValidationMessage('Incorrect password! Please try again.');
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Automatically begin update process without asking
            Swal.fire({
                title: 'Validating Your password',
                text: 'Please wait',
                icon: 'info',
                showConfirmButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false
            });

            setTimeout(function () {
                Swal.fire({
                    title: '✅ Access granted',
                    text: 'Welcome onboard',
                    icon: 'warning',
                    timer: 2000, // Auto close after 3 seconds
                    showConfirmButton: false,
                    timerProgressBar: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false
                });
            }, 1000); // Simulated update duration (1 second)
        } else {
            // Cancel or wrong password
            Swal.fire({
                title: 'Access Denied',
                text: 'You do not have enough permission.',
                icon: 'warning',
                showCancelButton: false,
                cancelButtonText: 'Close', // Option to cancel and log out
                confirmButtonText: 'Try Again',
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then((accessResult) => {
                if (accessResult.isConfirmed) {
                    showPasswordPrompt(); // Retry password prompt
                } else {
                    // Option 1: Show a custom message or redirect
                    Swal.fire({
                        title: 'Session Terminated',
                        text: 'Please refresh or contact ICT department for access.',
                        icon: 'warning',
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    });

                    // Option 2: Redirect to a custom access-denied page
                    // window.location.href = 'https://yourdomain.com/access-denied.html';

                    // Option 3: Close the window if opened via script
                    window.close(); 
                }
            });
        }
    });
}

// Call the function to show the initial password prompt
showPasswordPrompt();
