const inquirer = require('inquirer');
const fs = require('fs');

//create questions about employees
const engineerQ = [  
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

const engineer = {

    constructor(name, email, id, github){
        this.name = name;
        this.email = email;
        this.id = id;
    },
    //create functions
    //get id 
    getID(){
        return this.id
    }, 

    //get email 
    getEmail(){
        return this.email
    }, 

    //get role
    getRole(){
        return this.role
    }, 

    //get name
    getName(){
        return this.name
    }, 

    //get github
    getGithub(){
        return this.github
    }, 


}

//export
module.exports = engineer , engineerQ