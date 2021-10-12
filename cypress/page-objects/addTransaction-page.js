/// <reference types="Cypress" />

class AddTransactionPage {
  url = '/new';
  elements = {
    getFirstUser: () => cy.get('[data-test="users-list"]').children().first(),
    getMainLayer: () => cy.get('[data-test="main"]'),
    getAmaount: () => cy.get('#amount'),
    getNote: () => cy.get('#transaction-create-description-input'),
    getRequestButton: () => cy.get('[data-test="transaction-create-submit-request"]'),
    getPayButton: () => cy.get('[data-test="transaction-create-submit-payment"]'),
  };

  visit() {
    cy.visit(this.url);
  }

  typeTransactionInfo({ amount = ' ', note = ' ' } = {}) {
    this.elements.getAmaount().clear().type(amount);
    this.elements.getNote().clear().type(note);
  }

  clickOnFirstUser() {
    this.elements.getFirstUser().click();
  }

  clickOnRequestButton() {
    this.elements.getRequestButton().click();
  }

  clickOnPayButton() {
    this.elements.getPayButton().click();
  }

}

export const addTransactionPage = new AddTransactionPage();
