/**
 * Password Toggle - A lightweight, global script for adding show/hide functionality to password fields
 * 
 * This script:
 * - Automatically finds all password fields on a page
 * - Adds a toggle button next to each
 * - Handles show/hide functionality
 * - Maintains accessibility
 * - Works dynamically for password fields added later
 */

(function() {
    // Configuration options (easily customizable)
    const config = {
      showIconClass: 'password-show-icon',
      hideIconClass: 'password-hide-icon',
      toggleButtonClass: 'password-toggle-btn',
      passwordInputSelector: 'input[type="password"]',
      showPasswordIcon: '👁️', // Can be replaced with custom SVG or icon
      hidePasswordIcon: '👁️‍🗨️', // Can be replaced with custom SVG or icon
      toggleButtonAriaLabel: 'Toggle password visibility',
      observeNewElements: true, // Set to true to detect dynamically added password fields
    };
  
    // Style for toggle button
    const style = document.createElement('style');
    style.textContent = `
      .${config.toggleButtonClass} {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
      }
      
      input[type="password"], 
      input[data-original-type="password"] {
        padding-right: 40px;
      }
      
      .password-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
  
    // Initialize password toggle functionality
    function initPasswordToggles() {
      const passwordInputs = document.querySelectorAll(config.passwordInputSelector);
      passwordInputs.forEach(setupPasswordToggle);
    }
  
    // Setup toggle for a specific password input
    function setupPasswordToggle(passwordInput) {
      // Skip if already processed
      if (passwordInput.dataset.passwordToggleInitialized === 'true') {
        return;
      }
      
      // Mark as processed
      passwordInput.dataset.passwordToggleInitialized = 'true';
      
      // Create wrapper if parent is not already one
      let wrapper;
      if (!passwordInput.parentElement.classList.contains('password-wrapper')) {
        wrapper = document.createElement('div');
        wrapper.className = 'password-wrapper';
        
        // Insert wrapper before the input in the DOM
        passwordInput.parentNode.insertBefore(wrapper, passwordInput);
        
        // Move input into wrapper
        wrapper.appendChild(passwordInput);
      } else {
        wrapper = passwordInput.parentElement;
      }
      
      // Create toggle button
      const toggleButton = document.createElement('button');
      toggleButton.type = 'button';
      toggleButton.className = config.toggleButtonClass;
      toggleButton.setAttribute('aria-label', config.toggleButtonAriaLabel);
      toggleButton.innerHTML = config.showPasswordIcon;
      toggleButton.classList.add(config.showIconClass);
      
      // Add toggle button to wrapper
      wrapper.appendChild(toggleButton);
      
      // Add click event to toggle button
      toggleButton.addEventListener('click', function() {
        const isPassword = passwordInput.type === 'password';
        
        // Toggle password visibility
        if (isPassword) {
          passwordInput.type = 'text';
          passwordInput.dataset.originalType = 'password';
          toggleButton.innerHTML = config.hidePasswordIcon;
          toggleButton.classList.remove(config.showIconClass);
          toggleButton.classList.add(config.hideIconClass);
        } else {
          passwordInput.type = 'password';
          toggleButton.innerHTML = config.showPasswordIcon;
          toggleButton.classList.remove(config.hideIconClass);
          toggleButton.classList.add(config.showIconClass);
        }
        
        // Focus on input after toggle
        passwordInput.focus();
      });
    }
  
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPasswordToggles);
    } else {
      initPasswordToggles();
    }
    
    // Optional: Monitor DOM for dynamically added password fields
    if (config.observeNewElements) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function(node) {
              // Check if the added node is an element
              if (node.nodeType === Node.ELEMENT_NODE) {
                // Check if the node itself is a password input
                if (node.matches && node.matches(config.passwordInputSelector)) {
                  setupPasswordToggle(node);
                }
                
                // Check if the node contains password inputs
                const passwordInputs = node.querySelectorAll ? 
                  node.querySelectorAll(config.passwordInputSelector) : [];
                
                passwordInputs.forEach(setupPasswordToggle);
              }
            });
          }
        });
      });
      
      // Start observing document body for dynamic content changes
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    
    // Expose API for manual initialization (useful for frameworks)
    window.PasswordToggle = {
      init: initPasswordToggles,
      setup: setupPasswordToggle
    };
  })();