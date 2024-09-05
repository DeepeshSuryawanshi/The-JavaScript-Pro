let Str = " My name is deeepesh singh and yours name is what, and Nice to meet you thank you for there  ok Bye!"
let Str2 = "The Quick Brown Fox jump Over the lazy Dog."

const count= {}

for (let x of Str2){
    if(count[x]){
        count[x] += 1;
    }
    else{
        count[x] = 1
    }
}

console.log(count); 