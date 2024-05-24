var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateStudent(student, updates) {
    return __assign(__assign({}, student), updates);
}
var student = {
    name: "Rekha Korepu",
    age: 20,
    email: "rekhakorepu@gmail.com",
    courseList: ["java", "react", "js"],
    address: {
        city: "Rajanna sircilla",
        state: "Telangana",
        pincode: "505404"
    }
};
var updatedStudent = updateStudent(student, { name: "Anush Korepu", email: "anushkorepu@gmail.com", age: 30, courseList: ["ML"] });
console.log(updatedStudent);
//============================Task-2=============================================
//type StringCheck<T> = T extends string ? "Yes" : "No";
function StringCheck(input) {
    if (typeof input === "string") {
        return "Yes";
    }
    else {
        return "No";
    }
}
console.log(StringCheck("Rekha"));
console.log(StringCheck(30));
//=========================Task-4=============================
/*function isteamLead(emp : Employee[], name: string){
   let flag: number =0;
   emp.forEach(e => {
       if(e.teamLead){
       if(e.teamLead.name === name){
           console.log(name, "is teamLead");
           flag=1;
       }
   }})
   if(flag === 0){
       console.log(name, "is not teamLead");
   }
}*/
function isteamLead(emp) {
    emp.forEach(function (e) {
        if (e.isteamLead) {
            console.log(e.name, "is teamLead");
        }
        else {
            console.log(e.name, "is not teamLead");
        }
    });
}
var Employeearray = [
    { id: 100, name: "Akhila", Department: "Development", isteamLead: true },
    { id: 200, name: "shravani", Department: "Management", isteamLead: false, teamLead: { id: 100, name: "Akhila", Department: "Development", isteamLead: false } },
    { id: 300, name: "Lavanya", Department: "Management", isteamLead: true },
    { id: 400, name: "Deepthi", Department: "Development", isteamLead: false, teamLead: { id: 300, name: "Lavanya", Department: "Management", isteamLead: true } }
];
isteamLead(Employeearray);
