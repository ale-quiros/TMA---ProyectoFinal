/// <reference types="Cypress" />

import { bankAccountPage } from "../../page-objects/bankAccount-page";

describe('Login UsingAPI', () => {
  context('Login through API', () => {
    beforeEach(() => {
      cy.apiLogin(Cypress.env('margarettaUser'), Cypress.env('margarettaPassword'));
    });

    it('should Create a bank account', () => {
      cy.visit('/bankaccounts');
      bankAccountPage.clickCreateButton();
      cy.url().should('include', '/bankaccounts/new');
      bankAccountPage.typeBankAccountInfo({
        bankName: Cypress.env('bankName'),
        routingNumber: Cypress.env('routingNumber'),
        accountNumber: Cypress.env('accountNumber'),
      });
      bankAccountPage.clickSaveButton();
      cy.url().should('include', '/bankaccounts');
      cy.contains(Cypress.env('bankName')).should('be.visible');
    });

    it('should delete the last bank account added', () => {
      cy.visit('/bankaccounts');
      bankAccountPage.clickDeleteButton();
      bankAccountPage.elements.getLastAccountAdded().contains("(Deleted)").should('be.visible');
    });


  });
});

