const Grade2 = [
    {
        title: "Coming soon",
        type: "grade 2",
        category: "Grade 2",
        size: "1.2 MB",
        date: "2005-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "../Docs/Grade-3-4-and-5-SBAs.pdf",
            "../Docs/Revised Learning Areas.pdf"
        ],
        downloadCode: "2024"
    },
   
    // Add more resources for Grade 2 here
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
Grade2.forEach(student => {
    student.age = calculateAge(student.date);
});

// Exporting the updated Grade2 array
export default Grade2;

console.log(Grade2); // For debugging purposes to see the updated array
