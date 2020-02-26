
function bifurcation(r,seed){

    //console.log(y);
}

function bifurcationGraph(){
  for(var i =0; i<4; i+=0.01){
    var list = logisc(""+i,"0.3",100);
    //console.log(list);
    for(var j = 0; j < list.length; j++){
      plot(i*200,parseFloat(list[j])) ;
    }
  }
}

//Feigenbaum constants
//4.66920160910299067185320382046620161725818557747576863274565134300413433021131473713868974402394801381716
function  logisc(r,seed,times){
  r = Decimal(r)
  x = Decimal(seed);
  var listOfOutputs = [];

  for(var i=0; i<times; i++){
    x = Decimal(x.times(r).times(Decimal("1").minus(x)));
  }
  var start;
  var counter = 0;
  while(counter == 0 || (x.toDecimalPlaces(15).toString() != start.toDecimalPlaces(15).toString() && counter<500)){
    start = x;
    listOfOutputs.push(x.times(500).toString());
    //console.log(counter, xtimes(500).toString());
    x = Decimal(x.times(r).times(Decimal("1").minus(x)));
    counter++;
  }
  return listOfOutputs;
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function plot(x,y){
  ctx.fillStyle = "#123";
  //console.log(y)
  ctx.fillRect(0+x,600-y,1,1);
}
bifurcationGraph();
bifurcation(3,12);
