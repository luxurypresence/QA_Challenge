/// <reference types="cypress" />

describe("API testing", () => {
  it("Pokemon endpoint status", () => {
    var pokemon = "mewtwo";
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemon,
    }).then((res) => {
      expect(res.status).to.be.eq(200);
    });
  });

  it("Pokemon endpoint schema", () => {
    var pokemon = "mewtwo";
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemon,
    }).then((res) => {
      expect(res.body).to.have.property("abilities");
      expect(res.body).to.have.property("stats");
      expect(res.body).to.have.property("forms");
    });
  });

  it("Pokemon not found", () => {
    var pokemon = "agumon";
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemon,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.eq(404);
      expect(res.body.toLowerCase()).contains("not found");
    });
  });
});
