const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getRole() {
        console.log(this.role);
        return this.role;
    }
    getSchool() {
        console.log(this.school);
        return this.school;
    }
}
module.exports = Intern;