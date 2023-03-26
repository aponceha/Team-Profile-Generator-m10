#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');



let questionTree = "";
let team = [];
let member = [];
let teamCount = 1;


// Create an asynchronous function that creates an HTML file dynamically with a card for each team member in the team array

async function createHTML(teamArray) {
    let html = 
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>My Team</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`
}


async function startBuilder() {
while (questionTree !== "Finish building the team") {
if (questionTree === "") {
    const answers = await inquirer.prompt([
        {
        type: 'input',
        name: 'manager_name',
        message: "What is your team Manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your team Manager\'s name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is your team Manager's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager\'s employee ID!');
                    return false;
                    }
            }
        },
        {
            type: 'input',
            name: 'manager_email',
            message: "What is your team Manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager\'s email!');
                    return false;
                    }
            }
        },
        {
            type: 'input',
            name: 'manager_office_number',
            message: "What is your team Manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your team Manager\'s office number!');
                    return false;
                    }
            }
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Completed adding Manager. Now what would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
            validate: menuInput => {
                if (menuInput) {
                    return true;
                    
                } else {
                    console.log('Please select a valid option!');
                    return false;
                    }
            }
        }
    ])
    .then(answers => {
        if(answers.menu == 'Add an Engineer'){
            questionTree = answers.menu;
            team.push(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office_number);
            console.log(team);
            console.log(questionTree);                      
            }
        else if (answers.menu == 'Add an Intern'){
            questionTree = answers.menu;
            team.push(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office_number);
            console.log(team);
            console.log(questionTree);
        }
        else if (answers.menu == 'Finish building the team'){
            questionTree = answers.menu;
            team.push(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office_number);
            console.log(team);
            console.log(questionTree);
        }         
    })
}
else if (questionTree === "Add an Engineer"){
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: `engineer_name`,
            message: "What is your Engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: `engineer_id`,
            message: "What is your Engineer's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer\'s employee ID!');
                    return false;
                }
        }
        },
        {
            type: 'input',
            name: `engineer_email`,
            message: "What is your Engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer\'s email!');
                    return false;
                }
        }
        },
        {
            type: 'input',
            name: `engineer_github`,
            message: "What is your Engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer\'s GitHub username!');
                    return false;
        
                    }
            }
        },
        {
            type: 'list',
            name:'menu',
            message: 'Completed adding Engineer. What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
            validate: menuInput => {
                if (menuInput) {
                    return true;
                } else {
                    console.log('Please select a valid option!');
                    return false;
                
                }
            }
    
        }
        ])
        .then(answers => {
            if(answers.menu == 'Add an Engineer'){
                questionTree = answers.menu;
                teamCount++;
                team.push(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github);
                console.log(team);
                console.log(questionTree);                      
                }
            else if (answers.menu == 'Add an Intern'){
                questionTree = answers.menu;
                teamCount++;
                team.push(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github);
                console.log(team);
                console.log(questionTree);
            }
            else if (answers.menu == 'Finish building the team'){
                questionTree = answers.menu;
                teamCount++;
                team.push(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github);
                console.log(team);
                console.log(questionTree);
            }         
        })
}
else if (questionTree === "Add an Intern"){
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Intern\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Intern's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your Intern\'s employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Intern\'s email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'school',
            message: "What is your Intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your Intern\'s school!');
                    return false;
                }
             }
        },
        {
            type: 'list',
            name:'menu',
            message: 'Completed adding Intern. What would you like to do next?',
            choices: ['Add an Intern', 'Add an Engineer', 'Finish building the team'],
            validate: menuInput => {
                if (menuInput) {
                    return true;
                    } else {
                    console.log('Please select a valid option!');
                    return false;
                    }
                }
        }
        ])
       .then(answers => {
            if(answers.menu == 'Add an Intern'){
                questionTree = answers.menu;
                team.push(answers.name, answers.id, answers.email, answers.school);
                console.log(team);
                console.log(questionTree);                      
                }
            else if (answers.menu == 'Add an Engineer'){
                questionTree = answers.menu;
                team.push(answers.name, answers.id, answers.email, answers.school);
                console.log(team);
                console.log(questionTree);
            }
            else if (answers.menu == 'Finish building the team'){
                questionTree = answers.menu;
                team.push(answers.name, answers.id, answers.email, answers.school);
                console.log(team);
                console.log(questionTree);
            }
       })
}
else if (questionTree === "Finish building the team"){
    console.log(questionTree);
    console.log(team);
    const htmlPageContent = generateHTML(team);
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    createHTML(team);

   
}
}
}
startBuilder();
