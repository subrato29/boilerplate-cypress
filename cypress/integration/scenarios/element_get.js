'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('check element get concept', () => {

    const url = 'https://www.flipkart.com/';

    it ('element get testing', () => {
        cy.visit (url);
        cy.contains ('Become a Seller').click ();
        cy.url ().should ('include', 'sell-online');
        cy.get ('input[name = \'registrationNumber\']')
            .should ('be.visible')
            .and ('have.length', 1)
        cy.get ('div[class = \'striped-background\'] div[class = \'label\']')
            .should ('have.length', 7);
    })
})