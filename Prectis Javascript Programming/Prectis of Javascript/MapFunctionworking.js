let student = [
    {name:'Deepesh',class:'BAC',age:21},
    {name:'Uday',class:'BAC',age:20},
    {name:'Samar',class:12,age:18},
    {name:'Ankit',class:12,age:18},
    {name:'Somesh',class:'BA,LLB',age:22},
]
// using map function
var t1= performance.now()
let nameMap = student.map((item)=>{
    return item.name.toUpperCase()
})
var t2= performance.now()
//  Usnig for loop function
// let nameFor = new Array()
// for (let i = 0; i < student.length; i++) {
//     nameFor.push(student[i].name.toUpperCase());
    
// }
console.log(nameMap);
// console.log(nameFor);
console.log(`Function runtime is started ${t1 - t2 /1000} `);
