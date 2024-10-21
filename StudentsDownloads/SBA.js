const SBA = [
    {
        title: "Jane Doe",
        type: "cba",
        category: "SBA",
        size: "1.2 MB",
        date: "2024-04-10",
        icon: "file-text",
        age:"",
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
SBA.forEach(student => {
    student.age = calculateAge(student.date);
});

// Exporting the updated SBA array
export default SBA;

console.log(SBA); // For debugging purposes to see the updated array
