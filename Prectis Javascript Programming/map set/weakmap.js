const myWeakMap = new WeakMap();
const obj = {};
myWeakMap.set(obj, 'value');
// When obj is no longer referenced, it can be garbage collected.
