//==================TASK-1============================================================
interface Student {
    name: string;
    age: number;
    email: string;
    courseList: string[];
    address: Address;
}
interface Address {
    city: string;
    state: string;
    pincode: string;
}

type StudentKeys = keyof Student;
//type UpdateProps = Pick<Student, StudentKeys>;
type UpdateProps = Pick<Student, 'name' | 'email'>


function updateStudent(student: Student, updates: UpdateProps): Student {
    return { ...student, ...updates };
}

const student: Student = {
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


const updatedStudent = updateStudent(student, { name: "Anush Korepu", email: "anushkorepu@gmail.com"});
console.log(updatedStudent);

//============================Task-2=============================================


type StringCheck<T> = T extends string ? "Yes" : "No";
/*function StringCheck<T> (input: T): "Yes" | "No" {
    if(typeof input === "string"){
        return "Yes";
    }
    else{
        return "No";
    }
}
console.log(StringCheck("Rekha"));
console.log(StringCheck(30)); */

//=========================Task-3======================================

interface Employee {
    id: number,
    name: string,
    Department: string,
    teamLead?: Employee,
    isteamLead?: boolean
    
}

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
function isTeamLead(employee: Employee, employees: Employee[]): void{
    for (const emp of employees) {
        if (emp.teamLead && emp.teamLead.id === employee.id) {
            console.log(employee.name, "is a teamLead");
            return;
        }
    }
    console.log(employee.name, "is not a teamLead");
}

const Employeearray: Employee[] = [
    {id: 100 , name: "Akhila", Department : "Development"},
    {id: 200, name: "shravani", Department: "Management", teamLead: {id: 100 , name: "Akhila", Department : "Development"}},
    {id: 300, name: "Lavanya", Department: "Management" },
    {id: 400, name: "Deepthi", Department: "Development", teamLead: {id: 300, name: "Lavanya", Department: "Management"}}
 ];

 for(let i=0;i<Employeearray.length;i++){
    isTeamLead(Employeearray[i], Employeearray);
}



