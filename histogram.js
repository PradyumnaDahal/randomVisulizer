var histo;
var animatedArray;
var seconds = 8;

function changeHistogram(array){
  var list = removeDuplicates(array).sort(function(a, b){return a-b});
  histo = new Array(list.length).fill(0); //creates clear arry length of unique numbers

  for (i =0; i < array.length; i++){
    histo[array[i]] += 1; //find how many of each unique number
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
  if(i>array.length){
    return //loops until i is more than array length
  }

  histo[array[i]] += 1;
  setTimeout(function () {
    animatedArray[array[i]] += 1/denominator;
    //console.log('ARRAY[I]', array[i])
    document.getElementById("test").innerHTML = array;

    var children = document.getElementById("histogramContainerId").childElementCount; //finds number divs

    var j = array[i];
    var k = array[i-1];
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
