const Intern = require('../lib/Intern');

// test creates itnern object
test('creates an intern object', () => {
    const intern = new Intern('Steve', 22, 'steve@gmail.com', 'MIT');
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// tests get school function

test("gets intern's school", () => {
    const intern = new Intern('Steve', 22, 'steve@gmail.com', 'MIT');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// tests getRole function

test("gets intern's role", () => {
    const intern = new Intern('Steve', 22, 'steve@gmail.com', 'MIT');
    expect(intern.getRole()).toEqual("Intern");
});
