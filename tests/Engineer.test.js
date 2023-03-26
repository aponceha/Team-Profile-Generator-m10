const Engineer = require('../lib/Engineer');

// creates engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Sally', 11, 'sally@gmail.com', 'sallygit');
    expect(engineer.github).toEqual(expect.any(String));
});

// tests get github function

test("gets engineer's github", () => {
    const engineer = new Engineer('Sally', 11, 'sally@gmail.com', 'sallygit');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// tests getRole function

test("gets engineer's role", () => {
    const engineer = new Engineer('Sally', 11, 'sally@gmail.com', 'sallygit');
    expect(engineer.getRole()).toEqual("Engineer");
});