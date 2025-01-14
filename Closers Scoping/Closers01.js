function car(){
    let car = "BMW";
    function home(){
        let home = "Farm house";
        function me(){
            let me = "Deepesh";
            return `${me} have a ${home} and ${car} car`
        }
        return me;
    }
    return home;
}
let home = car();
let me = home()
let intro = me();
console.log(intro);