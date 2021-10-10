/// <reference types="Cypress" />

import { signUpPage } from '../../page-objects/SignUp-page';

describe('SignUp Tests', () => {
    context('SignUp through UI', () => {
    // Hooks
    beforeEach(() => {
      // Intercept the request to the API
      cy.intercept('POST', '/users').as('users');
      signUpPage.visit();
    });

    context('Positive Scenarios', () => {
      it('should sign up a new user - POM', () => {
        signUpPage.typeUserNewInfo({
          firstname: Cypress.env('margarettaUser'),
          lastname: Cypress.env('margarettaUser'),
          username: (Math.random() + 1).toString(36).substring(7),
          password: Cypress.env('margarettaPassword'),
          confirmPassword: Cypress.env('margarettaPassword'),
        });
        signUpPage.clickSignUp();
        cy.url().should('include', 'signin');
      //  cy.contains(Cypress.env('margarettaUser')).should('be.visible');
      });
    });
  });
});
