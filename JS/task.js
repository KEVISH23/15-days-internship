let employee = [
    {
        id: 101,
        name: "Akhil",
        age: 25,
        salary:80000,
    },
    {
        id: 102,
        name: "kevish",
        age: 25,
        salary:75000,
    },
    {
        id: 103,
        name: "nikhil",
        age: 55,
        salary:55000,
    },
    {
        id: 202,
        name: "Sarthak",
        age: 25,
        salary:100000,
    },
    {
        id: 105,
        name: "vatsal",
        age: 25,
        salary:90000,
    },
    {
        id: 106,
        name: "Suresh",
        age: 80,
        salary:50000,
    },
    {
        id: 107,
        name: "Shami",
        age: 25,
        salary:45000,
    },
    {
        id: 108,
        name: "Srivalli",
        age: 25,
        salary:500000,
    },
];


/* *task 1 find employee, name starting with S */

// let empNameWithS = employee.filter(value => value.name.charAt(0) == 'S');
// empNameWithS.map((value) => {
//     document.write("Id: " + value.id +"  ")
//     document.write("Name: " + value.name + " ")
//     document.write("Age: " + value.age + " ")
//     document.write("Salary: " + value.salary + " ")
//     document.write("<br>")
// })


/* *task 2 find employee, age is greater than 50 */

// let empGtAge = employee.filter(value => value.age > 50);
// empGtAge.map((value) => {
//     document.write("Id: " + value.id +"  ")
//     document.write("Name: " + value.name + " ")
//     document.write("Age: " + value.age + " ")
//     document.write("Salary: " + value.salary + " ")
//     document.write("<br>")
// })

/* *task 3 find employee, id = 101 */

// let empID = employee.filter(value => value.id === 101   );
// empID.map((value) => {
//     document.write("Id: " + value.id +"  ")
//     document.write("Name: " + value.name + " ")
//     document.write("Age: " + value.age + " ")
//     document.write("Salary: " + value.salary + " ")
//     document.write("<br>")
// })

/* *task 4 increase salary with 10000 */

// employee.map((value) => {
//     value.salary += 10000;
// })

// employee.map((value) => {
//     document.write("Id: " + value.id +"  ")
//     document.write("Name: " + value.name + " ")
//     document.write("Age: " + value.age + " ")
//     document.write("Salary: " + value.salary + " ")
//     document.write("<br>")
// })

/* *task 5 add employee at position 3 */

// let newEmployee = {
//     id: 150,
//     name: "Bahubali",
//     age: 36,
//     salary:120000,
// }
// employee.splice(3, 0, newEmployee);
// employee.map((value) => {
//     document.write("Id: " + value.id +"  ")
//     document.write("Name: " + value.name + " ")
//     document.write("Age: " + value.age + " ")
//     document.write("Salary: " + value.salary + " ")
//     document.write("<br>")
// })

/* *task 6 delete employee at position 2 */


// employee.splice(2, 1);
// employee.map((value) => {
//     document.write("Id: " + value.id +"  ")
//     document.write("Name: " + value.name + " ")
//     document.write("Age: " + value.age + " ")
//     document.write("Salary: " + value.salary + " ")
//     document.write("<br>")
// })

/* *task 7 find index of employee with id 202 */

// let indOf = employee.indexOf(employee.id == 202);
// document.write(indOf)  //wrong

// let indOf = employee.findIndex((value) => {
//     return value.id === 202
// })
// if (indOf === -1) {
//     document.write("No employee has given id")
// } else {
//     document.write("Index is " + indOf)
// }    //right

/* *task 8 find an employee having salary less than 100 */

// let lessThanSalary = employee.filter(value => value.salary < 100)
// if (lessThanSalary.length > 0) {
//     document.write("Number of employee having salary less than 100 are :- " + lessThanSalary.length)
// } else {
//     document.write("Everyone has salary greater than 100")
// }

/* * task 9 Create a new array and add an additional property upperName which will have all names in uppercase */

// let changeArray = employee.map((value,index) => {
//     return { uprName : value.name.toUpperCase(),...value }
// })

// console.log(changeArray)        