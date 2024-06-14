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
    getPromote(newJobTitle, newPayRate)
    {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
}
getIntro() {
    let intro =
        "Hi! I'm " + this.getFullName() + " and I am a " +
        this.jobTitle;
        return intro;
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

employee1.jobTitle = 'Sr.graphic artists';
employee1.payRate = 65;

//  employee1.promote("Sr graphic artists", 65)

console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log("----------------------------------------------------------------")
let intro = employee1.getIntro();

console/log(intro);

