function sum(...num) {
  return num.reduce((anotherNum, otherNum) => anotherNum + otherNum);
}

console.log(sum(1, 2, 3, 4, 5, 6));
