const inquirer = require('inquirer');
const fs = require('fs');
const engineerQ = require("./engineer.js");
const internQ = require("./intern.js");
const managerQ = require("./manager.js");
const employeeQ = require("./employee.js");

//create an empty array to store employees
const employees = []

//prompt user
function userPrompt(){
    return inquirer.prompt([
        {
         type: "list",
         name: "role",
         message: "what is your role?",
         choices: [
             'engineer',
              'intern', 
              'manager', 
              'employee'
            ]},
    ]).then(function (res) {
        switch (res.role) {
            case ('employee'):
            console.log('new employee')
              employeeQ
              break;
              
            case ('intern'):
                console.log('new intern')
                internQ()
                break;

            case ('engineer'):
                console.log('new engineer')
                engineerQ()
                break;
            
            case ('manager'):
                console.log('new manager')
                managerQ()
                break;
        
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

//invoke functions
/*getName()
getId()
getEmail()
getRole()*/
 userPrompt()