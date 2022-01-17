function sumUntil(maxValue) {
  let sumNumbers = 0;
  for(let i = 1; i <= maxValue; i++){
    sumNumbers += i;
  }

  return sumNumbers ;
}

console.log(sumUntil(5));