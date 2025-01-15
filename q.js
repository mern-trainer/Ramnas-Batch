const employees = [
    { name: "Alice Chen", age: 30, salary: 70000, department: "Engineering" },
    { name: "Robert Smith", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charles Lee", age: 35, salary: 65000, department: "Engineering" },
    { name: "David Kim", age: 50, salary: 90000, department: "Management" },
    { name: "Evelyn Brown", age: 28, salary: 50000, department: "Marketing" },
    { name: "Franklin White", age: 40, salary: 75000, department: "Finance" },
    { name: "Gabriella Davis", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah Martin", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac Taylor", age: 38, salary: 68000, department: "HR" },
    { name: "Jackson Jackson", age: 42, salary: 72000, department: "Finance" },
    { name: "Katherine Brooks", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leonard Jenkins", age: 33, salary: 58000, department: "HR" },
    { name: "Molly Rodriguez", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nicole Lewis", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver Hall", age: 36, salary: 73000, department: "Management" }
];

const res = employees.filter(employee => {
    return employee.department == "Marketing" || employee.department == "HR"
}).map((employee) => {
    return employee.name
})

console.log(res);