function javaScriptRandom(min, max, times){
  var result = [];
  var random = 0;
  for(i=0; i<times; i++){
    random = range(Math.random(),min,max); //Random generator thats built in;
    result.push(random);
  }
  return result;
}
