var histo;
var animatedArray;
var seconds = 8;
var list;

function changeHistogram(array){
  document.getElementById("test").innerHTML = array;

  list = removeDuplicates(array).sort(function(a, b){return a-b});

  histo = new Array(list.length).fill(0); //creates clear arry length of unique numbers

  for (i =0; i < array.length; i++){
    histo[list.indexOf(array[i])] += 1; //find how many of each unique number

  }

  var mostused = 0;
  for (i = 0; i < histo.length; i++){
    if(histo[i]>histo[mostused]){
      mostused = i; //find most used unique number to divide by to use % to show animation
    }
  }
  var denominator = histo[mostused]/.9; //Used to make the highest 90%

  animatedArray = new Array(list.length).fill(0);
  histo = new Array(list.length).fill(0);
  seconds = document.getElementById("seconds").value;
  animateChange(0,array, denominator);
}

function animateChange(i, array, denominator){
  if(i>array.length-1){
    return //loops until i is more than array length
  }

  histo[list.indexOf(array[i])] += 1;

  setTimeout(function () {
    animatedArray[list.indexOf(array[i])] += 1/denominator;

    var children = document.getElementById("histogramContainerId").childElementCount; //finds number divs

    var j = list.indexOf(array[i]);
    var k = list.indexOf(array[i-1]);
    var previousDiv = document.getElementById(""+k);
    var currentDiv = document.getElementById(""+j);
    var currentP = document.getElementById("p"+j);


    currentP.innerHTML = histo[j];
    currentDiv.style.height = (animatedArray[j] * 100) + "%";

    if(i-1>-1){previousDiv.classList.toggle("selectedHistogram");}
    currentDiv.classList.toggle("selectedHistogram");

    animateChange(++i, array, denominator);
  }, seconds * 1000 /array.length);
}
