/// <reference types="Cypress" />

class InteractTransactionPage {
  url = '/';
  elements = {
    getFirstTransaction: () => cy.get('[data-test="transaction-list"] li').first(),
    getTransactionUnliked: () => cy.get('[data-test="transaction-list"] li').find('[data-test="transaction-like-count"]').filter(':contains("0")').first(),
    getLikeButton: () => cy.get('[data-test*="transaction-like-button"]'),
    getLikeCount: () => cy.get('[data-test*="transaction-like-count"]'),
    geCommentTextBox: () => cy.get('[id*="transaction-comment-input"]'),
    getLastComment: () => cy.get('[data-test="comments-list"]').children().last(),
    };

  visit() {
    cy.visit(this.url);
    interactTransactionPage.clickOnFirsTransaction();
  }

  typeComment({ comment = ' '} = {}) {
    this.elements.geCommentTextBox().clear().type(comment);
  }

  clickOnFirstTransaction() {
    this.elements.getFirstTransaction().click({ force: true });
  }

  clickOnTransactionUnliked() {
    this.elements.getTransactionUnliked().click({ force: true });
  }

  clickOnLikeButton() {
    this.elements.getLikeButton().click();
  }

}

export const interactTransactionPage = new InteractTransactionPage();
