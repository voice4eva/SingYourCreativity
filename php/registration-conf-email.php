<?php

 // fields
 $name = $_POST["name"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $message = $_POST["message"];
 $date = $_POST["date"];

 // change message text to a more human-friendly name
 if($message == "SingWellBeing"){
   $message = "Singing for Your Well Being";
 }

 // email subject
 $subject = "SYC Contact Confirmation";

 // prepare email body text (import HTML)
 $body = file_get_contents('../templates/regist-conf-email-top.html');
 $body .= $name;
 $body .= ",</p>
 <p>Thank you for registering for a Sing Your Creativity event.</p>
 <p><strong>Your Registration Confirmation</strong>
     <br />Event Name: ";
 $body .= $message;
 $body .= "<br />Event Date: ";
 $body .= $date;
 $body .= "<br />Email: ";
 $body .= $email;
 $body .= "<br />Phone: ";
 $body .= $phone;
 $body .= file_get_contents('../templates/conf-email-bottom.html');

 // Always set content-type when sending HTML email
 $headers = "MIME-Version: 1.0" . "\r\n";
 $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

 // More headers
 $headers .= 'From: <info@singyourcreativity.com>' . "\r\n";

 // send email
 mail($email, $subject, $body, $headers);

?>
