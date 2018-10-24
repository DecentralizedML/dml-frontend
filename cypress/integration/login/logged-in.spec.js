/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {
  emailField    : '[data-test="login-email-field"]',
  passwordField : '[data-test="login-password-field"]',
  loginButton   : '[data-test="login-button"]',
};

describe('Login', () => {
  context('Logged In', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('Authenticated user should be able to log in', () => {
      cy.get(SELECTOR.emailField).type('user@kyokan.io');
      cy.get(SELECTOR.passwordField).type('password123');
      cy.get(SELECTOR.loginButton).click();

      cy.get('[data-test="page-header').should('have.text', 'Login');
    });
  });
});
