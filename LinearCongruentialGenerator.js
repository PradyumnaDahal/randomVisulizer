/* If c = 0, the generator is often called a multiplicative congruential generator (MCG),
   or Lehmer RNG. If c ≠ 0, the method is called a mixed congruential generator.*/
function linearCongruentialGenerator(modulus, multiplier, increment, seed, times){
  /*  modulus :     m > 0
      multiplier:   0 < a < m
      increment:    0 <= c < m
      seed:         0 <= X0 < m
      Formaula:     Xn+1 = (a * Xn + c) mod m
  */
  var m = modulus;
  var a = multiplier;
  var c = increment;
  var xn = seed;
  var result = [];

  for(i=0; i < times; i++){
    xn/* aXn+1*/= ((a * xn + c) % m);
    result.push(xn);
  }
  return result;
}
