// With the key given find the index of the object(s) where a key matches

findInObj = (arrOfObjs, key) => {
  let seen = {};
  let result = [];
  arrOfObjs.forEach((obj, index) => {
    if (key in obj !== true) {
      seen[key] = true;
    } else {
      result.push(index);
    }
  });
return result;
};

let arrOfObjs = [
  {foo: "Tom", age: 40},
  {bar: "John", duh: 22},
  {name: "Larry", foo: 33},
  {baz: "Sean", wut: 55},
  {name: "John", age: 48},
];

console.log(findInObj(arrOfObjs, 'age'));
