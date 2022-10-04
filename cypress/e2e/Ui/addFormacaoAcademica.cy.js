/// <reference types="cypress" />

const formacaoAcademicaPage = require('../../support/Formacao/FormacaoAcademica')

describe('Funcionalidade: Deve adicionar Formação', () => {


    beforeEach(() => {
        cy.fixture("usuarios").then((usr)=> {
            cy.login(usr[0].email, usr[0].senha)
          });
        cy.visit('adicionar-formacao')

    });
    it('Deve adicionar uma formação academica com sucesso', () => {
      formacaoAcademicaPage.addFormacaoAcademica('FIAP', 'Superior', 'Tecnologia em Banco de Dados', '01/10/2000', '01/11/2002', 'Oracle, Mongo, SQL...')
           cy.get('[data-test="education-delete"]').should('exist')
                });


});