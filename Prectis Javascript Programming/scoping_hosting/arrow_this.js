
const user = {
    name :'Deepesh',
    age:12,
    welcomemessage:function(){
        console.log(`${this.name},welcome to the website`);
        console.log(this);
        
    }
}

user.welcomemessage()
user.name = "hitesh"
user.welcomemessage()
console.log(this);