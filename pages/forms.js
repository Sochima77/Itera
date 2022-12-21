

class forms{

       radiobutton1(){
        return cy.get('#female').check().should('be.checked')
       }
       radiobutton2(){
        return cy.get('#male').check().should('be.checked')
       }

       checkboxfirst(){
        return cy.get('#monday').first().check()
       }
       checkboxmiddle(){
        return cy.get('#wednesday').check().should('be.checked')
       }
       checkboxlast(){
        return cy.get('#sunday').check().should('be.checked')
       }

}

export default  new forms()