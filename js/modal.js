// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// switch modal videos
function switchVideos() {
  // hide all videos
  $("div[id*='modalVideo']").addClass('hidden');
  
  // set modal style of display
  modal.style.display = "block";

  // convert item id to string
  var tempId = $(this).attr('id').toString();

  // check what item was clicked and assign the id of corresponding video
  if (tempId.indexOf("pBox") >= 0) {
    var replaceId = tempId.replace("pBox", "#modalVideo");
  }
  else if (tempId.indexOf("takeALookBtn") >= 0){
    var replaceId =tempId.replace("takeALookBtn", "#modalVideoTAL");
  }

  // show video
  $(replaceId).removeClass('hidden');
}
$( ".portfolio-box" ).on( "click", switchVideos );
$( "#takeALookBtn" ).on( "click", switchVideos );
