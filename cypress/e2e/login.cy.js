
describe("test de connexion invalide", () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  context('test email invalide', () => {
    it('test email invalide', () => {
      cy.get('button').contains('Login').click()
      cy.get('input[type="email"]').type('user')
      cy.get('input[type="password"]').type('password')
      cy.get('button').contains('Submit').click()
    })
  })
  context('test mot de passe invalide', () => {
    it('test mot de passe invalide', () => {
      cy.get('button').contains('Login').click()
      cy.get('input[type="email"]').type('user@gmail.com')
      cy.get('input[type="password"]').type('wrongpassword')
      cy.get('button').contains('Submit').click()
    })
  })
})

describe('test de connexion valide', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('test connexion en tant qu\'utilisateur', () => {
    cy.get('button').contains('Login').click()
    cy.get('input[type="email"]').type('user@gmail.com')
    cy.get('input[type="password"]').type('password')
    cy.get('button').contains('Submit').click()
    cy.url().should('include', '/shop')
    cy.get('[data-cy="btn_user"]').should('be.visible')
    cy.get('[data-cy="btn_logout"]').should('be.visible')
    cy.get('[data-cy="btn_login"]').should('not.exist')
    cy.wait(500)
  })


  it('test connexion en tant qu\'admin', () => {
    cy.get('button').contains('Login').click()
    cy.get('input[type="email"]').type('admin@gmail.com')
    cy.get('input[type="password"]').type('password')
    cy.get('button').contains('Submit').click()
    cy.url().should('include', '/admin')
    cy.wait(500)
  })
})