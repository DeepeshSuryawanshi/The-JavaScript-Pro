var obj = {
    name:'Deepesh',
    work:'Ful stack Developer',
    salary:20000,
    age:22,
    greeting:(()=>{console.log(`Hello, ${name}`)})
}

const {name,salary,age,greeting} = obj;
console.log(name,salary);
greeting()

var family = {
    name:'suryavanshgi Family',
    parent:{
        name:'SUman ,Narendra',
        child:{
            Deepesh:{
                name:'Deepesh',
                age:22
            },
            uday:{
                name:'uday,',
                age:19
            }
        }
    }
}

const {name:familyname,parent:{child:{Deepesh:{name:childname}}}}  = family;
console.log(family);
console.log(familyname);
// console.log(parent);
// console.log(child);
console.log(childname);



