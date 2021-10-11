/// <reference types="Cypress" />

class BankAccountPage {
  url = '/bankaccounts';
  elements = {
    getBankName: () => cy.get('#bankaccount-bankName-input'),
    getRoutingNumber: () => cy.get('#bankaccount-routingNumber-input'),
    getAccountNumber: () => cy.get('#bankaccount-accountNumber-input'),
    getCreateButton: () => cy.get('[data-test="bankaccount-new"]'),
    getDeleteButton: () => cy.get('[data-test="bankaccount-delete"]'),
    getSaveButton: () => cy.get('[data-test="bankaccount-submit"]'),
    getLastAccountAddedDeleteButton: () => cy.get('[data-test="bankaccount-list"]').children().last().find('[data-test="bankaccount-delete"]'),
    getLastAccountAdded: () => cy.get('[data-test="bankaccount-list"]').children().last(),
  };

  visit() {
    cy.visit(this.url);
  }

  typeBankAccountInfo({ bankName = ' ', routingNumber = ' ' , accountNumber = ' ' } = {}) {
    this.elements.getBankName().clear().type(bankName);
    this.elements.getRoutingNumber().clear().type(routingNumber);
    this.elements.getAccountNumber().clear().type(accountNumber);
  }

  clickCreateButton() {
    this.elements.getCreateButton().click();
  }

  clickSaveButton() {
    this.elements.getSaveButton().click();
  }

  clickDeleteButton() {
    this.elements.getLastAccountAddedDeleteButton().click();
  }
}

export const bankAccountPage = new BankAccountPage();
