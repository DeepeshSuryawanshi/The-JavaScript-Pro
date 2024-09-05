
let arr1 = [1,3,5,4,6,7,2,9,10]

function findsecondLargest(arr){
    let first = 0;
    let second = 0;

    for(let x of arr){
        if( x > first){
            second = first;
            first = x
        }
    }
    console.log("largest",first);
    console.log("second",second);
    
    return second
}   

findsecondLargest(arr1)