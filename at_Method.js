// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
// Negative integers count back from the last item in the array.

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(0)); // 5
// console.log(array1[array1.length - 1]); // 44
// console.log(array1.at(-1)); // 44  (-1 return last element )

// console.log(array1.at(9)); // index not available ( return undefined  )

//////////////////////////////////////////////////////////////////////////////////

// Our array with items
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // Logs: 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay);
console.log(sliceWay[0]); // Logs: 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // Logs: 'green'

////////////////////////////////////////////////////////////////////
