const Grade9 = [
    {
        title: "Jane Doe",
        type: "SBA",
        category: "Grade 9",
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
        type: "SBA",
        category: "Grade 9",
        size: "1.2 MB",
        date: "2007-04-10", // Assuming this is the date of birth
        icon: "headphones",
        age: "",
        urls: [
            "https://example.com/document_9.pdf"
        ],
        downloadCode: "pass123"
    },
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
