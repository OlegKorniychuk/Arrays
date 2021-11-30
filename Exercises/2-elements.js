'use strict';

const removeElements = (array, ...items) => {
  items.forEach(item => array.includes(item) ? array.splice(array.indexOf(item), 1) : array);
  return array;
};

const array1 = [1, 2, 3, 4, 5];
console.log(removeElements(array1, 1, 3, 0));
module.exports = { removeElements };
