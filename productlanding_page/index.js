
function submitForm() {
    var form = document.getElementById("newsletterForm");
    var email = form.email.value;
    var resultMessage = document.getElementById("resultMessage");

    if (isValidEmail(email)) {
        resultMessage.innerHTML = "Submitting..."; // Display a loading message

        // Simulate form submission delay (replace this with your actual submission logic)
        setTimeout(function() {
            resultMessage.innerHTML = "Mail sent!"; // Display success message
        }, 2000); 
    } else {
        resultMessage.innerHTML = "Invalid email address";
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
