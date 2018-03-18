<?php
    
$name = $_POST["idi_name"];
$email = $_POST["idi_email"];
$message = $_POST["idi_text"];
$admin_mail = "admin@icebreakersofmixology.com";


mail($admin_mail, "From: " . $name, $message, "Email: " . $email);

?>