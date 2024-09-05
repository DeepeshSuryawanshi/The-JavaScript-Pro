// const tinderUser = new Object() // singleton object
// const tinderUserNS = {} // none singleton object
// output of both is same

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Deepesh"
tinderUser.isLoggdin = false

// console.log(tinderUser); 
// nested object using and ? protion
const regularUser = {
    email:'Some@gmail.com',
    fullname:{
        userFullname:{
            fistname:'Deepesh',
            lastname:'Suryavanshi'
        }
    }
}

// console.log(Object.keys(tinderUser)); // extracting keys // output in array [ 'id', 'name', 'isLoggdin' ]
// console.log(Object.values(tinderUser)); // extracting value // output in array [ '123abc', 'Deepesh', false ]
// console.log(Object.entries(tinderUser)); // extracting value // output in array  [ [ 'id', '123abc' ], [ 'name', 'Deepesh' ], [ 'isLoggdin', false ] ]
// console.log(tinderUser.hasOwnProperty('name')); // checking the Propert have or not ans in boolen 


// console.log(regularUser.fullname.userFullname);

var obj = {1:"a",2:'b',3:"c"}
var obj2 = {4:"d",5:'e',6:"f"}
var obj4 = {7:"d",8:'e',9:"f"}

// var obj3 = {obj , obj2} // ading

// Object.assign(obj,obj2,obj4)// obj:target , all other are sourse

// var obj3 = Object.assign(obj,obj2,obj4) //combining object 
var obj3 = {...obj,...obj2,...obj4} // using sprid opeartor

// console.log(obj3);
// console.log(obj3);

// console.log(obj + obj2);//[object Object][object Object]
// console.log();

const user = [
    {
        name:'Deepesh singh',
        email:'Deepesh@dev.com',
        tech:'Mern'
    },
    {
        name:'Aman Sahu',
        email:'amansahu@hotmail.com',
        tech:'B.tech CP DSA'
    },{
        name:'Deepak Sahu',
        email:'Deepak@modi.com',
        tech:'Mern'
    },{
        name:'Sani yadav',
        email:'SaniYadab@brand.com',
        tech:'B.tech'
    },{
        name:'uday singh',
        email:'UdayHactop@gmail.com',
        tech:'Ethickal Hacker'
    },
]

// user.forEach((x)=>{
//     console.log(x.name);
    
// })  loop on every element

// console.log(user[0].name);

// De..structuring

const course = {
    courseName:"JS hindi",
    coursePrice:999,
    CourseInstructior:'Hitesh'
}

// method Destructuring
const {courseName,coursePrice,CourseInstructior} = course;
// console.log(courseName);
