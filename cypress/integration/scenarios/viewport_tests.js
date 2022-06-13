'use strict'

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('testing different view ports', () => {
    
    const url = 'https://www.flipkart.com/';

    before (() => {
        console.log ('running my tests');
    })

    beforeEach (() => {
        cy.visit (url);
    })

    it ('open in macbook-13', () => {
        cy.viewport ('macbook-13');
        cy.screenshot ();
    })

    it ('open in macbook-15', () => {
        cy.viewport ('macbook-15');
        cy.screenshot ();
    })

    it ('open in iphone-x', () => {
        cy.viewport ('iphone-x');
        cy.screenshot ();
    })

    it ('open in 500 and 750', () => {
        cy.viewport (550, 750);
        cy.screenshot ();
    })
})