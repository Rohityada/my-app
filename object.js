let socialHandles = {
    fb : 1000,
    insta : 4000,
    linkedin : 9000,
    20 : 800000,
    snap : 90000,
    proj : 400000
};
console.log(socialHandles);

let socialHandlesKeys = Object.keys(socialHandles);
console.log(socialHandlesKeys);

let socialHandlesValues = Object.values(socialHandles);
console.log(socialHandlesValues);

let socialHandlesEntries = Object.entries(socialHandles);
console.log(socialHandlesEntries);

let myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    myMethod: function() {
      console.log("This is my method");
    }
  };
  
  myObject.myMethod();

  let myObject1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };
  
  let mySecondObject = Object.create(myObject);
  console.log(mySecondObject.key1);