let arr = [2,5,4,6,87,8,7,3,4,5,6,5,4,7,10,9,8,7]

let oddnum = arr.filter((n)=> n%2 !== 0)
let evennum = arr.filter((n)=> n%2 == 0)
console.log(arr);
console.log(oddnum);
console.log(evennum);
