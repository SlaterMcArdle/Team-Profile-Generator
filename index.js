// NPM Packages
const inquirer = require('inquirer');
const fs = require('fs');
// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Helper functions
const generateHTML = require('./src/generateHTML');
const generateCardSection = require('./src/generateCardSection');
// Global variables
const userArray = [];

const saveUserInfo = (userInfo) => {
    if (fs.access('users.json', fs.F_OK, (err) => {if(err) {console.log("file doesn't exist yet")}})) {
        const users = fs.readFileSync('users.json', (err) => {
            console.log('error reading users file');
        });
        users.push(userInfo);
    } else {
        users = [userInfo];
    }
    fs.writeFileSync('users.json', users, (err) => {
        if (err) {
            console.log('error saving user data!');
        } else {
            console.log('user data saved successfully!');
        }
    });
};

// recurring add employee inquirer prompts
const addEmployee = () => {    
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Add another employee?',
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },
    ]).then((data) => {
        if (data.addEmployee == 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Manager name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Manager Id?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Manager email?',
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'Manager office number?',
                },
            ]).then((data) => {
                let employee = new Manager(data.name, data.id, data.email, data.office);
                userArray.push(employee);
                addEmployee();
            });
        } else if (data.addEmployee == 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Engineer name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Engineer Id?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Engineer email?',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Engineer github?',
                },
            ]).then((data) => {
                let employee = new Engineer(data.name, data.id, data.email, data.github);
                userArray.push(employee);
                addEmployee();
            });
        } else if (data.addEmployee == 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Intern name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Intern Id?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Intern email?',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Intern school?',
                },
            ]).then((data) => {
                let employee = new Intern(data.name, data.id, data.email, data.school);
                userArray.push(employee);
                addEmployee();
            });
        } else {
            const teamPage = generateHTML(generateCardSection(userArray));
            fs.writeFileSync('./dist/index.html', teamPage, (err) => {
                err ? console.log(err) : console.log('success!');
            });
            return;
        }
    });
};

// initial add manager inquirer prompt
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Manager name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Manager Id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Manager email?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'Manager office number?',
    },
]).then((data) => {
    let manager = new Manager(data.name, data.id, data.email, data.office);
    userArray.push(manager);
    addEmployee();
});