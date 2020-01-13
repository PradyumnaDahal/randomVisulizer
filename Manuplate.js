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
    createHistogramDivs(this.list);
    changeHistogram(this.randomList);
  }
  changeToLinearCongruentialGenerator(modulus, multiplier, increment, seed, times){
    var seed = document.getElementById("seed").value;
    this.randomList = linearCongruentialGenerator(modulus, multiplier, increment, seed, times);
    //this.animate();
  }
  changeToJavaScriptRandom(min, max, times){
    this.randomList = javaScriptRandom(min, max, times);
    //this.animate();
  }
  changeToJavaScriptRandomConvertedToBinary(min, max, times){
    this.randomList = javaScriptRandomConvertedToBinary(min, max, times);
    //this.animate();
  }
  changeToMiddleSquare(seed, times){
    this.randomList = middleSquare(seed, times);
    //this.animate();
  }
  changeToBlumBlumShub(prime1, prime2, min, max, times){
    var seed = document.getElementById("seed").value;
    this.randomList = blumBlumShub(prime1, prime2, seed, min, max, times);
  }
  get list(){
    return this.randomList;
  }

}
