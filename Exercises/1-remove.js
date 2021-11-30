'use strict';

const removeElement = (array, item) => {
  if (array.includes(item)) {
    array.splice(array.indexOf(item), 1);
  }
  return array;
};

const array1 = [1, 2, 3, 4, ];
console.dir(removeElement(array1, 1));

module.exports = { removeElement };
