/// <reference types="Cypress" />

import { addTransactionPage } from "../../page-objects/addTransaction-page";

describe('Login UsingAPI', () => {
    context('Login through API', () => {
      beforeEach(() => {
        cy.apiLogin(Cypress.env('testUserUser'), Cypress.env('testUserPassword'));
        cy.visit('/transaction/new');
      });

/*----------------------------------------------------------------------------
1.Se crea una transaccion de request
2. Se verifica que la transaccion creada tenga la etiqueta de requested
-----------------------------------------------------------------------------*/ 

      it('Deberia crearse una transaccion de request', () => {
        const REQUESTED_TAG = 'Requested';
          setTransactionInfoOnPage();
          addTransactionPage.clickOnRequestButton();
          addTransactionPage.elements.getMainLayer().contains(REQUESTED_TAG).should('be.visible');
      });

/*------------------------------------------------------------------------------------------
1.Se crea una transaccion de payment
2. Se verifica que la transaccion creada tenga la etiqueta de paid
--------------------------------------------------------------------------------------------*/ 

      it('Deberia crearse una transaccion de payment', () => {
        const PAID_TAG = 'Paid';
        setTransactionInfoOnPage();
        addTransactionPage.clickOnPayButton();
        addTransactionPage.elements.getMainLayer().contains(PAID_TAG).should('be.visible');
    });
    });
  });

/*------------------------------------------------------------------------------------------
Algoritmo:
1.Se da click en el primer usuario de la lista
2. Se crea una transaccion ya sea de payment o requeste para ese usuario
------------------------------------------------------------------------------------------*/ 

function setTransactionInfoOnPage(){
  const SELECT_USER_TAG = 'Select Contact';
  const TEST_AMOUNT = '123';
  const TEST_NOTE = 'test note';

  addTransactionPage.clickOnFirstUser();
  addTransactionPage.elements.getMainLayer().contains(SELECT_USER_TAG).should('be.visible');
  
  addTransactionPage.typeTransactionInfo({
    amount: TEST_AMOUNT,
    note: TEST_NOTE,
  }); 
}