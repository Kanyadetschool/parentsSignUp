// Function to show SweetAlert after delay
function showDelayedSweetAlert() {
  // Check if notification has been shown recently
  const lastShown = localStorage.getItem('lastShown');
  const now = Date.now();

  // Check for the 6-hour and 24-hour options
  const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
  const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  if (lastShown) {
    const elapsedTime = now - lastShown;

    // If the notification was shown within the last 6 or 24 hours, exit
    if (elapsedTime < sixHours) {
      return; // Don't show the notification if within 6 hours
    }
    if (elapsedTime < twentyFourHours) {
      return; // Don't show the notification if within 24 hours
    }
  }

  // Show the SweetAlert notification with checkboxes
  Swal.fire({
    title: '🔕Notification!🧑‍⚕️',
    html: `
      KNEC School Based Assessment will start in <br><br>
 <div id="TimeUpdater"  class="animate__animated animate__zoomInRight" >
             
                    <div id="TimeUpdater-days">0 D</div>
                    <div id="TimeUpdater-hours">0 Hrs</div>
                    <div id="TimeUpdater-minutes">0 Min</div>
                    <div id="TimeUpdater-seconds">0 Sec</div>
                  </div>

      We would like to inform you about the upcoming written test schedule for different <b>Grades</b>.
      Please find the details below:<br><br>
      <strong>Grade 3</strong><br>
      Written Tests Begin: 30th September 2024<br>
      Last Date to Upload Scores: 24th October 2024<br> 
      <hr><strong>Subjects</strong>:<hr><br>
      <div class="subjects">
        1. Mathematics<br>
        2. English<br>
      </div><br>
      <strong>Grade 4 and Grade 5</strong><br>
      Written Tests Begin: 30th September 2024<br>
      Last Date to Upload Scores: 24th October 2024<br>
      <strong>Subjects</strong>:<br><br>
      <div class="subjects">
        1. Mathematics<br>
        2. English<br>
        3. Kiswahili<br>
        4. Kenya Sign Language<br>
        5. Agriculture & Nutrition<br>
        6. Science & Technology<br>
        7. Social Studies<br>
        8. Religious Education<br>
        9. Creative Arts & Sports<br>
      </div> <br>
      <strong>Grade 7</strong><br>
      Written Tests Begin: 30th September 2024<br>
      Last Date to Upload Scores: 24th October 2024<br>
      <strong>Subjects</strong>:<br>
      <div class="subjects">
        1. Mathematics<br>
        2. English<br>
        3. Kiswahili<br>
        4. Kenya Sign Language<br>
        5. Social Studies<br>
        6. CRE/IRE/HRE<br>
        7. Integrated Science<br>
        8. Creative Arts & Sports<br>
        9. Pre-Technical<br>
      </div> <br>
      <strong>Grade 8</strong><br>
      Written Tests Begin: 30th September 2024<br>
      Last Date to Upload Scores: 24th October 2024<br>
      <strong>Subjects</strong>:<br>
      <div class="subjects">
        1. Mathematics<br>
        2. English<br>
        3. Kiswahili<br>
        4. Kenya Sign Language<br>
        5. CRE/IRE/HRE<br>
        6. Integrated Science<br>
        7. Creative Arts & Sports<br>
        8. Pre-Technical<br>
      </div>
      We encourage you to kindly help your learners for these assessments. Should you have any questions or need further information, please do not hesitate to contact the Examination Dept. <br><br>
      <strong>Tags</strong>
      <div class="tags">
        <a href="#"></a>
        <a href="#" target="_blank"> </a>
      </div>
      <br>
      <label>
        <input type="checkbox" id="checkbox-6hrs">
        Snooze for 1 hour
      </label><br>
      <label>
        <input type="checkbox" id="checkbox-24hrs">
        Ignore for for 24 hours
      </label>
    `,
    footer: '&copy; Examination Office | 2024',
    confirmButtonText: 'OK',
    preConfirm: () => {
      // Save the last shown time
      localStorage.setItem('lastShown', Date.now());

      // Check if the checkboxes are checked
      const hideFor6Hours = document.getElementById('checkbox-6hrs').checked;
      const hideFor24Hours = document.getElementById('checkbox-24hrs').checked;

      if (hideFor6Hours) {
        localStorage.setItem('lastShown', Date.now() - (1 * 60 * 60 * 1000)); // 6 hours ago
      }

      if (hideFor24Hours) {
        localStorage.setItem('lastShown', Date.now() - (24 * 60 * 60 * 1000)); // 24 hours ago
      }
    }
  });
}

// Call the function after 2500 milliseconds (2.5 seconds)
setTimeout(showDelayedSweetAlert, 2500);
