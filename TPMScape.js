

function playPause() {
  var myVideo = document.getElementById("player");
  if (myVideo.paused){
    myVideo.play();
    document.getElementById("audioImg").src="images/volume2.png";
  }
  else
  { myVideo.pause();
   document.getElementById("audioImg").src="images/mute2.png";
}
}

function establishHints() {
    localStorage.setItem("hints", "Conley|Goehring|Taliff|Porch")
}

window.curHint = ""
function getHint() {
  let hints = localStorage.getItem('hints')

  if (!hints || !hints.length) {
    hints = establishHints()
  }

  hints = hints.split(/\|/)
  hints = _.shuffle(hints)
  hint = hints.pop()
  localStorage.setItem("hints", hints.join('|'))
  window.curHint = hint
  return(hint)
}

function chooseHint(){
  let hint = getHint()
  alert(`hi ${hint}`)
}

function checkHint(name){
  debugger
  if (curHint == name){
    window.location.href = `${name}Page.html`;
  }
  else{
    window.location.href = "errorPage.html";
  }

}
// Set the date we're counting down to
var countDownDate = Date.now() + 600000

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `${minutes}:${seconds}`
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
