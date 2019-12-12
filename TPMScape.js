

function playPause() {
  let myVideo = document.getElementById("player");
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
  if (curHint == name){
    window.location.href = `${name}Page.html`;
  }
  else{
    window.location.href = "errorPage.html";
  }

}
// Set the date we're counting down to
let countDownDate = Date.now() + 600000

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if( seconds >= 10){
    demo = document.getElementById("demo")
    demo && (demo.innerHTML = `${minutes}:${seconds}`)
  }
  else{
    document.getElementById("demo").innerHTML = `${minutes}:0${seconds}`
  }
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    demo = document.getElementById("demo")
    demo && (demo.innerHTML = "expired")
  }
}, 1000);

function leftImageChanger() {
  let ground = document.getElementsByTagName("body")[0];
  let image = document.getElementById("corner1");
  // ground.style.backgroundImage = './images/mute2.png'
   if(image.src === "http://127.0.0.1:8080/images/mute2.png")
     image.src="./images/TPMSBuilding.png";
   else
      image.src="./images/mute2.png"
}
