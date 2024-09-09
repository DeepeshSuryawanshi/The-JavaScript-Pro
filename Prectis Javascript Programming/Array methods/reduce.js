// Executes a reducer function on each element of the array, resulting in a single output value.
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, num) {
    return total + num;
  }, 0);
  console.log(sum); // 10
  