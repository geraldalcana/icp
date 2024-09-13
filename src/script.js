document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert with the form data
    alert(`Thank you, ${name}! We have received your message.\n\nEmail: ${email}\nMessage: ${message}`);
    
    // Optionally, you can clear the form fields here
    document.getElementById('contactForm').reset();
});
