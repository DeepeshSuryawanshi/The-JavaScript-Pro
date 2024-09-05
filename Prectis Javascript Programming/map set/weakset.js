const myWeakSet = new WeakSet();

const obj1 = {};
const obj2 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);

// When obj1 or obj2 is no longer referenced, it can be garbage collected.