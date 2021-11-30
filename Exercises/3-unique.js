'use strict';

const unique = (array) => {
  const array1 = [];
  array.forEach(item => !array1.includes(item) ? array1.push(item) : array1);
  return array1;
};

const array1 = [1, 1, 2, 3, 3, 4,];
console.dir(unique(array1));

module.exports = { unique };
