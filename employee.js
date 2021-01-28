const inquirer = require('inquirer');

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
const employee = {

    constructor(name, email, id){
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

}

//export
module.exports = employee