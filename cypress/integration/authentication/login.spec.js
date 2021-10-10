/// <reference types="Cypress" />

import { loginPage } from '../../page-objects/login-page';

describe('Login Tests', () => {
    context('Login through UI', () => {
    // Hooks
    beforeEach(() => {
      // Intercept the request to the API
      cy.intercept('POST', '/login').as('login');
      loginPage.visit();
    });

    context('Positive Scenarios', () => {
      it('should log in - POM', () => {
        loginPage.typeCredentials({
          username: Cypress.env('margarettaUser'),
          password: Cypress.env('margarettaPassword'),
        });
        loginPage.clickSignIn();
        cy.url().should('include', '/');
        cy.contains(Cypress.env('margarettaUser')).should('be.visible');
      });
    });
  });
});
