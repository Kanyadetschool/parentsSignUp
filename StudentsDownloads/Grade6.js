const Grade6 = [
    {
        title: "Jane Doe",
        type: "grade 6",
        category: "Grade 6",
        size: "1.2 MB",
        date: "2005-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "https://example.com/document_9.pdf"
        ],
        downloadCode: "pass123"
    },
    {
        title: "TEST",
        type: "grade 6",
        category: "Grade 6",
        size: "1.2 MB",
        date: "2007-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "https://example.com/document_9.pdf"
        ],
        downloadCode: "pass123"
    },
    // Add more resources for Grade 6 here
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
Grade6.forEach(student => {
    student.age = calculateAge(student.date);
});

// Exporting the updated Grade6 array
export default Grade6;

console.log(Grade6); // For debugging purposes to see the updated array
