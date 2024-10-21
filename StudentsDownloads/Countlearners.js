// Import grade data from separate configuration files
import Grade1 from './Grade1.js';
import Grade7 from './Grade7.js'; // Corrected import
import Grade9 from './Grade9.js';
import SBA from './SBA.js';

// Function to calculate total learners
function calculateTotals() {
    const totalGrade1 = Grade1.length;
    const totalGrade7 = Grade7.length;
    const totalGrade9 = Grade9.length;
    const totalSBA = SBA.length;

    const overallTotal = totalGrade1 + totalGrade7 + totalGrade9 + totalSBA;

    // Return the totals in an object
    return {
        overallTotal,
        totalGrade1,
        totalGrade7,
        totalGrade9,
        totalSBA
    };
}

// Toggle functionality using SweetAlert
document.getElementById('toggle-button').addEventListener('click', async function() {
    const totals = calculateTotals();

    const { value: result } = await Swal.fire({
        title: 'Total Learners',
        html: `
        <p>Grade 1 Total: ${totals.totalGrade1} learners</p>
        <p>Grade 7 Total: ${totals.totalGrade7} learners</p>
        <p>Grade 9 Total: ${totals.totalGrade9} learners</p>
        <p>SBA Total: ${totals.totalSBA} learners</p>
        <p>Overall Total: ${totals.overallTotal} learners</p>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Close'
    });
});