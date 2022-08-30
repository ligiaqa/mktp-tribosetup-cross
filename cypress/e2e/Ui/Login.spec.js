/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login ', () => {

      it.only('Deve validar login com tentativa inválida',() => {
      cy.visit('login')
      cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('ligia@bootcamp.com')
      cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('ligia1234')
      cy.get('[data-test="login-submit"]').click()
      cy.get('[data-test="alert"]').should ('contain','Credenciais inválidas')

  })

  it.only('Deve fazer login com sucesso',() => {
      cy.visit('login')
      cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('ligia@bootcamp.com')
      cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('ligia123')
      cy.get('[data-test="login-submit"]').click()
      cy.get('[data-test="dashboard-welcome"]').should ('contain','Bem-vindo')
  })

});