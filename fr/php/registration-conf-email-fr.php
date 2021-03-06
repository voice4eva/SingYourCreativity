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
 $event = $_POST["event"];
 // $date = $_POST["date"];

 // change message text to a more human-friendly name
 if($event == "ChanterBienEtre"){
   $event = "Chanter ensemble pour son bien-être";
 } elseif ($event == "ChanteTherap") {
   $event = "Cours individuels / Chant thérapeutique";
 }

 // email subject
 $subject = "Confirmation SYC de votre message";

 // prepare email body text (import HTML)
 $body = file_get_contents('../templates/regist-conf-email-top-fr.html');
 $body .= $name;
 $body .= ",</p>
 <p>Merci pour votre inscription à l'événement Sing Your Creativity.</p>
 <p><strong>Votre confirmation d'inscription</strong>
     <br />Nom de l'événement: ";
 $body .= $event;
 // $body .= "<br />Date de l'événement: ";
 // $body .= $date;
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
