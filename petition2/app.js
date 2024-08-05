document.querySelector('.petition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('submit-petition.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for signing the petition!');
        // Update the signature count or any other UI elements as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
