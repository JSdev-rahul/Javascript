const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// expected output: "array1:" Array ["three", "two", "one"]

/****************************************************************** */

// Object Recverse
const obj = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(Array.prototype.reverse.call(obj)); // {0: 1, 1: 2, 2: 3, length: 3}

/************************************************************************* */
