// Creates a new array by applying a function to each element of the original array.
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) { 
  return num * 2;
});
console.log(doubled); // [2, 4, 6]
