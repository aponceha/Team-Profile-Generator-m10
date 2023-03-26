const Employee = require('../lib/Employee');


// Constructor Test 



test('creates an employee object', () => {
    const employee = new Employee('Jake', 22, 'jake@gmail.com');

    expect(employee.name).toBe('Jake');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets name from getname function

test("gets employee's name", () => {
    const employee = new Employee('Jake', 22, 'jake@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
}); 

// gets ID from getid function

test("gets employee's id", () => {
    const employee = new Employee('Jake', 22, 'jake@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email from getemail function

test("gets employee's email", () => {
    const employee = new Employee('Jake', 22, 'jake@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// gets role from getrole function

test("gets employee's role", () => {
    const employee = new Employee('Jake', 22, 'jake@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});
