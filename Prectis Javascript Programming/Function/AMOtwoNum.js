function addToNum(a,b) {
    console.log(a + b);
}

function SubToNum(a,b) {
    console.log(a - b);
}

//  + operato converts number in to string if string num is given.
// addToNum("12",10) //12; 10 is converted into string "12"
// addToNum(12,"10") //10; 10 is converted into string "12"

addToNum(10,"g") // 10 is converted into sting
SubToNum("deepesh",10) // NaN cont change alpna char into number

// - operato converts string in to number if string num is given.
// SubToNum(20,"15") // 0; "2" is converted to the number 2
// SubToNum("10",11) // 0; "2" is converted to the number 2
