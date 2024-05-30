"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Student = /** @class */ (function () {
    function Student(name, age, email, course, address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseList = course;
        this.address = address;
    }
    student.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", email: ").concat(this.email, ", courseList: ").concat(this.courseList, ", address: ").concat(this.address);
    };
    return Student;
}());
var rekha = new Student("rekha", 20, "rekhakorepu@gmail.com", ["java", "react"], "Rajanna sircilla");
console.log(rekha.getDetails());
//======Generics=============//
var values = [1, 2, 3];
var names = ["Rekha", "Anush", "Krithika"];
console.log((0, util_1.getObjects)(values));
console.log((0, util_1.getObjects)(names));
var person1 = new util_1.Person("Rekha", "Korepu");
console.log(person1.getFullName());
var student1 = {
    name: "Anush Korepu",
    id: 123,
    age: 21,
    email: "anushkorepu@gmail.com",
    courseList: ["ML", "Angular", "Typescript"],
    address: "Karimnagar"
};
// if we try to alter the properties, then it gives error.
student1.name = "Krithika";
student1.id = 456;
