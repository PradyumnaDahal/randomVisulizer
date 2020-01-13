function blumBlumShub(prime1, prime2, seed, min, max, times){

  var result = [];
  var blumBlumShubNumbers = []
  var p = nextPrime(prime1);
  console.log('P', p)
  var q = nextPrime(prime2);
  console.log('Q', q)
  var xn = seed;
  var m = prime1 * prime2;

  if(m**2 > Number.MAX_SAFE_INTEGER){
    console.log("ERROR: ", "Max Number Reached (p*q)^2 cant be more than MAX_SAFE_INTEGER (9007199254740991)");
    return;
  }

  for(i=0; i<times; i++){

    var binary = "";
    for(j=0; j<16; j++){
      xn = xn**2
      xn = xn % m;
      //console.log(i*16+j,xn);
      blumBlumShubNumbers.push(xn);
      binary += xn % 2;
    }
    var ran = parseInt(binary, 2);
    ran = ran / 65536;
    ran = range(ran,min,max);
    result.push(ran);

  }
  //console.log(blumBlumShubNumbers);
  document.getElementById("periodLength").innerHTML = findPeriod(blumBlumShubNumbers);
  return result;
}
