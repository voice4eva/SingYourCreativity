(function($) {
    // validate form entries
    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        // Initiate Variables With Form Content
        var message = $("#message").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();

        $.ajax({
            type: "POST",
            url: "../php/form-process.php",
            data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                    sendConfEmail(message, name, email, phone);
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Thank you for your message. We sent a confirmation to your email address. (Check the spam folder is you don't see it in your inbox)");
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "alert alert-success text-center col-sm-10 col-sm-offset-2";
        } else {
            var msgClasses = "alert alert-danger text-center col-sm-10 col-sm-offset-2";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    function sendConfEmail(message, name, email, phone){
      $.ajax({
          type: "POST",
          url: "../php/contact-conf-email.php",
          data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
      });
    }

})(jQuery);
