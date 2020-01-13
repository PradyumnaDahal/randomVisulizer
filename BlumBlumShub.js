function blumBlumShub(prime1, prime2, seed, min, max, times){

  var result = [];
  var blumBlumShubNumbers = []
  var p = nextPrime(prime1);
  var q = nextPrime(prime2);
  var xn = seed;
  var m = prime1 * prime2;

  for(i=0; i<times; i++){

    var binary = "";
    for(j=0; j<16; j++){
      xn = xn**2 % m;
      blumBlumShubNumbers.push(xn);
      binary += xn % 2;
    }
    var ran = parseInt(binary, 2);
    ran = ran / 65536;
    ran = range(ran,min,max);
    result.push(ran);

  }

  document.getElementById("periodLength").innerHTML = findPeriod(blumBlumShubNumbers);
  return result;
}
