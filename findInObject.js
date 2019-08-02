// Given an array of objects all with the same keys, a key
// and a value as inputs return the index that has that key and value

findInObj = (arrOfObjs, key, value) => {
  let result;
  arrOfObjs.find(function (obj, index) {
    if(obj[key] === value) {
      result = index;
    }
  });
  return result;
};

let arrOfObjs = [
  {name: "Tom", age: 40},
  {name: "Bob", age: 33},
  {name: "John", age: 22},
  {name: "Larry", age: 36},
  {name: "Sean", age: 55},
];

console.log(findInObj(arrOfObjs, "age", 55));
