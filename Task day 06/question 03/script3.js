// 3) Write a “person” class to hold all the details.

class person {
    constructor(Name,Age,DOB,Mothertongue,Address,City,State,Nationality,Qualification,MobNo){
        this.Name = Name;
        this.Age = Age;
        this.DOB = DOB;
        this.Mothertongue = Mothertongue;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Nationality = Nationality;
        this.Qualification = Qualification;
        this.MobNo = MobNo;
    }
}
var a = new person("Gokul",20,"12/06/2003","Tamil","No:01,gandhi street","Chennai","Tamil Nadu","Indian","BA History",1234567890);
console.log(a);