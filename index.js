const inquirer = require('inquirer');
const fs = require('fs');

const engineer = require("./employee-types/engineer.js");
const intern = require("./employee-types/intern.js");
const manager = require("./employee-types/manager.js");
const employee = require("./employee-types/employee.js");

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
              employee.employeeQ()
              break;
              
            case ('intern'):
                console.log('new intern')
                intern.internQ()
                break;

            case ('engineer'):
                console.log('new engineer')
                engineer.engineerQ()
                break;
            
            case ('manager'):
                console.log('new manager')
                manager.managerQ()
                break;
        
            default:
              return ('there has been an error');
          }  
    })  
}

//create functions
//to write html page
const displayHTML = (url, res) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./example/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
};

function startApp(){
 displayHTML()
 userPrompt()
}
startApp();