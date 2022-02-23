const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('getRole method', () => {
        it("returns manager's role", () => {
            const manager = new Manager('name','1','email@email.email', '12');
            expect(manager.getRole()).toBe('Manager');
        });
    });
    describe('getOfficeNumber method', () => {
        it("returns manager's office number", () => {
            const manager = new Manager('name','1','email@email.email', '12');
            expect(manager.getOfficeNumber()).toBe('12');
        });
    });
});