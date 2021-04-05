const inquirer = require('inquirer');
//create questions about employees
function employeeQ(){
    inquirer.prompt([
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
    ])
} 
const employee = {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
    },
    
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
module.exports = {employeeQ, employee}