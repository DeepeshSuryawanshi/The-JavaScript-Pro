function AdduptoShort(n) {
    return n*(n+1)/2
}
var t1= performance.now();
AdduptoShort(100000000)
var t2 = performance.now();
console.log("hwello ",`time elips  ${t1 - t2 / 1000} Seconds`);
