//  loserd experement
var name = 'Deepesh';
    function parent(){
        let age = 22;
        function child(){
            console.log(`my name:${name},age:${age}`);
        }
        return child;
    }

let fer = parent();