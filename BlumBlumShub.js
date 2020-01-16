function blumBlumShub(prime1, prime2, seed, min, max, times){
  //bigInt
  prime1 = bigInt(prime1);
  prime2 = bigInt(prime2);
  seed = bigInt(seed);

  var result = [];
  var blumBlumShubNumbers = []
  var p = makeBlumInteger(prime1.toString());
  //console.log('P', p.toString())
  var q = makeBlumInteger(prime2.toString());
  //console.log('Q', q.toString())
  var xn = bigInt(seed);
  var m = bigInt(prime1).multiply(prime2);

  //if(m**2 > Number.MAX_SAFE_INTEGER){
    //console.log("ERROR: ", "Max Number Reached (p*q)^2 cant be more than MAX_SAFE_INTEGER (9007199254740991)");
    //return [];
  //}

  for(i=0; i<times; i++){

    var binary = "";
    for(j=0; j<16; j++){
      xn = xn.pow(2);
      //console.log(xn.toString());
      xn = xn.mod(m.toString());
    //  console.log(xn.toString());

      //console.log(i*16+j,xn);
      blumBlumShubNumbers.push(xn.valueOf());
      binary += xn.mod(2).valueOf();
      console.log(binary)
    }
    var ran = parseInt(binary, 2);
    ran = ran / 65536;
    ran = range(ran,min,max);
    result.push(ran);
    result.push(xn.toString());
  }
  //console.log(blumBlumShubNumbers);
  document.getElementById("periodLength").innerHTML = findPeriod(blumBlumShubNumbers);
  return result;
}
