<?php

$errorMSG = "";
$fromEMAIL = "info@singyourcreativity.com";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Le nom est requis";
} else {
    $name = $_POST["name"];
}

// DATE
$date = $_POST["date"];


// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email est requis";
} else {
    $email = $_POST["email"];
}

// PHONE
$phone = $_POST["phone"];


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Un message est requis";
} else {
    $message = $_POST["message"];
}

$EmailTo = "klirowski.s@gmail.com, klirowska.e@gmail.com";
$Subject = "SYC Contact Message";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Date: ";
$Body .= $date;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$fromEMAIL);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "passed";
}else{
    if($errorMSG == ""){
        echo "Quelque chose s'est mal passé :(";
    } else {
        echo $errorMSG;
    }
}

?>
