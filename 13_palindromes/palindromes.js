function sanitizeString(string) {
  return string.toLowerCase().replace(/[\s\p{P}]/gu, "");
}

const palindromes = function (string) {
  string = sanitizeString(string);

  let leftPtr = 0;
  let rightPtr = string.length - 1;
  while (leftPtr < rightPtr) {
    if (string[leftPtr] !== string[rightPtr]) {
        return false;
    }
    leftPtr++;
    rightPtr--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
