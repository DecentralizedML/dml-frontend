/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Bounties', () => {
  context('Bounties', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('A user should see all available bounties.', () => {});

    it('A user should be able to sort bounties by Deadline.', () => {});

    it('A user should be able to sort bounties by Prize Pool.', () => {});

    it('A user should be able to filter bounties by Status.', () => {});

    it('A user should be able to search for an bounty based off of name.', () => {});

    it('Results should compose filters (multiple conditions).', () => {});

    it('A user should be able to see Bounty details when clicking an Bounty.', () => {});

    it('A developer should be able to enroll in a bounty.', () => {});

    it('A bounty creator should be able to create a new bounty.', () => {});

    it('Bounty Creator should be able to update bounty details with descriptions, data source/links, evaluations guidelines, rules.', () => {});

    it('Bounty Creator should be able to fund the bounty.', () => {});

    it('Bounty Creator should be able to begin enrollment of the bounty.', () => {});

    it('Bounty Creator should be able to end enrollment of the bounty.', () => {});

    it('Bounty Creator should be able to begin accepting submissions.', () => {});

    it('Bounty Creator should be able to stop accepting submissions.', () => {});

    it('Bounty Creator should be able to pick winners.', () => {});

    it('Bounty Creator should be able to pay out all winners.', () => {});

    it('Bounty Creator should be able to view all submissions.', () => {});

    it('A bounty creator should not be able to put a negative prize amount.', () => {});

    it('Developers should be able to enroll in a bounty.', () => {});

    it('Developers should be able to view bounty details.', () => {});

    it('Developer should be able to submit results.', () => {});

    it('Developer should be able to view their own submissions.', () => {});

    it('Developer should be able to see how many people have submitted.', () => {});
  });
});
