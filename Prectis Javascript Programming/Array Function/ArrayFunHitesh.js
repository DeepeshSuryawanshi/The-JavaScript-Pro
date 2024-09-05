const Marver_heros = ["ironmn","caption America","Hulk","Thor"];
const Indian_heros = ["Smaktiman","Arjun","Hero","Hanuman"];

// Marver_heros.push(Indian_heros) push array in to another array

let new_heros = Marver_heros.concat(Indian_heros) // concatination of two arrays
let allHeros = [...Indian_heros,...Marver_heros] //sprit operators
// console.log(new_heros);
// console.log("All heros:",allHeros);

let arrayOfArray = [0,1,2,3,4,[23,45,0],3,4,6,[56,[3,4,5]]]
let realflatarray = arrayOfArray.flat(Infinity)
// console.log(arrayOfArray);
// console.log(realflatarray);

// test variable
let test = "hitesh"
let obj = {
    name:{
        fistname:"Deepesh",
        lastname:"Suryavanshi"
    },
    age:21,
    salary:20000
}

// console.log(Array.isArray(realflatarray)); // check is array or not
// console.log(Array.isArray(obj)); // check an object is array or not
// console.log(Array.from(test)); //Change string into array
// console.log(Array.from(obj)); //Change string into array return [ emply array ]

// f[ort of arrray 
let score = 100
let score1 = 1100
let score2 = 200
let score3 = 300
let result = Array.of(score,score1,score2,score3)
console.log(result);
