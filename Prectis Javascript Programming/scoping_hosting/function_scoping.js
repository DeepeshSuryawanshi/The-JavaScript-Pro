// function scoping

function one(){ //parent
    const username = 'deepesh'
    function two(){// child
        const website = 'youtube';
        console.log(username); // deepesh
    }
    // console.log(website);//website is not defined
    two()
}
one()