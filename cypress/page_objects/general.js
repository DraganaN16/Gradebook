class General{
    get registerTitle(){
        return cy.get('h4[xpath="1"]')
    }
    get loginTile(){
        return cy.get('h4[xpath="1"]')
    }
    get gradebookTitle(){
        return cy.get('h1[xpath="1"]')
    }
    get heading(){
        return cy.get('h1[class="heading"]')
    }
}
export const general = new General();