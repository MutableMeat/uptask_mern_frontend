//Auto completa la sintaxis de cypress
/// <reference types="cypress" />

describe("<Login />", () => {
  it("<Login /> - Verificacion pantalla de inicio ", () => {
    cy.visit("/");
    //cy.contains("Contraseña");
    cy.get('[data-cy="titulo"]').invoke("text").should("equal", "proyectos");
  });
});
