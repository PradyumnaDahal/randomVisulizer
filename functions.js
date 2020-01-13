function isPrime(x)  {
  if (x <= 1) return false;
  if (x <= 3) return true;

  if (x % 2 == 0 || x % 3 == 0) return false;

  for (i = 5; i * i <= x; i += 6){
    if (x % i == 0 || x % (i + 2) == 0){
      return false;
    }
  }
  return true;
}

function nextPrime(x){
  if(x <= 1){
    return 2;
  }
  while(!isPrime(x)){
    x++;
  }
  return x;
}

function range(value, min, max){
  console.log(value,min,max);
  min = parseInt(min);
  max = parseInt(max);

  return Math.floor(value * (max - min) ) + min;
}

function findPeriod(array){
  var unique = [];
  for(i=0; i<array.length; i++){
    if(unique.indexOf(array[i]) == -1){
      unique.push(array[i]);
    }else {
      return unique.length;
    }
  }
}

function makeBlumInteger(x){
  //while(!((x % 4) == 3 && isPrime(x))){
    //x = nextPrime(x+1);
  //}
  return nextPrime(x);
}
