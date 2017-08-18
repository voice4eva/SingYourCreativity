<?php
  /*
    AUTHOR: SYLVESTER KLIROWSKI
    GITHUB: https://github.com/voice4eva/
  */

 // fields
 $name = $_POST["name"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $message = $_POST["message"];

 // email subject
 $subject = "SYC Contact Confirmation";

 // prepare email body text (import HTML)
 $body = file_get_contents('../templates/contact-conf-email-top.html');
 $body .= $name;
 $body .= ",</p>
 <p>Thank you for contacting Sing Your Creativity. We will be in touch with you shortly.</p>
 <p><strong>Your Contact Info & Message</strong>
     <br />Name: ";
 $body .= $name;
 $body .= "<br />Message: ";
 $body .= $message;
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
