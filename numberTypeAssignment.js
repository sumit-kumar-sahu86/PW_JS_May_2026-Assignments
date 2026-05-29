function numberType(num) {
  
  let result = "";

  if (num > 0) {
    result = "positive";
  } else if (num < 0) {
    result = "negative";
  } else {
    result = "neutral";
  }
  return result;
}

console.log(numberType(10));   // positive
console.log(numberType(-5));   // negative
console.log(numberType(0));    // neutral