// Get the modal
var modal = document.getElementById('sycModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// reset iframe src to stop playing videos function
function resetIframe() {
  $("#modalVideoTAL").children().attr('src','https://www.youtube.com/embed/Ii19TxBraQM');
  $("#modalVideoObjectives").children().attr('src','https://www.youtube.com/embed/sibICXCrtsM');
  $("#modalVideoStructure").children().attr('src','https://www.youtube.com/embed/F0_XxqxwDeY');
  $("#modalVideoTALFR").children().attr('src','https://www.youtube.com/embed/oxHiN9g6RUM');
  $("#modalVideoSYCSessionMontheyEN").children().attr('src','https://www.youtube.com/embed/H7ZWpCYm9kk');
  $("#modalVideoSYCSessionMorginsEN").children().attr('src','https://www.youtube.com/embed/7JIPQg8iBcM');
  $("#modalVideoSYCSessionMontheyFR").children().attr('src','https://www.youtube.com/embed/T-1ykui5Z3E');
  $("#modalVideoSYCSessionMorginsFR").children().attr('src','https://www.youtube.com/embed/Gh1dKyGYpuI');
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    resetIframe();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetIframe();
    }
}

/* ----------------------
switch modal videos
---------------------- */

function switchVideos() {
  // hide all videos
  $("div[id*='modalVideo']").addClass('hidden');
  // hide all images
  $("div[id*='modalGalleryImg']").addClass('hidden');
  // set modal style of display to block
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
$("div[id*='pBox']").on("click", switchVideos);
$("#takeALookBtn" ).on("click", switchVideos);
$("#takeALookBtnFR" ).on("click", switchVideos);

/* ----------------------
switch modal team members
---------------------- */
function switchTeamMembers() {
  // hide all member info
  $("div[id*='modalTeamMem']").addClass('hidden');

  // set modal style of display to block
  modal.style.display = "block";

  // convert item id to string
  var tempId = $(this).attr('id').toString();

  // check what item was clicked and assign the id of corresponding video
  if (tempId.indexOf("teamMem") >= 0) {
    var replaceId = tempId.replace("teamMem", "#modalTeamMem");
  }

  // show memebr info
  $(replaceId).removeClass('hidden');
}
$("div[id*='teamMem']").on("click", switchTeamMembers);

/* ----------------------
switch images in gallery
---------------------- */
function switchGalleryImages() {
  // hide all videos
  $("div[id*='modalVideo']").addClass('hidden');
  // hide all images
  $("div[id*='modalGalleryImg']").addClass('hidden');

  // set modal style of display to block
  modal.style.display = "block";

  // convert item id to string
  var tempId = $(this).attr('id').toString();

  // check what item was clicked and assign the id of corresponding video
  if (tempId.indexOf("galleryImg") >= 0) {
    var replaceId = tempId.replace("galleryImg", "#modalGalleryImg");
  }

  // show memebr info
  $(replaceId).removeClass('hidden');
}
$("img[id*='galleryImg']").on("click", switchGalleryImages);
