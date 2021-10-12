/// <reference types="Cypress" />

import { addTransactionPage } from "../../page-objects/addTransaction-page";

describe('Login UsingAPI', () => {
    context('Login through API', () => {
      beforeEach(() => {
        cy.apiLogin(Cypress.env('margarettaUser'), Cypress.env('margarettaPassword'));
      });
  
      it('should Add a request transaction', () => {
        const REQUESTED_TAG = 'Requested';
          setTransactionInfoOnPage();
          addTransactionPage.clickOnRequestButton();
          addTransactionPage.elements.getMainLayer().contains(REQUESTED_TAG).should('be.visible');
      });

      it('should Add a pay  transaction', () => {
        const PAID_TAG = 'Paid';
        setTransactionInfoOnPage();
        addTransactionPage.clickOnPayButton();
        addTransactionPage.elements.getMainLayer().contains(PAID_TAG).should('be.visible');
    });

      function setTransactionInfoOnPage(){
        const SELECT_USER_TAG = 'Select Contact';
  
        cy.visit('/transaction/new');
        addTransactionPage.clickOnFirstUser();
        addTransactionPage.elements.getMainLayer().contains(SELECT_USER_TAG).should('be.visible');
       
        addTransactionPage.typeTransactionInfo({
          amount: '123',
          note: 'test note',
        }); 
    }

    });
  });