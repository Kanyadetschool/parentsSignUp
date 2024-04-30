
    // Function to show SweetAlert after delay
    function showDelayedSweetAlert() {
      Swal.fire({
        title: 'Urgent Update!',
        text: 'KNEC School Based Assessments is set to start with practicals as from May 1st, 2024 for Grade 3 to Grade 5. Junior school {Grade 7 and 8} from 1st July 2024.This evaluation endeavor encompasses students from grade 3 to Grade 8, with the exception of Grade 6. ',
       footer:' &copy Examination office | 2024',
        confirmButtonText: 'OK'
      });
    }

    // Call the function after 2000 milliseconds (2 seconds)
    setTimeout(showDelayedSweetAlert, 2000);