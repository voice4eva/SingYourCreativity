$("#eventRegFormFR").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Avez-vous rempli le formulaire correctement?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var message = $("#message").val();
    var name = $("#name").val();
    var date = $("#datepicker").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    $.ajax({
        type: "POST",
        url: "php/form-process-fr.php",
        data: "message=" + message + "&name=" + name + "&date=" + date + "&email=" + email + "&phone=" + phone,
        success : function(text){
            if (text == "passed"){
                formSuccess();
                sendConfEmail(name, date, email, message, phone);
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#eventRegFormFR")[0].reset();
    submitMSG(true, "Merci. Nous avons envoyé une confirmation à votre adresse e-mail. (Vérifiez le dossier spam si vous ne le voyez pas dans votre boîte de réception)");
}

function formError(){
    $("#eventRegFormFR").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "alert alert-success text-center col-sm-10 col-sm-offset-2";
    } else {
        var msgClasses = "alert alert-danger text-center col-sm-10 col-sm-offset-2";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function sendConfEmail(name, date, email, message, phone){
  $.ajax({
      type: "POST",
      url: "php/registration-conf-email-fr.php",
      data: "name=" + name + "&date=" + date + "&email=" + email + "&message=" + message + "&phone=" + phone
  });
}

/* Datepicker */
$( function() {
  var daysToDisable = [0, 1, 2, 4, 5, 6, 7];

  $("#datepicker").datepicker({beforeShowDay: function(date){
    var day = date.getDay();
    for (i = 0; i < daysToDisable.length; i++) {
        if ($.inArray(day, daysToDisable) != -1) {
            return [false];
        }
    }
    return [true];
  }});
});
