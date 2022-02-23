const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('getRole method', () => {
        it("returns intern's role", () => {
            const intern = new Intern('name','1','email@email.email', 'school');
            expect(intern.getRole()).toBe('Intern');
        });
    });
    describe('getSchool method', () => {
        it("returns intern's school", () => {
            const intern = new Intern('name','1','email@email.email', 'school');
            expect(intern.getSchool()).toBe('school');
        });
    });
});