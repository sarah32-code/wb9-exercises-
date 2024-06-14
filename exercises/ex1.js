class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
        this.fullName = this.firstName + '' + this.lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}
let emp = new Employee();

// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);
// console.log(`Employee ${employee1.firstName} created`);

let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

employee1.lastName = "Simth"
employee1.fullName = "Ian Smith"
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
