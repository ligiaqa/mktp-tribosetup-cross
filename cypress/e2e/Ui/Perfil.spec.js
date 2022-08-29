/// <reference types="cypress" />
const faker = require('faker-br')

describe('US0002 - Funcionalidade: Perfil', () => {

before(() => { //Faz o visit antes de cada cenário
    cy.visit('cadastrar')
});

    it('Deve realizar o cadastro com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Ligia Bootcamp')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste1234')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste1234')
        cy.get('[data-test="register-submit"]').click()

        //Resultado esperado 
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')
    });

    it('Deve fazer o preenchimento do perfil com sucesso', () => {

        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-7"]').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.google.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Qualidade de Sofware')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('https://github.com/ligiaqa')
        cy.get('[rows="1"]').type('Especialista em Qualidade de Sofware I, trabalho atualmente na Via Hub')
        cy.get('[data-test="profile-submit"]').click()
        
        //Resultado esperado 
        cy.get('.large').should('contain', 'Dashboard')
    });

    //Resultado não sucesso
    
    it('Deve preencher o perfil com não sucesso', () => {
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-7"]').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('hts:/www.google.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Qualidade de Sofware')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('https://github.com/ligiaqa')
        cy.get('[rows="1"]').type('Especialista em Qualidade de Sofware I, trabalho atualmente na Via Hub')
        cy.get('[data-test="profile-submit"]').click()
        cy.get('.MuiFormHelperText-root').should('contain','Digite uma url válida')

    });

    });