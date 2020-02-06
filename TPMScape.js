let previousPage = "./camerafiles/leftSideView2.jpg"

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
    localStorage.setItem("hints", "Goehring|Taliff")
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
  let timeLeft = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if( seconds >= 10){
    demo = document.getElementById("demo")
    demo && (demo.innerHTML = `${minutes}:${seconds}`)
  }
  else{
    document.getElementById("demo").innerHTML = `${minutes}:0${seconds}`
  }
  // If the count down is over, write some text 
  if (timeLeft < 0) {
    clearInterval(x);
    demo = document.getElementById("demo")
    demo && (demo.innerHTML = "expired")
  }
}, 1000);

function imageChanger (url) {
  let main = document.getElementById('main');
  prev()
  main.src = url
}
function microscopeFunction(){
  //debugger
  let video = document.getElementById('video')
  video.style.display="block"
  let input = document.getElementById('input2')
  input.style.display = "block"
  input.innerHTML = "<input id='hidden-box'></input><button onclick='checkAnswer(\"celebration\",celeCorrect,celeWrong,\"hidden-box\")'>SUBMIT ANSWER LOWERCASE PLEASE</button>"
  let disp = document.getElementById("disp")
  disp.style.display = "none"
}
function celeCorrect(){
  statement = document.getElementById('input2')
  statement.style.color="white"
  statement.style.fontSize="30px"
  statement.innerHTML="<input id='hidden-box'></input><button onclick='checkAnswer(\"celebration\",celeCorrect,celeWrong,\"hidden-box\")'>SUBMIT ANSWER LOWERCASE PLEASE</button>"
  video.src="./videos/v2.mp4"
  alert(statement.innerHTML)
}
function celeWrong(){
  let input = document.getElementById('input2')
  input.style.fontSize="30px"
  input.innerHTMl = "Bye"
}
function punnetFunction(){
    punny = document.getElementById("punneter")
    punny.style.display="block"
}
function goehringButton(puzzle){
  let main = document.getElementById('main');
  data = _.find(puzzleData, d => main.src.includes(d.startPage))
  previousPage = main.src

  if(puzzle =='hydro'){
    data = _.find(puzzleData, d => "hydro"==d.puzzle)
    main.src = data.puzzlePage
    data.func()
  }
  else{
    main.src = data.puzzlePage
    data.func()
  }
  
 
  
}


