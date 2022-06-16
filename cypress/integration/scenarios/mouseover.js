'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Validating mouseover', () => {

    const url = 'https://www.flipkart.com/';

    it ('Testing mouseover', () => {
        cy.visit (url);
        cy.contains ('Login').trigger ('mouseover');
        cy.contains ('My Profile').click ();
        cy.contains ('Get access to your Orders').should ('be.visible');
    })
})
