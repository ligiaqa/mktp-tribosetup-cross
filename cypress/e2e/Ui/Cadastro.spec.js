/// <reference types="cypress" />
const faker = require('faker-br')

describe('US0002 - Funcionalidade: Cadastro', () => {

before(() => { //Faz o visit antes de cada cenário
    cy.visit('cadastrar')
});

    it('Deve fazer cadastro com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Ligia Bootcamp')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste1234')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste1234')
        cy.get('[data-test="register-submit"]').click()

        //Resultado esperado 
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')
    });

   
    });




