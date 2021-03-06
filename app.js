// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employee = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const manager = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the Team Manager\'s Name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your ID number?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
      },
      {
        type: 'list',
        name: 'members',
        message: 'Would you like to add another team member?',
        choices: ['Yes', 'No'],
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      employee.push(manager);
      console.log(employee);
      if (data.members === 'Yes') {
        start()
      }
      else {
        let newFile = render(employee);
        fs.writeFile(outputPath, newFile, (err) => {
          if (err) throw err;
          console.log('Your file has been created!')
        });
        return;
      }
    });
};
manager();
const start = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What is the the team member\'s role?',
        name: 'role',
        choices: ['Engineer', 'Intern'],
      }
    ])
    .then((data => {
      if (data.role === 'Engineer') {
        engineerQuestions();
      } else if (data.role === 'Intern') {
        internQuestions();
      } else {
        return;
      }
    }))
}

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the Engineers name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your ID number?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'list',
        name: 'members',
        message: 'Would you like to add another team member?',
        choices: ['Yes', 'No'],
      },
    ])
    .then((data) => {
      const engineer = new Engineer(data.name, data.id, data.email, data.github);
      employee.push(engineer);
      console.log(employee);
      if (data.members === 'Yes') {
        start()
      }
      else {
        let newFile = render(employee);
        fs.writeFile(outputPath, newFile, (err) => {
          if (err) throw err;
          console.log('Your file has been created!')
        });
        return;
      }
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your ID number?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What school did you attend?',
        name: 'school',
      },
      {
        type: 'list',
        name: 'members',
        message: 'Would you like to add another team member?',
        choices: ['Yes', 'No'],
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employee.push(intern);
      console.log(employee);
      if (data.members === 'Yes') {
        start()
      }
      else {
        let newFile = render(employee);
        fs.writeFile(outputPath, newFile, (err) => {
          if (err) throw err;
          console.log('Your file has been created!')
        });
        return;
      }
    });
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
