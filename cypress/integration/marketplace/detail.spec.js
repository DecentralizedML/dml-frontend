/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Marketplace', () => {
  context('Detail View', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('A user should be able to see Algorithm details when clicking an Algorithm.', () => {});

    it('A user should be able to see an info tooltip describing the per-device fee on hover.', () => {});

    it('A user should be able to purchase a specific algorithm from its detail view.', () => {});

    it('A user should be able to demo an algorith.', () => {});

    it('A user should be able to see Job History for a given algo.', () => {});

    it('A user should be able to see a Reviews for a given algo.', () => {});
  });
});
