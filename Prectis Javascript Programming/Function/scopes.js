
// Block scoap

{
    let name = 'Deepesh singh'
    const age=21  
    var salary = 200
    // console.log("inside of the scope",name);
    // console.log("inside of the scope",age);
    // console.log("inside of the scope sallary",salary);
    
}
//console.log("out od the scope",name); // name is not define
//console.log("out od the scope",age); // age is not define
//console.log("out od the scope",salary); // salary is not define


// Variables declared within a JavaScript function, are LOCAL to the function:
// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    console.log(carName);
  }
  
  /* code here can NOT use carName */ //console.log(carName);
  
// Function Scope
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.

function myfun() {
    var carName = "Volvo";   // Function Scope
  }

//   Global JavaScript Variables
// Global JavaScript Variables

let carName = "BOlero";
// code here can use carName

function myFunction() {
// code here can also use carName
    car = carName
    console.log(car);
    
}