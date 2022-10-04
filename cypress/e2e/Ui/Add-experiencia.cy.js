/// <reference types="cypress" />

const experienciaPage = require ('../../support/Experiencia/experiencia-pages')

describe('Funcionalidade Adicionar Experiência', () => {
beforeEach(' ', () => {

        cy.fixture("usuarios").then((usr)=> {
        cy.login(usr[0].email, usr[0].senha)
      });
      cy.visit('adicionar-experiencia')      
});

    it('Adicionar uma experiência com sucesso ', () => {
        experienciaPage.addExperiencia('Spec ','via','SP','01/01/2000','01/01/2001','ViaHub')
        cy.get('[data-test="experience-delete"]').should('exist')            
    });
   

});
