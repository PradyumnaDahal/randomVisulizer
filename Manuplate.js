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
    createHistogramDivs(randomJava.list);
    changeHistogram(this.randomList);
  }
  changeToLinearCongruentialGenerator(modulus, multiplier, increment, seed, times){
    this.randomList = linearCongruentialGenerator(modulus, multiplier, increment, seed, times);
    this.animate();
  }
  changeToJavaScriptRandom(min, max, times){
    this.randomList = javaScriptRandom(min, max, times);
    this.animate();
  }
  changeToMiddleSquare(seed, times){
    this.randomList = middleSquare(seed, times);
    this.animate();
  }

  get list(){
    return this.randomList;
  }

}
