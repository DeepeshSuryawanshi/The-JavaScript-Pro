// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

function ReversNum(num){
    let numStr = num.toString();
    // string revers and do some stuf calcu
    let reversNum = numStr.split('').reverse().join('')
  
    // string to numbers 
    let reversresult = parseInt(reversNum) * Math.sign(num)

    return reversresult;  
}

 num = ReversNum(1234)
 console.log(num);
 num1 = ReversNum(54321)
 console.log(num1);

 //  ok tested
 