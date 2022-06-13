'use strict';

describe ('launch my app', () => {

    const url = 'http://automationpractice.com';

    it ('app testing', () => {
        cy.visit (url);
        cy.contains ('Contact us');
        cy.contains ('Contact us').click ();
        cy.url ().should ('include', 'contact');
    })

    it ('searching element', () => {
        cy.visit (url);
        cy.get ('input[placeholder = \'Search\']').type ('Printed Dress');
        cy.get ('button[name = \'submit_search\']').click ();
        cy.contains ('Printed Dress');
    })
})