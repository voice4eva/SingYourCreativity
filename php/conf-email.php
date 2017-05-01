<?php

 $fromEMAIL = "info@singyourcreativity.com";

 // fields
 $name = $_POST["name"];
 $date = $_POST["date"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $message = $_POST["message"];

 $EmailTo = "klirowski.s@gmail.com";
 $Subject = "Confirmation Email";

 // prepare email body text
 $Body = "<html><body><h1>Confirmation Email</h1><p>Dear ";
 $Body .= $name;
 $Body .= "</br>Thank you for registering for SYC. This is confirmation for the following date: ";
 $Body .= $date;
 $Body .= "</br>";
 $Body .= "Your info and message:</br>Email: ";
 $Body .= $email;
 $Body .= "</br>";
 $Body .= "Phone: ";
 $Body .= $phone;
 $Body .= "</br>";
 $Body .= "Message: ";
 $Body .= $message;
 $Body .= "</p></body></html>";

 // send email
 $success = mail($EmailTo, $Subject, $Body, "From:".$fromEMAIL);

 // redirect to success page
 if ($success && $errorMSG == ""){
    echo "pass";
 }else{
     if($errorMSG == ""){
         echo "fail";
     } else {
         echo $errorMSG;
     }
 }
?>
