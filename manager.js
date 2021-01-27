const inquirer = require('inquirer');
const fs = require('fs');

//create questions about employees
const questions = [  
     //name
     {
        type: 'input',
        message: 'enter manager name:',
        name: 'name',
    },
    //email
    {
        type: 'input',
        message: 'enter manager email',
        name: 'email',
    },   
    // employee id 
    {
        type: 'input',
        message: 'enter manager id',
        name: 'id',
    }, 
    //office number
    {
        type: 'input',
        message: 'enter manager office number',
        name: 'officeNum',
    },  
];

//create an empty array to store managers
const managers = []
//create functions
//invoke functions
getName()
getId()
getEmail()
getRole()