const fibonacci = function (number) {
  const fibonacciArray = [
    1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
    4181, 6765, 10946, 17711, 28657, 46368, 75025,
  ];
  number = Number(number);
  if (number < 0) {
    return "OOPS";
  } else if (number === 0) {
    return 0;
  } else {
    return fibonacciArray[number - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
