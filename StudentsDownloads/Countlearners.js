// Import grade data from separate configuration files
import Grade1 from './Grade1.js';
import Grade2 from './Grade2.js';
import Grade3 from './Grade3.js';
import Grade4 from './Grade4.js';
import Grade5 from './Grade5.js';
import Grade6 from './Grade6.js';
import Grade7 from './Grade7.js'; // Corrected import
import Grade8 from './Grade8.js';
import Grade9 from './Grade9.js';
import SBA from './SBA.js';

// Function to calculate total learners
function calculateTotals() {
    const totalGrade1 = Grade1.length;
    const totalGrade2 = Grade2.length;
    const totalGrade3 = Grade3.length;
    const totalGrade4 = Grade4.length;
    const totalGrade5 = Grade5.length;
    const totalGrade6 = Grade6.length;
    const totalGrade7 = Grade7.length;
    const totalGrade8 = Grade8.length;
    const totalGrade9 = Grade9.length;
    const totalSBA = SBA.length;

    const overallTotal = totalGrade1 +totalGrade2 + totalGrade3 + totalGrade4 + totalGrade5  +totalGrade6 + totalGrade7 + totalGrade8 + totalGrade9 + totalSBA;

    // Return the totals in an object
    return {
        overallTotal,
        totalGrade1,
        totalGrade2,
        totalGrade3,
        totalGrade4,
        totalGrade5,
        totalGrade6,
        totalGrade7,
        totalGrade8,
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
        <p>🥯 Grade 1 Total: ${totals.totalGrade1} learners</p>
        <p>🥯 Grade 2 Total: ${totals.totalGrade2} learners</p>
        <p>🥯 Grade 3 Total: ${totals.totalGrade3} learners</p>
        <p>🥯 Grade 4 Total: ${totals.totalGrade4} learners</p>
        <p>🥯 Grade 5 Total: ${totals.totalGrade5} learners</p>
        <p>🥯 Grade 6 Total: ${totals.totalGrade6} learners</p>
        <p>🥯 Grade 7 Total: ${totals.totalGrade7} learners</p>
        <p>🥯 Grade 8 Total: ${totals.totalGrade8} learners</p>
        <p>🥯 Grade 9 Total: ${totals.totalGrade9} learners</p>
        <p>🥯 SBA Total: ${totals.totalSBA} learners</p>
        <p>🥯 Overall Total: ${totals.overallTotal} learners</p>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Close'
    });
});