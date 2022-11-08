export const loginTest = () => {
  describe('login', () => {
    it('passes', () => {
      cy.visit('https://prisma-it.tst.prisma-it.com')
    })
    it('should have teo inputs', () => {
      cy.get('#emailaddress').should('be.visible')
      cy.get('#password').should('be.visible')
    });
    it('should have a login button', () => {
      cy.get('#userformsubmit').should('be.visible')
    });
    it('should be able to login', () => {
      cy.get('#emailaddress').type(Cypress.env('user'))
      cy.get('#password').type(Cypress.env('userPassword'))
      cy.get('#userformsubmit').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      cy.get('h2').contains('WELKOM')
      cy.get('.menuWelcomePage div').first().click()
      
      // cy.intercept({
      //     method: "GET",
      //     url: "/BlazeDS/editor/user/currentUser",
      //   }).as("dataGetFirst");
      // cy.wait("@dataGetFirst").its('response.statusCode').should('equal', 400);
      //   cy.reload()
      });
  })
  }
  
  loginTest()