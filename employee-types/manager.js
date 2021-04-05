const inquirer = require('inquirer');
const fs = require('fs');

function managerQ(){
    inquirer.prompt([
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
    ])
}

const manager ={

    constructor(name, email, id, officeNum){
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

    //office number
    getOffice(){
        return this.officeNum
    }
}

//export
module.exports = {manager , managerQ}