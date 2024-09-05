// singleton is an object build by constactor.

//singletonconstractor method ke throu bana .
// let data = Object.create({})

// Object literals
const mySym = Symbol('Key1')
const Jsuser = {
    name:'Deepesh',
    fullname:{
        fist_name:"Deepesh",
        last_name:'Suryavanhi'
    },
    "user age":18,
    [mySym]:"mykey1",
    location:'Gwalior',
    Email:'DeepeshX@gmail.com',
    isLogdine:true,
    lastLogin:['monday','tuesday','friday']
}
// how to acces user
// console.log(Jsuser , typeof Jsuser);
// console.log(Jsuser.name); // comman way to acces things 

// console.log(Jsuser.user age); // wrong way
// console.log(Jsuser["user age"]); // right wy

// console.log(Jsuser.fullname.fist_name); // acessing the value of the object of object
// console.log(Jsuser.fullname.last_name); // acessing the value of the object of object

// console.log(Jsuser['Email']); // ascess by using key of the obj
// console.log(Jsuser[mySym]); 
// Object.freeze(Jsuser) //Freez the objet  can't cahnge walue in the on=bj
// Jsuser.Email= "DeepeshsinghDev@Dev.com" // changin the walue of the obj 
// console.log(Jsuser.Email);

Jsuser.greeting = function(){
    console.log("Hello js user!");
}

Jsuser.greetingName = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(Jsuser.greeting); // [Function (anonymous)]
console.log(Jsuser.greeting()); // undefined
Jsuser.greeting()
Jsuser.greetingName()

console.log(Jsuser);