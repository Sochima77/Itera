class dropdown{

    dropdownNorway(Norway){
        return cy.get('.custom-select').select(Norway)
    }
    dropdownMalta(Malta){
        return cy.get('.custom-select').select(Malta)
    }
}
export default new  dropdown