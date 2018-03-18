<?php
$mailTo = 'yourmail@yourmal.com';
$name = htmlspecialchars($_POST['idi_name']);
$mailFrom = htmlspecialchars($_POST['idi_mail']);

$PAX = htmlspecialchars($_POST['idi_PAX']);
$location = htmlspecialchars($_POST['idi_location']);

$subject = 'Event inquire';
$message_text = htmlspecialchars($_POST['idi_text']);
$message =  'From: '.$name.'; Email: '.$mailFrom.' ; Guests: '.$PAX.' ; Location: '.$location.' ; Message: '.$message_text;
$headers .= 'From:' . $mailFrom . '\r\n';
mail($mailTo, $subject, $message, $headers);
?>