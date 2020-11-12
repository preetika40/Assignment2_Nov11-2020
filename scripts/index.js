//for pause button
var c = document.getElementById("pause-btn");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";
ctx.moveTo(15,15);
ctx.lineTo(15,35);
ctx.lineTo(20,35);
ctx.lineTo(20,15);
ctx.lineTo(15,15);
ctx.moveTo(30,15);
ctx.lineTo(30,35);
ctx.lineTo(35,35);
ctx.lineTo(35,15);
ctx.lineTo(30,15);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//for play button
var c = document.getElementById("play-btn");
var ctx = c.getContext("2d");
ctx.moveTo(10,10);
ctx.lineTo(10,40);
ctx.lineTo(45,25);
ctx.lineTo(10,10);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

//for stop button
var c = document.getElementById("stop-btn");
var ctx = c.getContext("2d");
ctx.moveTo(15,15);
ctx.lineTo(15,35);
ctx.lineTo(35,35);
ctx.lineTo(35,15);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//toggle function
function toggle(){
    var hideVideo = document.getElementById("hide-video");
    var showVideo = document.getElementById("show-video");
    var hideContent = document.getElementById("hide-content");
    var showContent = document.getElementById("show-content");
    var toggleBtn = document.getElementById("toggle-btn");

    if (showVideo.style.display === "none" && showContent.style.display === "none"){
        hideVideo.style.display = "none";
        hideContent.style.display = "none";
        showVideo.style.display = "block";
        showContent.style.display = "block";
        toggleBtn.innerHTML = "Hide Content";
    }

    else{
        hideVideo.style.display = "block";
        hideContent.style.display = "block";
        showVideo.style.display = "none";
        showContent.style.display = "none";
        toggleBtn.innerHTML = "Show Content";
    }
}