function removeFromArray(array, ...elementsToRemove) {
  for (const element of elementsToRemove) {
    while (array.indexOf(element) !== -1) {
      const index = array.indexOf(element);
      array.splice(index, 1);
    }
  }
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
