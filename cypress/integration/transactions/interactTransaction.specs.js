/// <reference types="Cypress" />

import { interactTransactionPage } from "../../page-objects/interactTransaction-page";

describe('Login UsingAPI', () => {
    context('Login through API', () => {
      beforeEach(() => {
        cy.apiLogin(Cypress.env('margarettaUser'), Cypress.env('margarettaPassword'));
      });
  
      it('should like a transaction', () => {
        const LIKED = '1'
        cy.visit('/');
        interactTransactionPage.clickOnTransactionUnliked();
        interactTransactionPage.clickOnLikeButton();
        interactTransactionPage.elements.getLikeCount().contains(LIKED).should('be.visible');
      });


      it.only('should comment a transaction', () => {
        const COMMENT = (Math.random() + 1).toString(36).substring(7);
        cy.visit('/');
        interactTransactionPage.clickOnFirstTransaction();

        interactTransactionPage.typeComment({
          comment: COMMENT + '{enter}',
        });

        interactTransactionPage.elements.getLastComment().contains(COMMENT).should('be.visible');
      });

    });
  });