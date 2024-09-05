// console.log(x); // undefine
var x = "Educative is amazing!";
// console.log(x); //result 

// for(var i = 0;i <= 5;i++){
//     console.log("inside of the scop",i);
// }
// console.log("outside of the scope",i);


// function scoping var 
function increasing() {
    var counter = 1;
    console.log("inside of the function", counter);
}
// console.log(counter); //not defined
increasing()