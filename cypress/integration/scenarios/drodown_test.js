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
})