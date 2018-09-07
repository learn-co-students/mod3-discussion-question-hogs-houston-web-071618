/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/
const buttonThingRenameMeLater = document.getElementById("")
function delayedFadeOut(div, range) {
  // Your solution here
  // debugger
  setTimeout(function(){
    return fadeOut(div)
  }, range);

}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout(() => fadeIn(div), range);
}
//el is the image, group is Array of stuff
function fadeAllOut(el, group) {
  // Your solution here
  let fadeCounter = 0;
  // debugger;
  group.forEach(div => {
    delayedFadeOut(div, fadeCounter)
    fadeCounter += 333;
  })
}

function fadeAllIn(group) {
  // Your solution here
  let fadeCounter = FADEDURATION + 333;
  group.forEach(div => {
    delayedFadeIn(div, fadeCounter)
    fadeCounter += 333;
  })
}
