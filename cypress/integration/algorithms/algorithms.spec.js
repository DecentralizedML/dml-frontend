/// <reference types="Cypress" />

/* globals context, cy, Cypress */
/* eslint-disable no-console, max-len */

const SELECTOR = {};

describe('Algorithms', () => {
  context('Algorithms', () => {
    beforeEach(() => {
      console.log('config', Cypress.config());
      cy.visit(Cypress.config('baseUrl'));
    });

    it('A non-developer (has not connected GitHub) should not be able to submit an algo.', () => {});

    it('A developer should be fill out information about their algo.', () => {});

    it('A developer should not be able to enter a negative per device fee.', () => {});

    it('A user should be able to save their progress.', () => {});

    it('A user should be able to delete an algorithm.', () => {});

    it('Developers should be able to upload an algo and try it out in browser.', () => {});

    it('Developers should be able to submit an algo upload for review.', () => {});

    it('Developers should be able to see a list of all uploaded algo, as well as relative stats (e.g. # of downloads, total earnings, stars, review status, etc).', () => {});

    it('Developers should be able to manage their algos (e.g. remove from marketplace, change price, change title, change descriptions, upload new algo, etc).', () => {});

    it('Developers must agree to some kind of Agreement before uploading an algo.', () => {});
  });
});
