const _inch = 2.54;
const cm = document.querySelectorAll('input')[0]
const inch = document.querySelectorAll('input')[1]
function changeToIn(){
  inch.value = cm.value/_inch
}
function changeToCm(){
  cm.value = inch.value*_inch
}