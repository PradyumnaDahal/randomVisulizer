function middleSquare(seed, times){
  var number = seed;
  var result = [];
  for(i=0; i < times && !result.includes(number); i++){
    result.push(Math.round(number/1000));
    number = number*number+"";
    while (number.length != 8){
      number = "0" + number;
    }
    number = number.substring(2,6);
  }
  return result;
}
