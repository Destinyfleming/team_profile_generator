const inquirer = require('inquirer');
const fs = require('fs');

//create questions about interns
function internQ(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'enter intern name:',
            name: 'name',
        },
        //email
        {
            type: 'input',
            message: 'enter intern email',
            name: 'email',
        },   
        // intern id 
        {
            type: 'input',
            message: 'enter intern id',
            name: 'id',
        },   
        //school
        {
            type: 'input',
            message: 'enter interns school',
            name: 'school',
        }
    ])
}


const intern ={
    
    constructor(name, email, id, school){
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
    
    //get school
    getSchool(){
        return this.school
    }

}

//export
module.exports = intern
module.exports = internQ