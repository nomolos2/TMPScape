

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

function imageChanger (url) {
  let main = document.getElementById('main');
  main.src = url
}

function smileyFace(){
  let main = document.getElementById('main');
  alert('hi')
  if (main.src.includes("/rightSideView1.jpg")) {
    alert('hi');
    main.src="/camerafiles/travelingLight.jpg"
  }
}
function microscope(){
  let main = document.getElementById('main');
  alert(main.clientHeight)
  if (main.src.includes("/leftSideView2.jpg")) {
    alert('hi');
    main.src="/camerafiles/microScopeCloseUp.jpg"
  }
}

let origHeight = 800, origWidth = 1422,
    scaling = [origWidth, origHeight, origWidth, origHeight],
    microCoords = [676,341,717,448],
    smileyCoords = [440,187,493,234],
    microUnitCoords = microCoords.map((v,i) => v / scaling[i])
    smileyUnitCoords = smileyCoords.map((v,i) => v / scaling[i])

function microFindcoords(imageEl, shapeEl) {
  let newHeight = imageEl.clientHeight,
      newWidth = imageEl.clientWidth,
      newCoords = [newWidth,newHeight,newWidth,newHeight]
                      .map((v,i) => v * microUnitCoords[i])
  shapeEl.coords = newCoords.join(",")
}
function smileyFindcoords(imageEl, shapeEl) {
  let newHeight = imageEl.clientHeight,
      newWidth = imageEl.clientWidth,
      newCoords = [newWidth,newHeight,newWidth,newHeight]
                      .map((v,i) => v * smileyUnitCoords[i])
  shapeEl.coords = newCoords.join(",")
}
let setMicroCoords = () => microFindcoords(
                        document.getElementById("main"),
                        document.getElementById("microscope-shape"))
let setSmileyCoords = () => microFindcoords(
                          document.getElementById("main"),
                          document.getElementById("smiley"))
window.onload = setMicroCoords
window.onresize = setMicroCoords
window.onload = setSmileyCoords
window.onresize = setSmileyCoords