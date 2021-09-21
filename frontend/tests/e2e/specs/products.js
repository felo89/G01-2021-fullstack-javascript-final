describe('products test suite', () => {
  it('shows a list of products', () => {
    cy.login('test-e2e@boolean.cl', 'booleanacademia')

    cy.fixture('products.json')
      .then((products) => {
        cy.get('[data-cy="product-item"]').should('have.length', products.length)
        cy.get('[data-cy="product-name"]').each(($el, index) => {
          console.log($el.text())
          console.log(products[index].name)
          expect($el.text()).to.equal(products[index].name)
        })
      })
  })
})
