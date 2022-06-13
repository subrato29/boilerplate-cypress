'use strict';

describe ('Test application url', () => {

    const url = 'https://www.flipkart.com/';

    it ('app testing', () => {
        cy.visit (url);
        cy.contains ('Become a Seller');
        cy.url ().should ('include', 'flipkart');
    })
})