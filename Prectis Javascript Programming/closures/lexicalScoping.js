function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi();
}
// console.log(message);//not defined
const hi = greeting

hi()