let auth0 = null;

// Initialize Auth0 client
const initAuth0 = async () => {
    auth0 = await createAuth0Client({
        domain: "dev-glxfyfbedo8ukc2v.us.auth0.com", // Your Auth0 domain
        client_id: "2XOYAwhUhPrlOlOaj1vkqaYCdWDHzTLm" // Your Auth0 client ID
    });
};

// Check if the user is authenticated and display the appropriate content
const checkAuthentication = async () => {
    // Initialize Auth0 client
    await initAuth0();

    // Check if the user is authenticated
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        // If authenticated, show the protected content
        document.getElementById('protected-content').style.display = 'block';
    } else {
        // If not authenticated, show the unauthorized message
        document.getElementById('unauthorized-message').style.display = 'block';
    }
};

// Run the authentication check when the page loads
window.onload = () => {
    checkAuthentication();
};