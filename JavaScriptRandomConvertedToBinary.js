function javaScriptRandomConvertedToBinary(min, max, times){
  var result = [];
  var random = 0;

  for(i=0; i<times; i++){ //Get 16 binary numbers
    var binary = "";
    for(j=0; j<16; j++){
      xn = random = range(Math.random(),0,2);
      binary += xn % 2;
    }

    var ran = parseInt(binary, 2);//convert it back to decimal
    ran = ran / 65536;
    ran = range(ran,min,max);//convert to given min and max
    result.push(ran);
  }
  return result;
}
