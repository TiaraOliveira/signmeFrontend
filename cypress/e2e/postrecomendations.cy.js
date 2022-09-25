import { faker } from '@faker-js/faker';


describe('Testa postagem de musica', () => {
  it('Testa se cadastra musica com sucesso ', () => {
    const link = `https://www.youtube.com/${faker.lorem.words(4)}`
    const music = {
      "name": faker.name.firstName(),
      "youtubeLink": link
    }
    cy.visit("http://localhost:3000")
    cy.get("input[placeholder=Name]").type(music.name);
		cy.get("input[placeholder='https://youtu.be/...']").type(music.youtubeLink);
    cy.get("button").click();
  })
})