const findTheOldest = function (personObjects) {
  const oldestPerson = personObjects.reduce((acc, curr) => {
    const currentYear = new Date().getFullYear();
    let soFarOldestAge, currOldestAge;
    if (!("yearOfDeath" in acc)) {
      soFarOldestAge = currentYear - acc.yearOfBirth;
    } else {
      soFarOldestAge = acc.yearOfDeath - acc.yearOfBirth;
    }
    if (!("yearOfDeath" in curr)) {
      currOldestAge = currentYear - curr.yearOfBirth;
    } else {
      currOldestAge = curr.yearOfDeath - curr.yearOfBirth;
    }

    if (currOldestAge > soFarOldestAge) {
      acc = curr;
    }
    return acc;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
