/// <reference types="Cypress" />

import { signUpPage } from '../../page-objects/SignUp-page';
import { loginPage } from '../../page-objects/login-page';


describe('SignUp Tests', () => {
    context('SignUp through UI', () => {
    // Hooks
    beforeEach(() => {
      // Intercept the request to the API
      cy.intercept('POST', '/users').as('users');
      signUpPage.visit();
    });

/*-------------------------------------------------------------------------------------------
1. Se crea un username random y se crea un nuevo usuario con ese username
2. Se loggea a la aplicacion con el nuevo usuario
-------------------------------------------------------------------------------------------*/

    context('Creacion de usurios - SignUp', () => {
      it('Deberia poder crearse un nuevo usuario', () => {

        const FIRST_USERNAME_AUTOMATION = "UsuarioPruebaAutomation";
        const LAST_USERNAME_AUTOMATION = "ApellidoPruebaAutomation";
        const PASSWORD_AUTOMATION = "s3cret";
        const USERNAME = (Math.random() + 1).toString(36).substring(7)             //generar un username random
        const SUCCESSFUL_LOGIN_TAG = "Get Started with Real World App";
        
        signUpPage.typeUserNewInfo({
          firstname: FIRST_USERNAME_AUTOMATION,
          lastname: LAST_USERNAME_AUTOMATION,
          username: USERNAME,             
          password: PASSWORD_AUTOMATION,
          confirmPassword: PASSWORD_AUTOMATION,
        });
        signUpPage.clickSignUp();
        cy.url().should('include', 'signin');  
        
        //--------------------Logearse con el usurio recien creado --------------------

        loginPage.typeCredentials({
          username: USERNAME,
          password: PASSWORD_AUTOMATION,
        });
        loginPage.clickSignIn();
        cy.contains(SUCCESSFUL_LOGIN_TAG).should('be.visible');
      });
    });
  });
});
