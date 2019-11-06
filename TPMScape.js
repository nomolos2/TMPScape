let myVideo = document.getElementById("player");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

function establishHints() {
    localStorage.setItem("hints", "Conley|Goehring|Taliff|Porch")
  }
  window.curHint = ""

function getHint() {
  let hints = localStorage.getItem('hints').split(/\|/)
  if (hints.length == 0)
    throw new Error("out of hints")
  
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

