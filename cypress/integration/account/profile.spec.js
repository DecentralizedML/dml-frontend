/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Account', () => {
  context('Account Details', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('A user should be able to see how many DML tokens they have in their wallet.', () => {});

    it('A user should be able to see their address.', () => {});

    it('If a user clicks on their address, they should be taken to another page.', () => {});

    it('Users should be able to change debit limit on their DML balances.', () => {});

    it('A user should not be able to update their debit limit to a negative number.', () => {});
  });
});
