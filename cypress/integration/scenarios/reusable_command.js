'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Validating login functionality automationpractice website', () => {

    const url = 'http://automationpractice.com/index.php';

    before (() => {
        cy.visit (url);
    })

    it ('Unregistered user login test functionality', () => {
        cy.get ('.login').click ();
        cy.login ('test@email.com');
        cy.contains ('Authentication failed');
    })

    it ('Searching product test', () => {
        cy.visit ('http://automationpractice.com/index.php');
        cy.search ('dress');
    })
})