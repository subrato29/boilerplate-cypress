'use strict';

/// <reference types="Cypress" />
/// <reference types="chai" />

describe ('Validating checkboxes in automationpractice website', () => {

    const url = 'http://automationpractice.com/index.php?id_category=5&controller=category#/';

    it.skip ('Test checkbox', () => {
        cy.visit (url);

        //check all the checkbox and verified whether these are checked or not
        cy.get ('.checkbox').check ().parent ().should ('have.class', 'checked');

        //uncheck all the checkbox and verified whether these are unchecked or not
        cy.get ('.checkbox').uncheck ().parent ().should ('not.have.class', 'checked');
    })

    it ('Test checkbox in snapdeal page', () => {
        cy.visit ('https://www.snapdeal.com/');
        cy.get ('#inputValEnter').type ('laptop');
        cy.contains ('Search').click ();

        //check
        cy.get ('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .check ({force: true})
        cy.get ('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .should ('have.checked', 'checked');

        //uncheck
        cy.get ('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .uncheck ({force: true})
        cy.get ('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .should ('not.have.checked', 'checked');
    })
})