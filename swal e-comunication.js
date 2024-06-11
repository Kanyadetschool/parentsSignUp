document.addEventListener('DOMContentLoaded', function() {
    // Define your data array with href links
    const dataArray = [
        { text: 'School Based assessment 2024', url: '#' },
        { text: 'School Advert', url: 'https://my.visme.co/view/z4rq0eo1-new-project#s1' },
        { text: '', url: '#' }
    ];

    // Function to generate HTML content for SweetAlert
    function generateHtmlContent(data) {
        return data.map(item => `<a href="${item.url}" target="_blank">${item.text}</a>`).join('<br><br>');
    }

    // Select the link with class 'linkswal'
    const eCommunicationsLink = document.querySelector('.linkswal');

    // Add click event listener to the link
    eCommunicationsLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Generate the HTML content from data array
        const htmlContent = generateHtmlContent(dataArray);

        // Display SweetAlert pop-up with clickable links
        Swal.fire({
            title: 'New Updates 01.0.2024!',
            html: htmlContent,
            // icon: 'info',
            confirmButtonText: 'OK'
        });
    });
});
