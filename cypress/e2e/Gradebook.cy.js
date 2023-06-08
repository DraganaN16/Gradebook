// <reference types='cypress'/>


let user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }


before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

beforeEach(() => {  //ukviru describe bloka, pre svega
    cy.visit("login");
  })

  afterEach(() =>{
    cy.wait(3000);
  })

  describe("Register page - PO", () => {

    it("Registration with valid credentials", () => {
      cy.get("#first_name").type("Pera");
      cy.get("#last_name").type("Peric");
      cy.get('#email').type("")
      cy.get("#password").type("");
      cy.get("#password_confirmation").type()
      cy.get("label[class='custom-control-label']").click()
      cy.get("button[class='btn btn-outline-primary']").click()
      cy.wait(3000);
    })


    it("Login with valid credentials", () => {
        cy.visit("https://gradebook.vivifyideas.com/login")
        cy.get("#email").type("dragananikolic160685@gmail.com");
        cy.get("#userPassword").type("pokusavam100")
        cy.get("button[type='submit']").click();
        cy.get('button[aria-label="Toggle navigation"]').click()
        a[href="/gradebook/create"]
      })

      it("Create gradebook", () => {
        cy.visiy("gradebooks")
        cy.get('button[aria-label="Toggle navigation"]').click()
        cy.get('a[href="/gradebook/create"]').clik()
        cy.get("#name").type()
        cy.get('[id="__BVID__60"]').click();
        // kako izabrati
        cy.get('button[class="btn btn-submit btn-primary"]').click();
      })


  });