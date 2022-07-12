// prevent deleting and add propety

const obj = {
  prop: 42,
};

Object.freeze(obj);
delete obj.prop;
console.log(obj);
