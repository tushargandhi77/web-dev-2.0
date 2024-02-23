const employees = [
    { name: "John", skills: ['Java', 'JavaScript', 'SQL'], salary: 50000 },
    { name: "Alice", skills: ['Python', 'HTML', 'CSS'], salary: 45000 },
    { name: "Bob", skills: ['C++', 'React', 'Node.js'], salary: 55000 }
];

const display = (a)=>{
    a.forEach(aa=>console.log(`${aa.name} having skills ${aa.skills.join(' ')}`))
}

// a
display(employees)


// b
const sortedEmployees = employees.slice().sort((a,b)=>a.name.localeCompare(b.name))

display(sortedEmployees)

// c
const highestPaidEmployee = employees.reduce((highestPaid, currentEmployee) => {
    return (currentEmployee.salary > highestPaid.salary) ? currentEmployee : highestPaid;
}, employees[0]);

console.log(`The highest-paid employee is ${highestPaidEmployee.name} with a salary of ${highestPaidEmployee.salary}`);

const allSkills = employees.reduce((skills, employee) => {
    return [...skills, ...employee.skills];
}, []);


//d 
const uniqueSkills = [...new Set(allSkills)];

console.log("Unique skills in the company:", uniqueSkills);