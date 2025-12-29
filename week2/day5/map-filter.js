
let numbers = [10, 20, 30, 40, 50];   // array of numbers

// map(): transforms each element and returns a NEW array
let quotientsOf5 = numbers.map((arrayElement) => {
    return arrayElement / 5;         // each element divided by 5
});
console.log(quotientsOf5);           // [2, 4, 6, 8, 10]

// filter(): selects elements based on condition and returns a NEW array
let lessThan30 = numbers.filter((element) => {
    return element < 30;             // keeps only elements less than 30
});
console.log(lessThan30);             // [10, 20]

// array of employee objects
let employees = [
    {name:'dravid', sal:20000},
    {name:'rohit', sal:30000},
    {name:'dhoni', sal:25000}
];

// map(): extract only names from employee objects
let names = employees.map((emp) => {
    return emp.name;                 // picks 'name' property from each object
});
console.log(names);                  // ['dravid', 'rohit', 'dhoni']

// filter(): selects employees with salary <= 25000
let filteredEmps = employees.filter((emp) => {
    return emp.sal <= 25000;         // condition on salary
});
console.log(filteredEmps);           // dravid and dhoni objects

// reduce(): reduces array to a single value (total salary)
let totalSal = employees.reduce((sum, emp) => {
    return sum + emp.sal;            // adds each employee salary to sum
}, 0);                               // 0 is the initial value of sum

console.log("Total salary = ", totalSal); // Total salary = 75000
