class loginpage{

   
    username(Name){ 
    return cy.get('#name').type(Name)
}
     phonenumber(MobileNumber){
     return cy.get('#phone').type(MobileNumber)
     }
     email(EmailAddress){
        return cy.get('#email').type(EmailAddress)
       }
       password1(password){
        return cy.get('#password').type(password)
       }
       address(address){
        return cy.get('#address').type(address)
       }
       submit(){
        return cy.get(`button[name='submit']`).click()
       }
}

export default  new loginpage()