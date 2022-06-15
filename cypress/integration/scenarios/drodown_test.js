'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Dropdown feature test', () => {

    const url = 'https://www.wikipedia.org/';
    
    it ('Select tag test', () => {
        cy.visit (url);
        cy.get ('select[name = \'language\']').select ('Slovenčina')
            .should ('have.value', 'sk');
    })

    it ('Google search test', () => {
        cy.visit ('https://www.google.com/');
        cy.get ('input[name = \'q\']').type ('cypress install');
        cy.get ('.erkvQe')
            .find ('li span')
            .contains ('cypress install')
            .click ();
    })
})