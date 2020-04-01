
let coords_dict = {
  /*
  'microscope-shape': [(676/1422),(341/800),(717/1422),(448/800)],
  'punnet-shape'    : [(757/1422),(431/800),(860/1422),(531/800)],
  'smiley-shape'    : [(440/1422),(187/800),(493/1422),(234/800)],
  'bloody-shape'    : [(659/1422),(364/800),(710/1422),(396/800)],
  'comp-shape'      : [(242/752),(287/699),(304/752),(317/699)],
  'hydro-shape'     : [(595/1400),(144/788),(650/1400),(172/788)],
  */

  //"microscope-shape": [ 0.475, 0.426, 0.504, 0.56  ],
  //"punnet-shape":     [ 0.532, 0.538, 0.604, 0.663 ],
  //"smiley-shape":     [ 0.309, 0.233, 0.346, 0.292 ],
  //"bloody-shape":     [ 0.463, 0.455, 0.499, 0.495 ],
  //"hydro-shape":      [ 0.425, 0.182, 0.464, 0.218 ],
  //"comp-shape":  [ 0.321, 0.410, 0.404, 0.453 ],
   
  "blue-shape":       [ 0.234, 0.452, 0.327, 0.539 ],
}
/*
function setCoordinatesT(){
  coordinateFinder([(304/752),(287/689),(242/752),(317/689)],document.getElementById('main'),document.getElementById("comp-shape"))
  coordinateFinder([(176/752),(312/689),(246/752),(372/689)],document.getElementById('main'),document.getElementById("blue-shape"))
}
*/


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
    establishHints()
    hints = localStorage.getItem('hints')
  }

  hints = hints.split(/\|/)
  hints = _.shuffle(hints)
  localStorage.setItem("hint", `${hints.pop()}`)
  localStorage.setItem("hints", hints.join('|'))
  window.curHint = localStorage.getItem("hint")
  return(localStorage.getItem("hint"))
}

function chooseHint(){
  let hint = getHint()

  video = document.querySelector('#video')
  
  video.src = `./videos/${hint}.mp4`
  video.requestFullscreen()
  video.style.display = "block"
  video.onended = evt => {
    video = document.querySelector('#video')
    video.webkitExitFullScreen()
    video.style.display = "none"
  }
}

function checkHint(name){
  if (localStorage.getItem('hint') == name){
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
    demo = document.getElementById("demo")
    demo && (document.getElementById("demo").innerHTML = `${minutes}:0${seconds}`)
  }
  // If the count down is over, write some text 
  if (timeLeft < 0) {
    window.location.href = "lose.html";

  }
}, 1000);

function imageChanger (url) {
  let main = document.getElementById('main');
  prev()
  main.src = url
  allowClick()
}/*
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
  /*{
    startPage: "/backTaliff.png",
    puzzlePage: "./images/findTheErrors.png",
  
    puzzle: 'errors',
  
    page: 'Taliff',
    imageid: 'main',
    imageHeight: 778,
    func:errorFunction,
    imageWidth: 1307,
    scaling: [1307, 778, 1307, 778],
    areaid: 'comp-shape',
    areaCoords: [301, 286, 344, 317],},

]*/
document.body.onload = allowClick
pageLinks = {
  "WindowView4.jpg":["hydro-shape","bloody-shape"],
  "leftSideView2.jpg":["microscope-shape"],
  "frontView3.jpg":["punnet-shape"],
  "rightSideView1.jpg":["smiley-shape"],
  "backTaliff.png":["comp-shape"]}
idDic = {"hydro-shape": [hydroFunction,"./camerafiles/hydroponicCloseup2.jpg"],
        "bloody-shape":[bloodFunction,"./camerafiles/bloodyCloseUp.jpg"],
        "microscope-shape" :[microscopeFunction,"./camerafiles/microScopeCloseUp.jpg"],
        "punnet-shape":[punnetFunction,"./images/frontView3.jpg"],
        "smiley-shape": [lightFunction, "./camerafiles/travelingLight.jpg"],
        "error-shape": [errorFunction,"./images/findTheErrors.png"],
        "blue-shape":[insertFunction, "./images/inputErrors.png"]}
