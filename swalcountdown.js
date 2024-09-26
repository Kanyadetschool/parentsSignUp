
// <div id="TimeUpdater"  class="animate__animated animate__zoomInRight" >
             
// <div id="TimeUpdater-days">0 D</div>
// <div id="TimeUpdater-hours">0 Hrs</div>
// <div id="TimeUpdater-minutes">0 Min</div>
// <div id="TimeUpdater-seconds">0 Sec</div>
// </div><br>



// Set the target date for the countdown (Day, Month - 1 (January is 0), Year, Hour, Minute, Second)
const targetDate = new Date("Sept 30, 2024 23:59:59").getTime();

// Countdown timer function
const countdownTimer = setInterval(function() {

    // Get the current time
    const now = new Date().getTime();

    // Calculate the time difference between now and the target date
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the respective divs
    document.getElementById("TimeUpdater-days").innerHTML = days + " Days";
    document.getElementById("TimeUpdater-hours").innerHTML = hours + " Hrs";
    document.getElementById("TimeUpdater-minutes").innerHTML = minutes + " Min";
    document.getElementById("TimeUpdater-seconds").innerHTML = seconds + " Sec";

    // Make the countdown appear after 3 seconds, then hide it after 2 seconds
    setTimeout(() => {
        const timeUpdater = document.getElementById("TimeUpdater");
        timeUpdater.classList.add("show"); // Show the timer
        
        // Hide after 2 seconds
        const hideTimeout = setTimeout(() => {
            if (!timeUpdater.matches(':hover')) { // Check if not hovered
                timeUpdater.classList.remove("show"); // Hide after 2 seconds
            }
        }, 8000);

        // Add event listeners to clear the hide timeout on hover
        timeUpdater.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout); // Clear the hide timeout if hovered
        });
        
        timeUpdater.addEventListener('mouseleave', () => {
            // Start the hide timeout again if mouse leaves
            setTimeout(() => {
                timeUpdater.classList.remove("show"); // Hide after 2 seconds
            }, 5000);
        });
    }, 4000); // Show after 4 seconds

    // If the countdown is finished, display a message
    if (timeLeft <1) {
        clearInterval(countdownTimer);
        document.getElementById("TimeUpdater").innerHTML = "The event has passed!";
    }
}, 1000);
