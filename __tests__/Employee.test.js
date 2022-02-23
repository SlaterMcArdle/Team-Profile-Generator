const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName method', () => {
        it("returns employee's name", () => {
            const employee = new Employee('name','1','email@email.email');
            expect(employee.getName()).toBe('name');
        });
    });
    describe('getId method', () => {
        it("returns employee's Id", () => {
            const employee = new Employee('name','1','email@email.email');
            expect(employee.getId()).toBe('1');
        });
    });
    describe('getEmail method', () => {
        it("returns employee's email", () => {
            const employee = new Employee('name','1','email@email.email');
            expect(employee.getEmail()).toBe('email@email.email');
        });
    });
    describe('getRole method', () => {
        it("returns employee's role", () => {
            const employee = new Employee('name','1','email@email.email');
            expect(employee.getRole()).toBe('Employee');
        });
    });
});