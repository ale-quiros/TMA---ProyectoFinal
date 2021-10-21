/// <reference types="Cypress" />

import { bankAccountPage } from "../../page-objects/bankAccount-page";

describe('Login UsingAPI', () => {
  context('Login through API', () => {
    beforeEach(() => {
      cy.apiLogin(Cypress.env('testUserUser'), Cypress.env('testUserPassword'));
      cy.visit('/bankaccounts');
    });

/*-----------------------------------------------------------------
1. Se crea una cuenta bancaria con datos de prueba
------------------------------------------------------------------*/

    it('Debe crear una nueva cuenta bancaria', () => {
      const BANK_NAME = "TestBankAutomation";
      const ROUTING_NAME_TEST = "123456789";
      const ACCOUNT_NUMBER_TEST = "789456123";

      bankAccountPage.clickCreateButton();
      cy.url().should('include', '/bankaccounts/new');
      bankAccountPage.typeBankAccountInfo({
        bankName: BANK_NAME,
        routingNumber: ROUTING_NAME_TEST,
        accountNumber: ACCOUNT_NUMBER_TEST,
      });
      bankAccountPage.clickSaveButton();
      cy.url().should('include', '/bankaccounts');
      cy.contains(BANK_NAME).should('be.visible');
    });

/*---------------------------------------------------------------------------------------------
1. Se borra la cuenta bancaria recien creada y se revisa que el elemto tenga el tag deleted
----------------------------------------------------------------------------------------------*/    

    it('Se debe borrar la cuenta bancaria recien creada', () => {
      const DELETED_TAG = "(Deleted)";
      
      bankAccountPage.clickDeleteButton();
      bankAccountPage.elements.getLastAccountAdded().contains(DELETED_TAG).should('be.visible');
    });


  });
});

