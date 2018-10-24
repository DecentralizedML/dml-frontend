/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Onboarding', () => {
  context('Step One', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('If an existing user does not have MetaMask installed, a notice should be shown. - user had metamask when they signed up, but uninstalled it', () => {});

    it('A new user should be able to attempt to create a new account with an email and a password.', () => {});

    it('If a new user enters an email and address, but does not accept Terms of Service, they should not be able to create an account.', () => {});

    it('If a new user enters an email and address and does accept Terms of Service, their account should be created, they should be logged in, and then taken to Onboarding.', () => {});

    it('A user should be able to log in with an existing account using email and password.', () => {});

    it('If an existing user does not have first name and last name stored, they should be taken to Onboarding Step 1 (Account Details).', () => {});

    it('If an existing user has a first and last name stored without having their wallet address stored, they should be taken to Onboarding Step 2 (Metamask).', () => {});

    it('If an existing user does not have a first name named, last name, or wallet address stored, they should be taken to Onboarding Step 1 (Account Details). [guard]', () => {});

    it('If an existing user has first name, last name, and wallet address stored, they should be taken to the Marketplace.', () => {});

    it('A user should be able to connect their Github account.', () => {});
  });
});
