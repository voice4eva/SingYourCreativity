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
        var name = $("#name").val();
        var date = $("#datepicker").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "../php/form-process.php",
            data: "name=" + name + "&date=" + date + "&email=" + email + "&message=" + message,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                    sendConfEmail(name, date, email, message);
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Your message has been submitted! Thank you. We will be touch shortly.")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "alert alert-success text-center tada animated col-sm-10 col-sm-offset-2";
        } else {
            var msgClasses = "alert alert-danger text-center tada animated col-sm-10 col-sm-offset-2";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    function sendConfEmail(name, date, email, message){
      $.ajax({
          type: "POST",
          url: "../php/conf-email.php",
          data: "name=" + name + "&date=" + date + "&email=" + email + "&message=" + message,
          success: function(text) {
              if (text == "pass") {
                  console.log("email send succeeded");
              } else {
                  console.log("email send failed");
              }
          }
      });
    }

    /* Datepicker */
    $(function() {

        var daysToDisable = [0, 2, 4, 5, 6, 7];

        $("#datepicker").datepicker({
            beforeShowDay: function(date) {
                var day = date.getDay();
                for (i = 0; i < daysToDisable.length; i++) {
                    if ($.inArray(day, daysToDisable) != -1) {
                        return [false];
                    }
                }
                return [true];
            }
        });
    });
})(jQuery);
