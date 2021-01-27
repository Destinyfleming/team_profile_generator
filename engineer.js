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
    //github
    {
        type: 'input',
        message: 'enter employee github',
        name: 'github',
    },
];

//create an empty array to store engineers
const engineers = []
//create functions
//invoke functions
getName()
getId()
getEmail()
getRole()
getGithub()