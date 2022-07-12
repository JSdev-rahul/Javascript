const str = "hello peter you are a developer ";
function data(str) {
  const newStr = str.split(" ");
  let a = "";
  let obj = {};
  for (var i of newStr) {
    a.length < i.length ? (a = i) : null;
    if (!obj[i]) obj[i] = [];

    obj[i] = i.length;
  }
  console.log(obj);
  return a;
}
console.log(data(str));

////////////////////////////////////////////////////
////////////////////////////////////////////////////
