'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Reload page', () => {

    const url = 'https://www.flipkart.com/';

    it ('Page reload test', () => {
        cy.visit (url);
        cy.contains ('Become a Seller');
        cy.reload ();
        cy.contains ('Become a Seller');
    })
})