/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Account', () => {
  context('Wallet', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('A user should be able to change their profile information.', () => {});

    it('If a user enters an invalid email address, they should see a message.', () => {});

    it('A user should be able to connect their Github account.', () => {});

    it('A user should be able to upload a profile photo.', () => {});

    it('If a user tries to save their changes, they should see a status of the result of those changes.', () => {});

    it('If a user is currently saving changes, they should not be able to submit another request.', () => {});
  });
});
