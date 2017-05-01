<?php

 $fromEMAIL = "info@singyourcreativity.com";

 // fields
 $name = $_POST["name"];
 $date = $_POST["date"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $message = $_POST["message"];

 $Subject = "Confirmation Email";

 // prepare email body text
 $Body = "Dear ";
 $Body .= $name;
 $Body .= "\n";
 $Body .= "Thank you for registering for SYC event. This is confirmation for the following date: ";
 $Body .= $date;
 $Body .= "\n";
 $Body .= "Additional Information:"
 $Body .= "\n";
 $Body .= "Email: ";
 $Body .= $email;
 $Body .= "\n";
 $Body .= "Message: ";
 $Body .= $message;
 $Body .= "\n";
 $Body .= "Sincerely,";
 $Body .= "\n";
 $Body .= "Sing Your Creativity";

 // send email
 $success = mail($email, $Subject, $Body, "From:".$fromEMAIL);

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
