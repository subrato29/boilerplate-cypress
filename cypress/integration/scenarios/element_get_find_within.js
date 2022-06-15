'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('check element get concept', () => {

    const url = 'https://www.flipkart.com/';

    it ('testing GET method', () => {
        cy.visit (url);
        cy.contains ('Become a Seller').click ();
        cy.url ().should ('include', 'sell-online');
        cy.get ('input[name = \'registrationNumber\']')
            .should ('be.visible')
            .and ('have.length', 1)
        cy.get ('div[class = \'striped-background\'] div[class = \'label\']')
            .should ('have.length', 7);
    })

    it ('testing FIND method', () => {
        cy.visit (url);
        cy.get ('div[class = \'_2WErco row\']').find ('a[href *= \'page\']').should ('have.length.greaterThan', 4);
    })

    it ('testing WITHIN method', () => {
        cy.visit (url);
        cy.get ('form[action *= \'search\']').within (() => {
            cy.get ('input[title *= \'Search for products\']').type ('Macbook 16');
        })

    })
})
