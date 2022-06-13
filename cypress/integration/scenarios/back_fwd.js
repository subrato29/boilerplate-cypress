'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Validating back and forward button simulate', () => {

    const url = 'https://www.flipkart.com/';

    it ('back-fwd test', () => {
        cy.visit (url);
        cy.contains ('Become a Seller').click ();
        cy.go ('back');
        cy.wait (200);
        cy.go ('forward');
    })
})