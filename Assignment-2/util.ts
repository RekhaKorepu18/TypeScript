export  class Person {
    firstName : string;
    lastName : string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

 
}

export  function getObjects<Item> (items : Array<Item>)
 {
    return items;
 }