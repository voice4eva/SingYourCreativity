/*
	AUTHOR: SYLVESTER KLIROWSKI
	GITHUB: https://github.com/voice4eva/
*/

(function($) {
    // validate form entries
    $("#eventRegForm").validator().on("submit", function(event) {
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
        var date = $("#datepicker").val();
        var email = $("#email").val();
        var phone = $("#phone").val();

        $.ajax({
            type: "POST",
            url: "php/form-process.php",
            data: "message=" + message + "&name=" + name + "&date=" + date + "&email=" + email + "&phone=" + phone,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                    sendConfEmail(name, date, email, message, phone);
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#eventRegForm")[0].reset();
        submitMSG(true, "Thank you. We sent a confirmation to your email address. (Check the spam folder if you don't see it in your inbox)");
    }

    function formError() {
        $("#eventRegForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
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

    function sendConfEmail(name, date, email, message, phone){
      $.ajax({
          type: "POST",
          url: "php/registration-conf-email.php",
          data: "name=" + name + "&date=" + date + "&email=" + email + "&message=" + message + "&phone=" + phone
      });
    }

    /* Datepicker */
    $(function() {

        var daysToDisable = [0, 1, 2, 4, 5, 6, 7];

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
