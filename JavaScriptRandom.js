function javaScriptRandom(min, max, times){
  var result = [];
  var random = 0;
  for(i=0; i<times; i++){
    random = Math.floor(Math.random() * (max - min) ) + min; //Random generator thats built in;
    result.push(random);
  }
  return result;
}
