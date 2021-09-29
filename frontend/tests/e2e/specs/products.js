describe('products test suite', () => {
  it('shows a list of products', () => {
    cy.login('test-e2e@boolean.cl', 'booleanacademia')

    cy.fixture('products.json')
      .then((products) => {
        cy.get('[data-cy="product-item"]').should('have.length', products.length)
        cy.get('[data-cy="product-name"]').each(($el, index) => {
          expect($el.text()).to.equal(products[index].name)
        })
        cy.get('[data-cy="price"]').each(($el, index) => {
          if (products[index].price !== 0) {
            const price = new Intl.NumberFormat(
              'es-CL',
              { style: 'currency', currency: 'CLP' }
            ).format(products[index].price)

            expect($el.text().trim()).to.equal(price.toString())
          } else {
            expect($el.text().trim()).to.equal('No Disponible')
          }
        })
      })
  })
})
