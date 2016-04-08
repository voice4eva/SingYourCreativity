$("#contactForm").validator().on("submit", function (event) {
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


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Your message has been submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "alert alert-success text-center tada animated col-sm-10 col-sm-offset-2";
    } else {
        var msgClasses = "alert alert-danger text-center tada animated col-sm-10 col-sm-offset-2";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

// switch portfolio images with video
function switchPortfObj() {
  //hide all videos and show all images
  $("div[id*='pBox_alt']" ).addClass("hidden");
  $("div[id*='pBox_main']" ).removeClass("hidden");
  // hide the clicked image
  $(this).addClass('hidden');
  // set a var to pass as id of corresponding video
  var tempId = $(this).attr('id').toString().replace("pBox_main", "#pBox_alt");
  // show video
  $(tempId).removeClass('hidden');
}
$( ".portfolio-box" ).on( "click", switchPortfObj );
