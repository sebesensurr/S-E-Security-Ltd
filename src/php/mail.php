<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$to = "clive@sandesecurity.co.uk";
$subject = "Message from the website";
$headers = "From: " . $name . " < " . $email . " >";

mail($to,$subject,$message,$headers);
?>