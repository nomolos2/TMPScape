

function playPause() {
  var myVideo = document.getElementById("player");
  if (myVideo.paused){
    myVideo.play();
    document.getElementById("audioImg").src="images/volume.png";
  }
  else
  { myVideo.pause();
   document.getElementById("audioImg").src="images/offVolume.png"
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

