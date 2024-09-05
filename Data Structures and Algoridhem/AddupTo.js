function  addupto(n) {
    total = 0;
    for (let i=0; i <= n; i++) {
        total +=i
    }
    return total;
}
var t1 = performance.now()
addupto(100000000)
var t2 = performance.now()
console.log(`time ellepsession ${t1 - t2 / 1000} second`);
