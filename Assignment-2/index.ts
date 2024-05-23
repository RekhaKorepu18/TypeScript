import { getObjects, Person } from './util';

class student {
    name : string;
    age : number;
    email: string;
    courseList: string[];
    address: string;

    constructor(name: string, age: number,email: string, course: string[], address: string){
        this.name = name;
        this.age =age;
        this.email= email;
        this.courseList= course;
        this.address = address;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, email: ${this.email}, courseList: ${this.courseList}, address: ${this.address}`;
    }
}
const rekha = new student("rekha", 20, "rekhakorepu@gmail.com", ["java", "react"], "Rajanna sircilla");
console.log(rekha.getDetails());

//======Generics=============//
const values= [1,2,3];
const names = ["Rekha", "Anush" , "Krithika"];

console.log(getObjects(values));
console.log(getObjects(names));

const person1 = new Person("Rekha", "Korepu");
console.log(person1.getFullName());


//===Student inteface and using utility type ReadoNLY=======//

interface StudentDetails {
    name : string;
    id : number;
    age : number;
    email : string;
    courseList : string[];
    address : string;
}
 
type alterReadOnly<Type> = {
    readonly [P in keyof Type]: Type[P];
}

const student1: alterReadOnly<StudentDetails> = {
    name: "Anush Korepu",
    id: 123,
    age: 21,
    email: "anushkorepu@gmail.com",
    courseList: ["ML", "Angular", "Typescript"],
    address: "Karimnagar"
};

// if we try to alter the properties, then it gives error.
//student1.name= "Krithika";  // it gives error
//student1.id =456; // it gives error




 


