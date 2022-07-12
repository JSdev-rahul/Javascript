//The Object.defineProperties() method defines new or modifies existing properties directly on an object,
// returning the object.

const obj = {};

Object.defineProperties(obj, {
  property: {
    value: 22,
    writable: true,
  },
});
console.log(obj.property);
