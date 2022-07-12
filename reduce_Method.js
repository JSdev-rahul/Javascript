//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, //
//passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array1 = [1, 2, 3, 4];
console.log(array1.reduce((prev, curr) => prev + curr, 0));

// reduce((previousValue, currentValue) => {
//   /* ... */
// });
// reduce((previousValue, currentValue, currentIndex) => {
//   /* ... */
// });
// reduce((previousValue, currentValue, currentIndex, array) => {
//   /* ... */
// });

const obj = [
  {
    id: 1,
    value: 115,
  },
  {
    id: 2,
    value: 115,
  },
  {
    id: 3,
    value: 115,
  },
];
/************************************** */
data2 = obj.reduce((prev, curr) => prev + curr.value, 0);
console.log(data2);

/**************************************  */

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((prev, curr) => {
  return prev.concat(curr);
});
console.log(flattened);

/****************************************************** */

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const data = {};
names.map((item) => (!data[item] ? (data[item] = 1) : (data[item] += 1)));
console.log(data);

/********************************************************** */

// Grouping objects by a property

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Janey", age: 20 },
  { name: "Jane", age: 22 },
];

function modifiedData(data) {
  const newData = {};
  data.map((i) => {
    if (!newData[i.age]) newData[i.age] = [];
    newData[i.age].push(i);
  });
  return newData;
}
console.log(modifiedData(people));
/********************************************** */

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];
const allboks = [];
friends.map((item) => allboks.push(...item.books));
console.log(allboks.sort((a, b) => a - b));
/*************************************************************************** */
