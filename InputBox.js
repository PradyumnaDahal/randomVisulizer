var generator;
function showBlumBlum(){
  document.getElementById("inputBoxId").style.visibility = "visible";
  document.getElementById("inputSecondsBlock").style.display = "flex";
  document.getElementById("inputNumber1Block").style.display = "flex";
  document.getElementById("inputNumber2Block").style.display = "flex";
  document.getElementById("inputSeedBlock").style.display = "flex";
  document.getElementById("inputMaximumBlock").style.display = "flex";
  document.getElementById("inputMinimumBlock").style.display = "flex";
  document.getElementById("inputTimesBlock").style.display = "flex";
  generator = "blum";
}
function hideInputBox(){
  document.getElementById("inputBoxId").style.visibility = "hidden";
}
//
function showJavaRandom(){
  document.getElementById("inputBoxId").style.visibility = "visible";
  document.getElementById("inputSecondsBlock").style.display = "flex";
  document.getElementById("inputNumber1Block").style.display = "none";
  document.getElementById("inputNumber2Block").style.display = "none";
  document.getElementById("inputSeedBlock").style.display = "none";
  document.getElementById("inputMaximumBlock").style.display = "flex";
  document.getElementById("inputMinimumBlock").style.display = "flex";
  document.getElementById("inputTimesBlock").style.display = "flex";
  generator = "javascript";
}
