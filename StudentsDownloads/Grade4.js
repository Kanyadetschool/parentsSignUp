const Grade4 = [
    {
        title: "Jane Doe",
        type: "grade 4",
        category: "Grade 4",
        size: "1.2 MB",
        AssessmentNo:"",
        date: "2005-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "https://example.com/document_9.pdf"
        ],
        downloadCode: "pass123"
    },
    {
        title: "TEST 4",
        type: "grade 4",
        category: "Grade 4",
        size: "1.2 MB",
        date: "2007-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "https://example.com/document_9.pdf"
        ],
        downloadCode: "pass123"
    },
    {
        title: "TEST 4",
        type: "grade 4",
        category: "Grade 4",
        size: "1.2 MB",
        date: "2007-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "https://example.com/document_9.pdf"
        ],
        downloadCode: "pass123"
    },
    // Add more resources for Grade 4 here
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
Grade4.forEach(student => {
    student.age = calculateAge(student.date);
});

// Exporting the updated Grade4 array
export default Grade4;

console.log(Grade4); // For debugging purposes to see the updated array
