

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
  if (main.src.includes("/rightSideView1.jpg")) {
    main.src="/camerafiles/travelingLight.jpg"
  }
}
function microscope(){
  let main = document.getElementById('main');
  if (main.src.includes("/leftSideView2.jpg")) {
    main.src="/camerafiles/microScopeCloseUp.jpg"
  }
}
function blood(){
  let main = document.getElementById('main');
  if (main.src.includes("/WindowView4.jpg")) {
    main.src="/camerafiles/bloodyCloseUp.jpg"
  }
}
let imageCoords = [
  {
    page: 'Goehring',
    imageid: 'main',
    imageHeight: 800,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'microscope-shape',
    areaCoords: [676, 341, 717, 448]
  },
  {
    page: 'Goehring',
    imageid: 'main',
    imageHeight: 800,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'microscope-shape',
    areaCoords: [676, 341, 717, 448]
  },

]
function coordinateFinder(coordinates, image, affectee){
  let height = image.clientHeight, width = image.clientWidth,
  final = [width, height, width,height]
                      .map((v,i) => v*coordinates[i])
  affectee.coords = final.join(",")
}
document.body.onload =   () => {coordinateFinder([(676/1422),(341/800),(717/1422),(448/800)],document.getElementById('main'),document.getElementById('microscope-shape'))
  coordinateFinder([(440/1422),(187/800),(493/1422),(234/800)],document.getElementById('main'),document.getElementById('smiley-shape'))
  coordinateFinder([(659/1422),(364/800),(710/1422),(396/800)],document.getElementById('main'),document.getElementById('bloody-shape'))}
document.body.onresize = () => {coordinateFinder([(676/1422),(341/800),(717/1422),(448/800)],document.getElementById('main'),document.getElementById('microscope-shape'))
  coordinateFinder([(440/1422),(187/800),(493/1422),(234/800)],document.getElementById('main'),document.getElementById('smiley-shape'))
  coordinateFinder([(659/1422),(366/800),(730/1422),(406/800)],document.getElementById('main'),document.getElementById('bloody-shape'))}

  /*
let origHeight = 800, origWidth = 1422,
    scaling = [origWidth, origHeight, origWidth, origHeight],
    origCoords = [676,341,717,448],
    unitCoords = origCoords.map((v,i) => v / scaling[i])

function getcoords(imageEl, shapeEl) {
  let newHeight = imageEl.clientHeight,
      newWidth = imageEl.clientWidth,
      
  shapeEl.coords = newCoords.join(",")
}

let setCoords = () => getcoords(
                        document.getElementById("main"),
                        document.getElementById("microscope-shape"))

window.onload = setCoords
window.onresize = setCoords*/