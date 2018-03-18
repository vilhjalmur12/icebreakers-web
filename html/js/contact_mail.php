<?php
    
$name = $email = "";
    
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["idi_name"];
    $email = $_POST["idi_email"];
}



?>