// Extracts a part of a string and returns it as a new string. It can take negative indices to count from the end of the string.
let text = "Hello, World!";
let part = text.slice(7, 12);
console.log(part); // "World"

let lastPart = text.slice(-6);
console.log(lastPart); // "World!"
