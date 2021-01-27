const inquirer = require('inquirer');
const fs = require('fs');

//create questions about employees
const questions = [  
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
];

//create an empty array to store employees
const employees = []
//create functions
//invoke functions
getName()
getId()
getEmail()
getRole()
