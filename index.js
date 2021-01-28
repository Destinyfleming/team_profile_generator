const inquirer = require('inquirer');
const fs = require('fs');
const jest = require("jest");
const engineer = require("./engineer.js");
const intern = require("./intern.js");
const manager = require("./manager.js");
const employee = require("./employee.js");

const questions = 
inquirer.prompt([  
    //name
    {
       type: 'input',
       message: 'enter employee name:',
       name: 'name',
   },
   //email
   {
       type: 'input',
       message: 'enter employee email',
       name: 'email',
   },   
   // employee id 
   {
       type: 'input',
       message: 'enter employee id',
       name: 'id',
   },   
]);

//create an empty array to store employees
const employees = []


//create functions
//to write html page














//invoke functions
getName()
getId()
getEmail()
getRole()