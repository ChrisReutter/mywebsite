<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message =$_POST['message'];

$email_from ='christian.reutter@yahoo.com';
// Website E-Mail - erst nach Domain Registrierung
$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "User Message: $message.\n";
$to ="christian.reutter@yahoo.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

$secretKey = "6LcdP-UUAAAAAJ-ypFP4hB5aCOkkQ9bOgXlhbvsa";
$responseKey = $_POST['g-recaptcha-response'];
$UserIP = $_SERVER['REMOTE_ADDR'];
$url = "https://www.google.com/recaptcha/api/siteverify?secret="$secretKey&response=$responseKey&remoteip=$UserIP";

$response = file_get_contents($url);
$response = json_decode($response);

if ($response->success)
{
    mail($to,$email_body,$headers);
    header("Location: index.html");
    echo "Nachricht erfolgreich übermittelt";
}

else
{
    echo "Nachricht nicht versandt";
};

?>