function sumAll(startInt, endInt) {
  if (startInt < 0 || endInt < 0) {
    return "ERROR";
  } else if (!Number.isSafeInteger(startInt) || !Number.isSafeInteger(endInt)) {
    return "ERROR";
  }
  if (endInt < startInt) {
    const temp = startInt;
    startInt = endInt;
    endInt = temp;
  }
  let ctr = startInt;
  let sum = 0;
  while (ctr <= endInt) {
    sum += ctr;
    ctr++;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
