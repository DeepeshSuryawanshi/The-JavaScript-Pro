// using 
let arr = [1,4,3,2,3,23,4,65,7,6,7,8,9,6,7,5,4,5,3,2,12,3,4]
let fequency = {}      
 
    for(let x of arr){
        if(fequency[x]){
            fequency[x] += 1;
        }
        else{
            fequency[x] = 1;
        }
    }

console.log("result",fequency);

var arr1 = [2,3,2,4,3,5,4,6,7,6,7,5,7,34,645,45,3,4,3,4]

function findFeq(arr){
    var feq = {}
	for (let x of arr){
	 if(feq[x]){
	   feq[x] +=1;
	}else{
	feq[x] = 1;}
    }
    return feq;
}
let result = findFeq(arr1)
console.log("function result:",result);
