/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var qnt = 10

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(qnt)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , qnt)
        cy.get('.woocommerce-message').should('contain',  qnt  + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
        
    });

});