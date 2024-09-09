//  destracturing app
let arr = [1,2,3,4,5]
const [one,two,three] = arr
console.log(arr); // arr
console.log(one); // 1

// rest in arrray
const arr1 = ['one',12,34,'last',123,456,9];

const [fist,...rest] = arr1
console.log(fist);
console.log(rest[4]);
