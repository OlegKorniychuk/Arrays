'use strict';

const difference = (array1, array2) => {
  const finalArray = array1.slice();
  array2.forEach(item => finalArray.includes(item) ? finalArray.splice(finalArray.indexOf(item), 1) : finalArray);
  return finalArray;
};

const arrayA = [1, 2, 3, 4, 5, 6];
const arrayB = [3, 4, 1];
console.dir(difference(arrayA, arrayB));

module.exports = { difference };
