interface Student  {
    name : string;
    age  : number;
    email : string;
    courseList : string[];
    address : Address;
}
type Address = {
    city : string;
    state : string;
    pincode : number;
}

let Rekha: Student = {
    name : "Rekha",
    age : 20,
    email : "rekhakorepu@gmail.com",
    courseList : ["React", "javascript" , "typescript"],
    address : {
        city : "Karimnagar",
        state : "Telangana",
        pincode : 505404
    }
}

let Deepthi: Student = {
    name : "Deepthi",
    age : 20,
    email : "Deepthijangam@gmail.com",
    courseList : ["Java script", "Datascience" , "springboot"],
    address : {
        city : "nizamabad",
        state : "Telangana",
        pincode : 505401
    }
}

let Anush: Student = {
    name : "Anush",
    age : 22,
    email : "anushkorepu@gmail.com",
    courseList : ["Machine Learning", "Datascience" , "Nodejs"],
    address : {
        city : "Rajanna Sircilla",
        state : "Telangana",
        pincode : 504107
    }
}
console.log(Rekha);
console.log(Anush);
console.log(Deepthi);
