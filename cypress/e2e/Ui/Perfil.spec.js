/// <reference types="cypress" />
const faker = require ('faker-br')
describe ('US0003 - Funcionalidade: Criar Perfil' , () => {
    var emailFake = faker.internet.email()
    var senha = 'Teste@123'
    before(() => {
        cy.visit ('cadastrar')
    });
    it('Deve fazer cadastro com sucesso', () => {
      cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste Bootcamp')
      cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(emailFake) 
      cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
      cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
      cy.get('[data-test="register-submit"]').click()
      cy.get('[data-test="dashboard-createProfile"]').should('exist') 
    });
    it('Deve fazer login com sucesso', () => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(emailFake)
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
        cy.get('[data-test="login-submit"]').click()  
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });
    it('Criar Perfil com sucesso', () => {
        cy.get('[data-test="dashboard-createProfile"]').click()  
        cy.get('.large').should('contain', 'Crie Seu Perfil')
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-2"]').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Via Hub')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.google.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('SP')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Spec QA')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('ligiaqa')
        cy.get('[rows="1"]').type('Teste')
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });
    it('Criar Perfil sem sucesso', () => {
        cy.get('[data-test="dashboard-createProfile"]').click()  
        cy.get('.large').should('contain', 'Crie Seu Perfil')
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-2"]').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('VIA HUB')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('site')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo, SP')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Quality Assurence')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('ligiaqa')
        cy.get('[rows="1"]').type('Oie! Atualmente trabalho como Espec QA na Via Hub, tribo Marketplace')
        cy.get('[data-test="profile-submit"]').click()
        cy.get('.MuiFormHelperText-root').should('contain', 'Digite uma url válida')
    });
});