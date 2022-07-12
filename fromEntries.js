//  The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj1 = Object.fromEntries(entries);

console.log(obj1);
// expected output: Object { foo: "bar", baz: 42 }

const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
