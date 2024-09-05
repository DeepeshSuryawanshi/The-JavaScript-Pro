// Returns the value of the first element in the array that satisfies the provided testing function.
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(function(num) {
  return num > 3;
});
console.log(found); // 4