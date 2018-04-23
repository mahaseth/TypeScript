class Aboutme{
    constructor(protected name:string,protected age:number,protected gender:string,protected Address:string)
    {
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.Address=Address;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    getAge(){
        return this.age;
    }
    getAddress()
    {
        return this.Address;
    }
}

class Interestedin extends Aboutme{
    constructor(protected actor:string,protected color:string,protected film:string,protected Passion:string,protected name:string,protected age:number,protected gender:string,protected Address:string)
    {
        super(name,age,gender,Address);
        this.actor=actor;
        this.film=film;
        this.Passion=Passion;
        this.color=color;

    }
    getFavActor(){
        return this.actor;
    }
    getFavFilem(){
        return this.film;
    }
    getFavPassion(){
        return this.Passion;
    }
    getFavColor(){
        return this.color;
    }
}

class UserProfile extends Interestedin{
    constructor(protected actor:string,protected color:string,protected film:string,protected Passion:string,protected name:string,protected age:number,protected gender:string,protected Address:string)
    {
        super(actor,color,film,Passion,name,age,gender,Address);
    }
}

class Facebook extends UserProfile
{
    constructor(protected FacebookId,protected actor:string,protected color:string,protected film:string,protected Passion:string,protected name:string,protected age:number,protected gender:string,protected Address:string)
    {
        super(actor,color,film,Passion,name,age,gender,Address);
        this.FacebookId;
    }
    getFacebookId(){
        return this.FacebookId;
    }
}
let user1=new Facebook(1234,"sarukhKkhan","red","tarzan","web desigining","Yogesh",24,"male","bangalore");


console.log("<-------------user1 details------------------>");

console.log("<-------------Facebook Id------------>");
console.log(user1.getFacebookId());
console.log("<-------------Name------------>");
console.log(user1.getName());
console.log("<-------------Age------------>");
console.log(user1.getAge());
console.log("<-------------Gender------------>");
console.log(user1.getGender());
console.log("<-------------Address------------>");
console.log(user1.getAddress());
console.log("<-------------Fav actor------------>");
console.log(user1.getFavActor());
console.log("<------------  Fav color------------>");
console.log(user1.getFavColor());
console.log("<-------------Fav Passion------------>");
console.log(user1.getFavPassion());
console.log("<-------------Facebook Id------------>");
console.log(user1.getFacebookId());

