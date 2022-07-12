//  The find() method returns the first element in the provided array that satisfies the provided testing function.
//  If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44, 155];
console.log(array1.find((ele) => ele > 100)); // 130

/************************************************************** */
const array2 = [5, 12, 8, 130, 44, 155];
console.log(array2.find((ele) => ele > 1000)); // undefined

/************************************************************** */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
console.log(inventory.find(({ name, quantity }) => name === "cherries"));
