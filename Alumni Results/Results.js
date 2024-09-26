const openPopupBtns = document.querySelectorAll('.openPopupBtn');  // Select all buttons with class openPopupBtn
const dataArrays = {
  Grade8: {
    title: 'Grade 8 Past Papers',  // Add a title for this array
    years: [
      { year: '2024', terms: [
        { term: 'Term 2', exams: ['Mathematics', 'Mathematics 2', 'Mathematics 3'] },
      ]},
    ],
    files: {
      'Mathematics': '2024 Mathematics pener.pdf',
      'Mathematics 2': '2024 Mathematics pener.pdf',
      'Final': '2022_final.pdf'
    }
  },
  Grade7: {
    title: 'Grade 7 Past Papers',  // Add a title for this array
    years: [
      { year: '2021', terms: [
          { term: 'Term 1', exams: ['Midterm', 'Final'] },
          { term: 'Term 2', exams: ['Midterm', 'Final'] }
        ]
      },
      { year: '2022', terms: [
          { term: 'Term 1', exams: ['Midterm', 'Final'] },
          { term: 'Term 2', exams: ['Midterm', 'Final'] }
        ]
      }
    ],
    files: {
      'Midterm': '2023_midterm.pdf',
      'Final': '2023_final.pdf'
    }
  }
};

let currentDataArray = null;  // Store the current data array for the active button

openPopupBtns.forEach(button => {
  button.addEventListener('click', function () {
    const arrayKey = this.getAttribute('data-array');
    currentDataArray = dataArrays[arrayKey];  // Get the corresponding data array
    openSwalPopup();  // Trigger SweetAlert2 popup
  });
});

// Open SweetAlert2 popup with dynamic dropdowns
function openSwalPopup() {
  Swal.fire({
    title: currentDataArray.title,  // Dynamic title based on the data array's title
    html: `
      <select id="yearSelect" class="swal2-select">
        <option value="" disabled selected>Select a year</option>
        ${currentDataArray.years.map(year => `<option value="${year.year}" data-terms='${JSON.stringify(year.terms)}'>${year.year}</option>`).join('')}
      </select>
      <select id="termSelect" class="swal2-select" style="display:none;">
        <option value="" disabled selected>Select a term</option>
      </select>
      <select id="examSelect" class="swal2-select" style="display:none;">
        <option value="" disabled selected>Select an exam type</option>
      </select>
    `,
    showCancelButton: false,
    confirmButtonText: 'Download',
    preConfirm: () => {
      const examSelect = document.getElementById('examSelect');
      const selectedExam = examSelect.value;

      if (!selectedExam) {
        Swal.showValidationMessage('Please select an exam type');
        return false;
      }

      // Show confirmation for the selected exam before download
      return Swal.fire({
        title: 'Confirm Download',
        text: `You are about to download: ${selectedExam} paper. Do you want to proceed?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, download it!',
        cancelButtonText: 'No, cancel'
      }).then(result => {
        if (result.isConfirmed) {
          const fileToDownload = currentDataArray.files[selectedExam];
          if (fileToDownload) {
            // Initiate download of the selected file
            const link = document.createElement('a');
            link.href = fileToDownload;
            link.download = fileToDownload;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            Swal.showValidationMessage('File not found for the selected exam');
          }
        }
        return false;  // Prevent the popup from closing automatically
      });
    }
  });

  // Handle the dynamic dropdown changes
  document.getElementById('yearSelect').addEventListener('change', function () {
    const selectedYear = this.options[this.selectedIndex];
    const terms = JSON.parse(selectedYear.getAttribute('data-terms'));
    populateTermDropdown(terms);
    document.getElementById('termSelect').style.display = 'block';  // Show the term dropdown
  });

  document.getElementById('termSelect').addEventListener('change', function () {
    const selectedTerm = this.options[this.selectedIndex];
    const exams = JSON.parse(selectedTerm.getAttribute('data-exams'));
    populateExamDropdown(exams);
    document.getElementById('examSelect').style.display = 'block';  // Show the exam dropdown
  });
}

// Populate the "Select Term" dropdown
function populateTermDropdown(terms) {
  const termSelect = document.getElementById('termSelect');
  termSelect.innerHTML = '<option value="" disabled selected>Select a term</option>';
  terms.forEach(termObj => {
    const option = document.createElement('option');
    option.value = termObj.term;
    option.textContent = termObj.term;
    option.setAttribute('data-exams', JSON.stringify(termObj.exams));
    termSelect.appendChild(option);
  });
}

// Populate the "Select Exam Type" dropdown
function populateExamDropdown(exams) {
  const examSelect = document.getElementById('examSelect');
  examSelect.innerHTML = '<option value="" disabled selected>Select an exam type</option>';
  exams.forEach(exam => {
    const option = document.createElement('option');
    option.value = exam;
    option.textContent = exam;
    examSelect.appendChild(option);
  });
}
