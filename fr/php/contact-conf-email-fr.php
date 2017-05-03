<?php

 // fields
 $name = $_POST["name"];
 $email = $_POST["email"];
 $phone = $_POST["phone"];
 $message = $_POST["message"];

 // email subject
 $subject = "SYC Contact Confirmation";

 // prepare email body text (import HTML)
 $body = file_get_contents('../templates/contact-conf-email-top-fr.html');
 $body .= $name;
 $body .= ",</p>
 <p>Merci d'avoir contacté Sing Your Creativity. Nous vous contacterons bientôt.</p>
 <p><strong>Vos Coordonnées & Votre Message</strong>
     <br />Nom et Prénom: ";
 $body .= $name;
 $body .= "<br />Message: ";
 $body .= $message;
 $body .= "<br />Email: ";
 $body .= $email;
 $body .= "<br />Téléphone: ";
 $body .= $phone;
 $body .= file_get_contents('../templates/conf-email-bottom-fr.html');

 // Always set content-type when sending HTML email
 $headers = "MIME-Version: 1.0" . "\r\n";
 $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

 // More headers
 $headers .= 'From: <info@singyourcreativity.com>' . "\r\n";

 // send email
 mail($email, $subject, $body, $headers);

?>
