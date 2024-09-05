// Objective data types

// **Object**
let obj = {
    name: "Deepesh suryavanshi",
    age: 30
  };
//   console.log(obj);
  
//   **Array**
let arr = [1, 2, 3, 4, 5];
console.log(typeof(arr),arr); // Object [1,2,3,4,5] ?

// **Function**
function greet(name) {
    return `Hello, ${name}!`;
  }
var x= greet("Deepesh")
console.log(typeof(greet),x);

//**Date**
let now = new Date();
console.log(now , typeof(now)); // 2024-08-03T18:37:43.451Z object ? 

// **RegExp**
let regex = /hello/i;
console.log("regex",regex,typeof(regex)); //regex /hello/ i? object? 

// **Map**
let map = new Map();
map.set('key', 'value');
map.set('name', 'Deepesh');
console.log(map , typeof(map)); // Map(2) { 'key' => 'value', 'name' => 'Deepesh' } object?

// **set**
let set = new Set([1, 2, 3, 4, 4]);
console.log(set,typeof(set)); // Set(4) { 1, 2, 3, 4 } object

