// Function to show SweetAlert after delay
function showDelayedSweetAlert() {
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

    Dear Parent/Guardian,<br><br>
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
        7. Intergrated Science<br>
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
        6. Intergrated Science<br>
        7. Creative Arts & Sports<br>
        8. Pre-Technical<br>
    </div>

    We encourage you to help your child prepare for these assessments. Should you have any questions or need further information, please do not hesitate to contact us.<br><br>
    <strong>Tags</strong><br>
     <div class="tags">
      </a> <a href="#"></a>
      </a> <a href="#" target="_blank" > </a>
  </div>
    `,
    footer: '&copy; Examination Office | 2024 ',
    confirmButtonText: 'OK',
   // allowOutsideClick:false,
  });
}

// Call the function after 2000 milliseconds (2 seconds)
setTimeout(showDelayedSweetAlert, 2000);
