const employee = require("./employee.js");

describe("employee", () => {
    it("should grab employee name", () => {
       const employee = new employee('Tammy', 'tammy@gmail.com', 'employee', 1 )
       console.log(employee.name)
       expect(typeof employee.name).toEqual('Tammy')
    });
    it("should check employee email", () => {
       const employee = new employee('Tammy', 'tammy@gmail.com', 'employee', 1 )
       console.log(employee.email)
       expect(typeof employee.email).toEqual('tammy@gmail.com')
    });
    it("should check employee role", () => {
        const employee = new employee('Tammy', 'tammy@gmail.com', 'employee', 1 )
        console.log(employee.role)
        expect(typeof employee.role).toEqual('employee')
    });
     it("check employee id", () => {
        const employee = new employee('Tammy', 'tammy@gmail.com', 'employee', 1 )
        console.log(employee.id)
        expect(typeof employee.id).toEqual(1)
    }); 
});