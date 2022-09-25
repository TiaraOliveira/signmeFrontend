describe('Testa recomendação aleatória de musica', () => {
    it('Testa se cadastra musica com sucesso ', () => {
    
      cy.visit("http://localhost:3000")
      cy.contains("Top").click();
    })
  })