function hydroFunction(){
  let leaves = document.getElementById('leaves')
  leaves.style.display = 'block'
}
let puzzleData = [  
  {
    startPage: "/WindowView4.jpg",
    puzzlePage: "./camerafiles/bloodyCloseUp.jpg",

    puzzle: 'blood',
    page: 'Goehring',
    func:bloodFunction,
    imageid: 'main',
    imageHeight: 800,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'microscope-shape',
    areaCoords: [676, 341, 717, 448],},
  {
    startPage: "/rightSideView1.jpg",
    puzzlePage: "./camerafiles/travelingLight.jpg",

    puzzle: 'travelingLight',
    page: 'Goehring',
    imageid: 'main',
    imageHeight: 800,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'smiley-shape',
    areaCoords: [676, 341, 717, 448],
  },
  {
    startPage: "/frontView3.jpg",
    puzzlePage: "./images/frontView3.jpg",
    func:punnetFunction,
    puzzle: 'punnet',
    page: 'Goehring',
    imageid: 'main',
    imageHeight: 800,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'smiley-shape',
    areaCoords: [676, 341, 717, 448],
  },
  {
    startPage: "/WindowView4.jpg",
    puzzlePage: "./camerafiles/hydroponicCloseup2.jpg",
    func:hydroFunction,
    puzzle: 'hydro',
    page: 'Goehring',
    imageid: 'main',
    imageHeight: 800,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'smiley-shape',
    areaCoords: [676, 341, 717, 448],
  },
  {
    startPage: "/leftSideView2.jpg",
    puzzlePage: "./camerafiles/microScopeCloseUp.jpg",

    puzzle: 'microscope',

    page: 'Goehring',
    imageid: 'main',
    imageHeight: 800,
    func:microscopeFunction,
    imageWidth: 1422,
    scaling: [1422, 800, 1422, 800],
    areaid: 'microscope-shape',
    areaCoords: [676, 341, 717, 448],},

]
function bloodFunction(){
  let dna = document.getElementById('names')
  dna.style.display="block"
}
function coordinateFinder(coordinates, image, affectee){
  let height = image.clientHeight, width = image.clientWidth,
  final = [width, height, width,height]
                      .map((v,i) => v*coordinates[i])
  affectee.coords = final.join(",")
}
function setCoordinates() {
  //let areas = document.querySelectorAll("area")
  //areas.forEach(a => a.onclick = )
  coordinateFinder([(676/1422),(341/800),(717/1422),(448/800)],document.getElementById('main'),document.getElementById('microscope-shape'))
  coordinateFinder([(757/1422),(431/800),(860/1422),(531/800)],document.getElementById('main'),document.getElementById('punnet-shape'))
  coordinateFinder([(440/1422),(187/800),(493/1422),(234/800)],document.getElementById('main'),document.getElementById('smiley-shape'))
  coordinateFinder([(659/1422),(364/800),(710/1422),(396/800)],document.getElementById('main'),document.getElementById('bloody-shape'))
  coordinateFinder([(595/1400),(144/788),(650/1400),(172/788)],document.getElementById('main'),document.getElementById('hydro-shape'))


}
function prev(){
  main = document.getElementById('main')
  main.src=previousPage
  boxes = document.getElementsByClassName('blank')
  Array.from(boxes).forEach(b=>b.style.display="none")
}
let chosen=""
function anagram(text){
  chosen=text
  names = document.getElementById('names')
  names.style.display="none"
  equation = document.getElementById('equation')
  equation.style.display="inline-block"
  statement = document.getElementById('statement')
  statement.innerHTML = 
  `<label for="anainp">${text} = </label>
  <input name="anainp" class='inputter'></input><button>SUMBIT ANSWER</button>`
  startShuffle(text)


}
function microCorrect(){
  statement = document.getElementById('statement')
  statement.innerHTML="Congratulations, Now Figure Out What That Means"
}
function microWrong(){
    statement = document.getElementById('statement')
    text = statement.innerHTML
    statement.innerHTML=`<label for="anainp"> You Messed Up = </label><input name="anainp" id='inputter'></input><button onclick="checkAnswer('microscope',microCorrect,microWrong,inputter)SUBMIT ANSWER</button>`
    interval = 10
    setTimeout(function(){
      startShuffle(chosen);;
  }, 2000); 

}
function checkAnswer(checker,nextFunction,nextFailure,from){

  statement = document.getElementById('statement')
  answer = document.getElementById(from)
  if (answer.value == checker){
    nextFunction()
  }  
  else{
    nextFailure()
  }  
  }
function startShuffle(text) {
  let shuffleCount = 10
  let intervalId = setInterval(
    function (){
      let phrase = Array.from(text)
      let newPhrase = _.shuffle(phrase) 
      newPhrase = newPhrase.join('')
      statement.innerHTML = 
      `<label for="anainp">${newPhrase} = </label>
      <input name="anainp" id='inputter'></input><button onclick="checkAnswer('microscope',microCorrect,microWrong,'inputter')">SUBMIT ANSWER</button>`
      
      shuffleCount = shuffleCount - 1
      if (shuffleCount <= 0){
        clearInterval(intervalId)
      }
    }, 300)
}
document.body.onload = setCoordinates
document.body.onresize = setCoordinates

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
window.onresize = setCoords

class Foo {
  constructor(x) {
    this.foo = x
  }
  getx() {
    return this.foo
  }
}
*/
