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
var updatedStudent = updateStudent(student, { name: "Anush Korepu", email: "anushkorepu@gmail.com" });
console.log(updatedStudent);
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
/*function isteamLead(emp : Employee[]){
   emp.forEach(e => {
       if(e.isteamLead){
         console.log(e.name, "is teamLead");
        }
   else{
       console.log(e.name, "is not teamLead");
    }
   });
}*/
function isTeamLead(employee, employees) {
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var emp = employees_1[_i];
        if (emp.teamLead && emp.teamLead.id === employee.id) {
            console.log(employee.name, "is a teamLead");
            return;
        }
    }
    console.log(employee.name, "is not a teamLead");
}
var Employeearray = [
    { id: 100, name: "Akhila", Department: "Development" },
    { id: 200, name: "shravani", Department: "Management", teamLead: { id: 100, name: "Akhila", Department: "Development" } },
    { id: 300, name: "Lavanya", Department: "Management" },
    { id: 400, name: "Deepthi", Department: "Development", teamLead: { id: 300, name: "Lavanya", Department: "Management" } }
];
//isteamLead(Employeearray);
/*isTeamLead(Employeearray[0], Employeearray);
isTeamLead(Employeearray[1], Employeearray);
isTeamLead(Employeearray[2], Employeearray);
isTeamLead(Employeearray[3], Employeearray);*/
for (var i = 0; i < Employeearray.length; i++) {
    isTeamLead(Employeearray[i], Employeearray);
}
