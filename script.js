// JavaScript Code

// Event listener for the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value; // Get the name value
    const email = document.getElementById('email').value; // Get the email value
    const message = document.getElementById('message').value; // Get the message value

    const feedback = document.getElementById('feedback'); // Get the feedback element
    feedback.classList.remove('hidden'); // Show the feedback message
    feedback.textContent = 'Your message has been sent successfully!'; // Set feedback text

    console.log(`Email to creator: Name: ${name}, Email: ${email}, Message: ${message}`); // Log the submitted values

    document.getElementById('contact-form').reset(); // Reset the form fields

    setTimeout(function() {
        feedback.classList.add('hidden'); // Hide the feedback message after 5 seconds
    }, 5000);
});

// Function to toggle visibility of sections
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section'); // Get all section elements
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden'); // Show the selected section
            setTimeout(() => {
                section.style.opacity = '1'; // Make the selected section fully visible
            }, 0);
        } else {
            section.style.opacity = '0'; // Hide other sections
            setTimeout(() => {
                section.classList.add('hidden'); // Add hidden class to other sections
            }, 0);
        }
    });
}
