function memoize(fn) {
  let cache = {};
  return (x) => {
    if (x in cache) {
      console.log("Fetching from cache for");
      return cache[x];
    } else {
      
       let result = fn(x);
       cache[x] = result;
       return result;
      }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log("Calculating result for")
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
