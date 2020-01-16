/*const randomTypes = {
  JavaScriptRandom: 0,
  MiddleSquare: 1,
  LinearCongruentialGenerator: 2
}*/
class random{

  constructor(randomList){
    this.randomList = randomList;
  }
  animate(){
    createHistogramDivs(this.randomList);
    changeHistogram(this.randomList);
  }
  changeToLinearCongruentialGenerator(modulus, multiplier, increment, seed, times){
    var seed = document.getElementById("seedInput").value;
    this.randomList = linearCongruentialGenerator(modulus, multiplier, increment, seed, times);
    //this.animate();
  }
  changeToJavaScriptRandom(){
    var min = document.getElementById("minInput").value;
    var max = document.getElementById("maxInput").value;
    max++;
    var times = document.getElementById("timesInput").value;
    this.randomList = javaScriptRandom(min, max, times);
    //this.animate();
  }
  changeToJavaScriptRandomConvertedToBinary(){
    var min = document.getElementById("minInput").value;
    var max = document.getElementById("maxInput").value;
    max++;
    var times = document.getElementById("timesInput").value;
    this.randomList = javaScriptRandomConvertedToBinary(min, max, times);
    //this.animate();
  }
  changeToMiddleSquare(seed, times){
    this.randomList = middleSquare(seed, times);
    //this.animate();
  }
  changeToBlumBlumShub(){
    var min = "" + document.getElementById("minInput").value;
    var max = "" + document.getElementById("maxInput").value;
    max++;
    var times = "" + document.getElementById("timesInput").value;
    var seed = "" + document.getElementById("seedInput").value;
    var prime1 = "" + document.getElementById("blumInputX").value;
    var prime2 = "" + document.getElementById("blumInputY").value;

    this.randomList = blumBlumShub(prime1, prime2, seed, min, max, times);
  }
  get list(){
    return this.randomList;
  }

}
