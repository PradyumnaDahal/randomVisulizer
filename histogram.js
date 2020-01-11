var histo;
var animatedArray;

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
  animateChange(0,array, denominator);

}
function animateChange(i, array, denominator){
  if(i>array.length){
    return //loops until i is more than array length
  }

  histo[array[i]] += 1;
  setTimeout(function () {
    animatedArray[array[i]] += 1/denominator;

    document.getElementById("test").innerHTML = array;

    var children = document.getElementById("histogramContainerId").childElementCount; //finds number divs

    for(j=0; j<children; j++){ //loops though the divs
      var t = document.getElementById(""+j);
      var p = document.getElementById("p"+j);
      p.innerHTML = histo[j];
      t.style.height = (animatedArray[j] * 100) + "%";
    }

    animateChange(++i, array, denominator);
  }, 8000/array.length);
}
