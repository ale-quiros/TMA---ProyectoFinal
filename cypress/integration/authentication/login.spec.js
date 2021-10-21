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

/*---------------------------------------------------------------------------------------------
1. Se obtienen los credenciales (username y password) de las variables de ambiente 
2. Una vez logeado el usurio se verifica que se estéen la url correcta y que el 
nombre del usurio sea desplegado en la pagina
------------------------------------------------------------------------------------------------*/

    context('Autenticacion de usuarios - SignIn', () => {
      it('Un usuario existente deberia poder loggearse en la aplicacion', () => {
        loginPage.typeCredentials({
          username: Cypress.env('testUserUser'),
          password: Cypress.env('testUserPassword'),
        });
        loginPage.clickSignIn();
        cy.url().should('include', '/');
        cy.contains(Cypress.env('testUserUser')).should('be.visible');
      });
    });
  });
});
