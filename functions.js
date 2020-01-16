function isPrime(x)  {
  x = bigInt(x);
  console.log(x.toString());
  if (x.valueOf() <= 1) return false;
  if (x.valueOf() <= 3) return true;

  if (x.mod(2).valueOf() == 0 || x.mod(3).valueOf() == 0) return false;

  for (i = 5; i * i <= x; i += 6){
    if (x.mod(i).valueOf() == 0 || x.mod(i + 2).valueOf() == 0){
      return false;
    }
  }
  return true;
}

function nextPrime(x){
  x = bigInt(x);
  if(x.valueOf() <= 1){
    return bigInt(2);
  }
  while(!isPrime(x.toString())){
    console.log("a");
    x = x.add("1");
  }
  return x.toString();
}

function range(value, min, max){
  min = parseInt(min);
  max = parseInt(max);
  //console.log(value,min,max);
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
  x = bigInt(x);
  var c = 0;
  while(!(bigInt(x).mod(4).valueOf() == 3 && isPrime(x.toString()))){
    x = nextPrime(bigInt(x).add("1").toString());
    console.log(++c);
  }
  console.log('X', x)
  return x.toString();
}
