const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('getRole method', () => {
        it("returns engineer's role", () => {
            const engineer = new Engineer('name','1','email@email.email', 'engineer1');
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
    describe('getGithub method', () => {
        it("returns engineer's github", () => {
            const engineer = new Engineer('name','1','email@email.email', 'engineer1');
            expect(engineer.getGithub()).toBe('engineer1');
        });
    });
});