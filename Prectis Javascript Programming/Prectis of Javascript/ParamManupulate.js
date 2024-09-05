
function check(){
    throw new Error("Parameter require..."); 
}

    function aa(name = check()){
        console.log(name);
        
    }
    aa()