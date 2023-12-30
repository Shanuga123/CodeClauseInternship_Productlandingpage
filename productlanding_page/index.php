<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the email from the form
    $email = $_POST["email"];

    // Validate the email (you might want to add more validation)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address";
        
    } else {
        // Process the subscription (save to a database, send confirmation email, etc.)
        // For now, we'll just echo the email
        echo "Subscribed successfully! Email: " . $email;
    }
} else {
    // If the form is not submitted, redirect to the form page
    header("Location: index.html");
    exit();
}
?>
