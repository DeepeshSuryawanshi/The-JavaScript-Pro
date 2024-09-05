
function VovleCount(str){
    let count = 0;
    let vowels = ['a','e','i','o','u']

    str.toLowerCase().split('').forEach((char) => {
        vowels.includes(char) && count++        
    });

    return count;
}
let result = VovleCount("the quick Brown Fox jump ower the lazy dog")
console.log(result);
