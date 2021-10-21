/// <reference types="Cypress" />

import { interactTransactionPage } from "../../page-objects/interactTransaction-page";

describe('Login UsingAPI', () => {
    context('Login through API', () => {
      beforeEach(() => {
        cy.apiLogin(Cypress.env('testUserUser'), Cypress.env('testUserPassword'));
        cy.visit('/');
      });

/*------------------------------------------------------------------------------------------
Algoritmo:
1.Como la aplicacion solo permite dar like una sola vez se busca la siguiente transaccion 
sin likes
2.  Se da click en la transaccion
3.  Se da like
4.  Se verifica que los like = 1
------------------------------------------------------------------------------------------*/ 

      it('Se debe poder dar like a una transaccion', () => {
        const LIKED = '1'
        
        interactTransactionPage.clickOnTransactionUnliked();
        interactTransactionPage.clickOnLikeButton();
        interactTransactionPage.elements.getLikeCount().contains(LIKED).should('be.visible');
      });

/*------------------------------------------------------------------------------------------
Algoritmo:
1.Se da click en la primera transaccion
2. Se crea un comentario random
3. Se agrega el comeentario
4. Se verifica que el ultimo comentario de la trasaccion contenga el comentario random ingresado
------------------------------------------------------------------------------------------*/ 

      it('Se debe poder comentar una transaccion', () => {
        const COMMENT = (Math.random() + 1).toString(36).substring(7);
        
        interactTransactionPage.clickOnFirstTransaction();

        interactTransactionPage.typeComment({
          comment: COMMENT + '{enter}',
        });

        interactTransactionPage.elements.getLastComment().contains(COMMENT).should('be.visible');
      });

    });
  });