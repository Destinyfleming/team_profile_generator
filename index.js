const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");
const engineer = require("./engineer.js");
const intern = require("./intern.js");
const manager = require("./manager.js");
const employee = require("./employee.js");


//create an empty array to store employees
const employees = []


//prompt user
function userPrompt(){
    inquirer.prompt([
        {
         type: "list",
         name: "role",
         message: "what is your role?",
         choices: ['engineer', 'intern', 'manager', 'employee']
        },
    ]).then(function (res) {

        switch (res) {
            case (res.role === employee):
              console.log('new employee')
              return inquirer.prompt([employeeQ])
              
            case (res.role === intern):
                console.log('new intern')
                return inquirer.prompt([internQ])

            case (res.role === engineer):
                console.log('new engineer')
                return inquirer.prompt([engineerQ])
            
            case (res.role === manager):
                console.log('new manager')
                return inquirer.prompt([managerQ])
        
            default:
              return ('there has been an error');
          }  
    })  
}

//create functions
//to write html page
const displayHTML = (url, res) => {
    const myHTML = `
    <html>
      <body>
        <h1> Team Member </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};






userPrompt()






//invoke functions
/*getName()
getId()
getEmail()
getRole()*/
userPrompt()