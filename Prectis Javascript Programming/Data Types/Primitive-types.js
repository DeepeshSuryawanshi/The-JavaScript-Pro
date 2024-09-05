// Primitive data types.

// **String**
let str = "Deepesh"
console.log(str);
console.log(typeof(str));


// **Number**
let num = 42; /* interger */
let float = 3.14; /* float */
console.log([num,typeof(num),float,typeof(float)]);

// **BigInt**
let bigInt = 1234567890123456789012345678901234567890n;/*    n is the safe fix in bigint */
console.log(bigInt,typeof(bigInt));

// **Boolean**
let isTrue = true;
let isFalse = false;
console.log(isFalse,isFalse);
console.log(typeof(isFalse),typeof(isFalse));

//  **Undefined**
let unassigned;
console.log(unassigned); // undefined

// **Null**
let empty = null;
console.log(empty)

// **Symbol**
let sym = Symbol("description");
console.log(sym);
