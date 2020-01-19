
function blumBlumShub(prime1, prime2, seed, min, max, times){

  prime1 = bigInt(prime1); //turn numbers into big ints
  prime2 = bigInt(prime2);
  seed = bigInt(seed);

  var result = [];  //Result between min and max
  var blumBlumShubNumbers = [] //blum blum shub numbers may be used in future

  var p = makeBlumInteger(prime1.toString()); // create big blum integers
  var q = makeBlumInteger(prime2.toString());
  var xn = bigInt(seed);
  var m = bigInt(prime1).multiply(prime2);

  for(i=0; i<times; i++){ //Loop the amout of times
    xn = xn.pow(2).mod(m.toString());//Blum Blum Shub Algorithm
    blumBlumShubNumbers.push(xn.valueOf());
    var randomDecimal = Decimal(xn.toString()).dividedBy(m.toString()).toString(); //convert to decmila by dividing by modulus
    var randomResult = range(randomDecimal,min,max);
    result.push(randomResult); // put in array
  }
  var period = findPeriod(blumBlumShubNumbers); // find and desply period and precision
  if(("" + period) != "undefined"){
    document.getElementById("periodLength").innerHTML = "The Blum Blum Shub recursive series loops after " + period + " digets";
  } else {
    document.getElementById("periodLength").innerHTML = "The Blum Blum Shub recursive series loops at unknown point after " + times;
  }
  var decimalAccuracy = Decimal("1").dividedBy(m.toString()).tosd();
  for(i = 0; i< decimalAccuracy.length; i++){
    console.log(decimalAccuracy.charAt(i));
  }
  document.getElementById("accuracy").innerHTML = Decimal("1").dividedBy(m.toString()).add(.1).toPrecision() + "The randomizer is accurate to " + (Decimal("1").dividedBy(m.toString()).toString().match(/0/g) || []).length + " decimal points";
  return result;
}
