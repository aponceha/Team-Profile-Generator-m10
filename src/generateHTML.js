
// Generate Manager Card
const generateManager = function (manager) {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}
// Generate Engineer Card
const generateEngineer = function (engineer) {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-laptop mr-2"></i>${engineer.role}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">Github: ${engineer.github}</p>
        </div>
    </div>
    `;
}
// Generate Intern Card
const generateIntern = function (intern) {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-graduation-cap mr-2"></i>${intern.role}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
    `;
}

// Generate HTML

generateHTML = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        console.log(employee);
        const role = employee.getRole();
        let card = "";

        if (role === "Manager") {
            const card = generateManager(employee);
            cardArray.push(card);
        }

        if (role === "Engineer") {
            card = generateEngineer(employee);
            cardArray.push(card);
            console.log("engineerCreate");
            
        }

        if (role === "Intern") {
            card = generateIntern(employee);
            cardArray.push(card);
        }

        
    }

    const employeeCards = cardArray.join("");

    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <main>
            <div class="container">
                <div class="row">
                ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </html>   
    `
}

module.exports = generateHTML;