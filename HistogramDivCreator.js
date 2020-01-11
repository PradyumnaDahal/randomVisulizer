function createHistogramDivs(list){
  var container = document.getElementById("histogramContainerId");
  container.innerHTML="";

  list = removeDuplicates(list);
  list = list.sort(function(a, b){return a-b}); //creates unique list ordered

  var width = 100 / list.length;
  //var margin = 10 / 2 / list.length;
  //had white space but im to lazy to think about math for that

  for(i=0; i<list.length; i++){ //creates the number of divs needed
    var div = document.createElement('div');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    div.id = ""+i;
    div.classList.add("histogram");
    //had white space but im to lazy to think about math for that
    div.style.width = width +"%";              //width           : 9.5%;
    div.style.margin = "auto " + "auto"//margin + "%";  //margin          : auto .1%;

    p1.id = "p"+i;
    p1.classList.add("histogramCount");
    p1.innerHTML=""+list[i];

    p2.classList.add("histogramCount");
    p2.innerHTML=(list[i])+":";

    div.appendChild(p2);
    div.appendChild(p1);
    container.appendChild(div);
  }
}
function removeDuplicates(array) { // https://dev.to/mshin1995/back-to-basics-removing-duplicates-from-an-array-55he
  return array.filter((a, b) => array.indexOf(a) === b)
}
