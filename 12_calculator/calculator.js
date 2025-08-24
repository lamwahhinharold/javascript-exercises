const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  if (x === 0 || x === 1) {
    return 1;
  }
  let acc = 1;
  let curr = x;
  while (curr > 1) {
    acc *= curr;
    curr = curr - 1;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
