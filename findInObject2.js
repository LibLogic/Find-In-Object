// Return all indexes that match the query in an array

findInObj = (arrOfObjs, key, value) => {
  let result = [];
  arrOfObjs.forEach((obj, index) => {
    if(obj[key] === value) {
      result.push(index);
    }
  });
  return result;
};

let arrOfObjs = [
  {name: "Tom", age: 40},
  {name: "Bob", age: 33},
  {name: "John", age: 22},
  {name: "Larry", age: 33},
  {name: "Sean", age: 55},
  {name: "John", age: 48},

  ];

console.log(findInObj(arrOfObjs, "age", 33));
