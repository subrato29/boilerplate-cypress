'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('launch my app', () => {

    const url = 'https://www.flipkart.com/';

    it ('searching element', () => {
        cy.visit (url);
        cy.get ('input[name = \'q\']').type ('macbook pro 16');
        cy.get ('button[type = \'submit\']').click ();
        cy.contains ('results for');
        cy.contains ('macbook pro 16');
    })
})