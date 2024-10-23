const Grade9 = [
   
    // Add more resources for Grade 9 here
];

// Function to calculate age based on date of birth
function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Update the age in each student object
Grade9.forEach(student => {
    student.age = calculateAge(student.date);
});

// Exporting the updated Grade9 array
export default Grade9;

console.log(Grade9); // For debugging purposes to see the updated array
