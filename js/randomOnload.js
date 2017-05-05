window.onload = function getYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("copyright").innerHTML = "&copy; "+ n + " Sing Your Creativity";
}