allLinks = ["hydro-shape","bloody-shape","microscope-shape","punnet-shape","smiley-shape","comp-shape","blue-shape"]
function goehringButtonOLD(puzzle){
  
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
function clickFunc(clicked){
  main = document.getElementById("main")
  main.src = idDic[clicked][1]
  idDic[clicked][0]()
}
function allowClick(){
  currentPage = document.getElementById('main').src
  section = currentPage.split("/").pop()
  allLinks.map(id => document.getElementById(id)).filter(d => d).forEach(div => div.style.display = "none")
  pageLinks[section].forEach(divTag => makeFront(document.getElementById(divTag)))
}
function makeFront(divLink){
  divLink.style.display = "block";


}


function punnetFunction(){
  let punny = document.getElementById("punneter")
  punny.style.display="block"
  let main = document.getElementById('main'),
  left = (747/1422)*main.clientWidth,
  top = (401/800)*main.clientHeight,
  width= (114/1422)*main.clientWidth,
  height = (1/8) * main.clientHeight
  punny.style.left = `${left}`
  punny.style.top = `${top}`
  punny.style.width = `${width}`
  punny.style.height = `${height}`

}


function hydroFunction(){
let leaves = document.getElementById('leaves')
leaves.style.display = 'block'
}

function bloodFunction(){
let dna = document.getElementById('names')
dna.style.display="block"
}


function microscopeFunction(){

  let video = document.getElementById('video')
  video.style.display="block"
  let input = document.getElementById('input2')
  input.style.display = "block"
  input.innerHTML = "<input onchange='lowercaser(\"hidden-box\")' id='hidden-box'></input><button onclick='checkAnswer(\"extravaganza\",celeCorrect,celeWrong,\"hidden-box\")'>SUBMIT ANSWER LOWERCASE PLEASE</button>"
  let disp = document.getElementById("disp")
  disp.style.display = "none"
}


function prev(){
  main = document.getElementById('main')
  main.src=previousPage
  boxes = document.getElementsByClassName('blank')
  Array.from(boxes).forEach(b=>b.style.display="none")
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
function celeCorrect(){
  
  statement = document.getElementById('input2')
  statement.style.color="white"
  statement.style.fontSize="30px"
  statement.innerHTML="<input  onchange='lowercaser(\"hidden-box\")' id='hidden-box'></input><button onclick='checkAnswer(\"extravaganza\",finalish,finalish,\"hidden-box\")'>SUBMIT ANSWER LOWERCASE PLEASE</button>"
  sta = document.getElementById('higher')
  sta.style.display ="block"
  video.style.display="none"


}
function reappear(){
  let input = document.getElementById('input2')
  input.innerHTML = "<input id='hidden-box'></input><button onclick='checkAnswer(\"extravaganza\",celeCorrect, celeWrong,\"hidden-box\")'>SUBMIT ANSWER LOWERCASE PLEASE</button>"
}
function reappear2(){
  let input = document.querySelector('#input2')
  input.style.display = "block"
}
function celeWrong(){
  
  let input = document.getElementById('input2')
  input.innerHTML="Sorry Try Again"
  input.style.color="white"
  input.style.bottom="0"
  input.style.fontSize="30px"
  input.style.bottom="-2%"
  setTimeout(function(){
    reappear();;
}, 2000); 

}
function finalish(){
  //debugger
  sta = document.querySelector('#higher')
  sta.style.display = "none"

  video = document.getElementById('video')
  video.src = "./videos/v2.MP4"
  video.style.display = "block"
  input2 = document.querySelector('#input2')
  input2.style.display = "none";
  video.onended = evt => { 
    folder = document.querySelector('#folder')
    folder.style.display="block"
    input2 = document.getElementById('input2')
    input2.style.display ="block"
    input2.innerHTML = "<button onclick='moveOn()'>CONGRATS, MOVE ON</button>"
  }
}

function checkAnswer(rightAnswer,nextFunction,nextFailure,from){
  statement = document.getElementById('statement')
  answer = document.getElementById(from)
  if (answer.value == rightAnswer){
    nextFunction()
  }  
  else{
    nextFailure()
  }  
}
function establishTime(){
  localStorage.setItem("time", 0)

}
function moveOn(){

  let time = localStorage.getItem("time")
  if (!time){
    time = establishTime()
  }
  if(time == 0){
    window.location.href = "secondHome.html";
    localStorage.setItem("time", 1)
  }
  else{
    window.location.href = "victory.html"
    localStorage.setItem("time", 0)
  }
  

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
  <input name="anainp" onchange="lowercaser('inputter') id='inputter'></input><button>SUMBIT ANSWER</button>`
  startShuffle(text)


}
function startShuffle(text){
  let shuffleCount = 10
  let intervalId = setInterval(
    function (){
      let phrase = Array.from(text)
      let newPhrase = _.shuffle(phrase) 
      newPhrase = newPhrase.join('')
      statement.innerHTML = 
      `<label for="anainp">${newPhrase} = </label>
      <input onchange="lowercaser('inputter') name="anainp" id='inputter'></input><button onclick="checkAnswer('microscope',microCorrect,microWrong,'inputter')">SUBMIT ANSWER</button>`
      
      shuffleCount = shuffleCount - 1
      if (shuffleCount <= 0){
        clearInterval(intervalId)
      }
    }, 300)
}
function lowercaser(iden){
  text = document.querySelector(`#${iden}`)
  text.value = text.value.toLowerCase()
}
/*
let shapes_to_fix = []
if (document.location.pathname.includes("/TaliffPage.html")){
  shapes_to_fix = ['comp-shape']
}

document.body.onload = setCoordinates
document.body.onresize = setCoordinates  

function coordinateFinderOLD(coordinates, image, affectee)
{
  let height = image.clientHeight, width = image.clientWidth,
  final = [width, height, width, height]
                      .map((v,i) => v*coordinates[i])
  affectee.coords = final.join(",")
}
function coordinateFinder(shape) {
  let el = document.getElementById(shape)
  let image = document.getElementById('main')
  let coordinates = coords_dict[shape]

  let height = image.clientHeight, 
      width = image.clientWidth,
      final = [width, height, width, height].map((v,i) => v*coordinates[i])

  el.coords = final.join(",")
}
function setCoordinates() {
  shapes_to_fix.forEach(shape => coordinateFinder(shape))
  allowClick()
}
  //areas.forEach(a => a.onclick = )
  
  coordinateFinder([(676/1422),(341/800),(717/1422),(448/800)],document.getElementById('main'),document.getElementById('microscope-shape'))
  coordinateFinder([(757/1422),(431/800),(860/1422),(531/800)],document.getElementById('main'),document.getElementById('punnet-shape'))
  coordinateFinder([(440/1422),(187/800),(493/1422),(234/800)],document.getElementById('main'),document.getElementById('smiley-shape'))
  coordinateFinder([(659/1422),(364/800),(710/1422),(396/800)],document.getElementById('main'),document.getElementById('bloody-shape'))
  coordinateFinder([(595/1400),(144/788),(650/1400),(172/788)],document.getElementById('main'),document.getElementById('hydro-shape'))
  */
  /*
  var comp = document.getElementById("comp-shape")
  coordinateFinder([(242/752),(287/699),(304/752),(317/699)],document.getElementById('main'),comp)
  */


function makeNew(){
  establishHints()
  establishTime()
}
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

/*
document.body.addEventListener('mousedown',e => console.log(e.x,e.y)) ==> click on coordinates
outerHeight
outerWidth ==> width and height of window.





function taliffFunction(choice){
  if(choice == 'error' && main.src.includes("backTaliff")){
    puzzlePageT = "./images/findTheErrors.jpg"
    main.src = puzzlePageT
  }
  if(choice == 'insert' && main.src.includes("leftsideTaliff.jpg")){
    puzzlePageT = "./images/inputErrors.png"
    main.src = puzzlePageT
  }
}
*/
function insertFunction(){
  //puzzlePageT = "./images/inputErrors.png"
  //main.src = puzzlePageT
}
function errorFunction(){
  //puzzlePageT = "./images/inputErrors.png"
  //main.src = puzzlePageT
}
function bloodFunction(){
  let dna = document.getElementById('names')
  dna.style.display="block"
  }
function lightFunction(){
  //this is a blank function
}


