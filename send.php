<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = htmlspecialchars($_POST['name']);
  $business = htmlspecialchars($_POST['business']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "marielledianebrinas@email.com"; // CHANGE THIS
  $subject = "New Credicare Inquiry";

  $body = "Name: $name\n";
  $body .= "Business: $business\n";
  $body .= "Email: $email\n\n";
  $body .= "Message:\n$message";

  $headers = "From: Credicare <no-reply@yourdomain.com>\r\n";
  $headers .= "Reply-To: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }

  
  $company = $_POST['company'];
$phone = $_POST['phone'];
$purpose = $_POST['purpose'];
$amount = $_POST['amount'];

$body = "Company: $company\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n\n";
$body .= "Purpose: $purpose\n";
$body .= "Amount: $amount\n\n";
$body .= "Message:\n$message";
}
?>