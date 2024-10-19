 // Global variable to hold the Auth0 client instance
 let auth0 = null;

 // Initialize Auth0 client
 const initAuth0 = async () => {
   auth0 = await createAuth0Client({
     domain: "dev-glxfyfbedo8ukc2v.us.auth0.com",
     client_id: "2XOYAwhUhPrlOlOaj1vkqaYCdWDHzTLm"
   });
 };

 // Handle login
 const login = async () => {
   await auth0.loginWithRedirect({
     redirect_uri: window.location.origin
   });
 };

 // Handle logout
 const logout = () => {
   auth0.logout({
     returnTo: window.location.origin
   });
 };

 // Handle authentication redirect and user information display
 const handleRedirect = async () => {
   const query = window.location.search;

   // Check if the user is coming back from the Auth0 redirect
   if (query.includes("code=") && query.includes("state=")) {
     await auth0.handleRedirectCallback();
     window.history.replaceState({}, document.title, window.location.pathname); // Clean the URL
   }

   // Get the user's authentication state
   const isAuthenticated = await auth0.isAuthenticated();

   if (isAuthenticated) {
     // Show the logout button and user information
     document.getElementById("logout-btn").style.display = "block";
     document.getElementById("user-info").style.display = "block";

     // Hide the login button
     document.getElementById("login-btn").style.display = "none";

     // Get the user's profile information
     const user = await auth0.getUser();
     document.getElementById("user-data").textContent = JSON.stringify(user, null, 2);
   } else {
     // Show the login button
     document.getElementById("login-btn").style.display = "block";

     // Hide the logout button and user information
     document.getElementById("logout-btn").style.display = "none";
     document.getElementById("user-info").style.display = "none";
   }
 };

 // Initialize Auth0 and handle redirect when the page loads
 window.onload = async () => {
   await initAuth0();
   await handleRedirect();
 };

 // Add event listeners for login and logout buttons
 document.getElementById("login-btn").addEventListener("click", login);
 document.getElementById("logout-btn").addEventListener("click", logout);