const inquirer = require("inquirer");

const fs = require("fs");

const generateHTML = require("./src/generateHTML.js");


const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

let employees = [];


const validateInput = (userInput) => {
    if (userInput === "") {
        return "Please enter a valid input.";
    } else {
        return true;
    }
};

const questions = async () => {
    
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
                validate: validateInput,
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "id",
                validate: validateInput,
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
                validate: validateInput,
            },
            {
                type: "list",
                message: "What is your role",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"],
                
            },
        ]);

        if (answers.role === "Manager") {
            const managerAns = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "officeNumber",
                        validate: validateInput,
                    },
                
                ]);
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                managerAns.officeNumber
            );
            employees.push(newManager);
    
        } else if (answers.role === "Engineer") {
            const engineerAns = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your GitHub username?",
                        name: "github",
                        validate: validateInput,
                    },
                ]);
            const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                engineerAns.github
            );
            employees.push(newEngineer);
        }
        else if (answers.role === "Intern") {
            const internAns = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your school?",
                        name: "school",
                        validate: validateInput,
                    },
                ]);
            const newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                internAns.school
            );
            employees.push(newIntern);
        }
};
async function promptQuestions(){
    await questions()

    const addMemberAns = await inquirer
        .prompt([
            {
                name: 'addMember',
                type: 'list',
                choices: ['Add a new team member', 'Finish building my team'],
                Message: 'Would would you like to do next?'
            }
        ])
        if (addMemberAns.addMember === 'Add a new team member') {
            return promptQuestions();
        } else {
            // return generateHTML;
            console.log(employees)
            return createTeam();
        }
}

promptQuestions();

function createTeam () {

    fs.writeFileSync("./dist/profiles.html",generateHTML(employees), (err) => {
        if (err) {
            console.log(err);
        }
        else
        {
            console.log("HTML Created. Success! Your team profile has been generated.");
        }
    }
)};
