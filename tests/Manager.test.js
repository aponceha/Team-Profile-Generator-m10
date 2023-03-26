const Manager = require('../lib/Manager');

// create Manager Object

test('creates a Manager object', () => {
    const manager = new Manager('Bob', 33, 'bob@gmail.com', 123);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// test get Role function

test("gets manager's role", () => {
    const manager = new Manager('Bob', 33, 'bob@gmail.com', 123);
    expect(manager.getRole()).toEqual("Manager");
});

