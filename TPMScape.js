

function playPause() {
  var myVideo = document.getElementById("player");
  if (myVideo.paused){
    myVideo.play();
    document.getElementById("audioImg").src="images/volume2.png";
  }
  else
  { myVideo.pause();
   document.getElementById("audioImg").src="images/offVolume.png";
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

document.getElementById('timer').innerHTML=003 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
