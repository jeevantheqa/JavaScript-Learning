/// <reference types="Cypress" />
describe('App Creator Tests', function() {
    beforeEach(function() {
        // runs once before all tests in the block
        window.localStorage.setItem('token','');
        cy.visit('https://abc.xyz');
      })
    it('Visit Dashboard', function() {

        cy.url().should('include', '/dashboard')

    })
    it('Check Elements in Dashboard',function(){

        cy.contains('My Projects').should('have.class','sc-eMigcr');
        cy.contains('Statistics').should('have.class','sc-eMigcr');
        cy.get("[data-testid='icon_user']").should('have.class','sc-bxivhb');
    })

    it('Edit a Project',function(){

        cy.contains('Senckenberg Naturmuseum').click();
        cy.contains('Design').should('have.text','Design');
        cy.contains('Menu').should('have.text','Menu');
        

        cy.contains('Colors').should('have.text','Colors');
        cy.contains('Fonts').should('have.text','Fonts');
        cy.contains('UI Elements').should('have.text','UI Elements');
        cy.contains('Settings').should('have.text','Settings');

    })

    it('Project Publish flow',function(){

        cy.contains('Senckenberg Naturmuseum').click();
        cy.contains('General Settings').click().should('have.class','didkXZ');
        cy.contains('Content & Layout').click().should('have.class','didkXZ');
        cy.contains('Final Check').click().should('have.class','didkXZ');
        cy.contains('Publish & Checkout').click().should('have.class','didkXZ');

    })

    it('Statistics Page',function(){

        cy.contains('Statistics').click().should('have.class','hMVgfC');
        cy.contains('My Projects').should('not.have.class','hMVgfC');

        cy.get("[data-testid='dropdown_trigger-element']").click();
        cy.get("[data-testid='dropdown_content']");
        cy.get("[name='4526de39-3876-4e17-9a78-d49d1538086f']")
        .click();

        cy.contains('App Store Statistics').click().should('have.class','hMVgfC');
        cy.contains('Google Play Statistics').click().should('have.class','hMVgfC');
        cy.contains('App Tracking').click().should('have.class','hMVgfC');

    })

    it('Logout',function(){
        cy.get("[data-testid='icon_user']").click();
        cy.contains('Logout').click();
        cy.contains('Login').should('have.class','login')
        
    })
  })