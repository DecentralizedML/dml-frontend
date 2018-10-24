/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Marketplace', () => {
  context('List View', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('A user should see all available algorithms.', () => {});

    it('A user should be able to sort algorithms by Price.', () => {});

    it('A user should be able to sort algorithms by Downloads.', () => {});

    it('A user should be able to sort algorithms by Rating.', () => {});

    it('A user should be able to filter algorithms by Image.', () => {});

    it('A user should be able to filter algorithms by Text.', () => {});

    it('A user should be able to filter algorithms by tags.', () => {});

    it('A user should be able to search for an algorithm based off of name.', () => {});

    it('If the search box is empty, all results should be shown.', () => {});

    it('Results should compose filters (multiple conditions).', () => {});
  });
});
