//Auto completa la sintaxis de cypress
/// <reference types="cypress" />

describe("<Formularios />", () => {
  //Inicio de sesion
  it("<Login /> - Verificacion pantalla de inicio ", () => {
    cy.visit("/");

    //Revisar que el titulo exista
    cy.get('[data-cy="titulo"]').invoke("text").should("equal", "Proyectos");

    //Revisar que el formulario exista
    cy.get('[data-cy="form-login"]').should("exist");

    //Revisar que los inputs existan
    cy.get('[data-cy="input-email"]').should("exist");
    cy.get('[data-cy="input-password"]').should("exist");
    cy.get('[data-cy="submit-login"]')
      .should("exist")
      .should("have.value", "Iniciar sesión")
      .should("have.class", "uppercase")
      .and("have.class", "bg-sky-700");

    cy.get('[data-cy="nueva-cuenta"]')
      .should("exist")
      .should("have.prop", "tagName")
      .should("equal", "A");

    cy.get('[data-cy="nueva-cuenta"]')
      .should("have.attr", "href")
      .should("equal", "/registrar");

    cy.visit("/registrar");
  });

  //Registro de usuario
  it("<Registrar />  -  Verificar componente de registro usuario", () => {
    //Revisar que el titulo exista
    cy.get('[data-cy="titulo"]')
      .invoke("text")
      .should("equal", "Crea tu cuenta y administra tus proyectos");

    //Revisar que el formulario exista
    cy.get('[data-cy="form-registrar"]').should("exist");

    //Revisar que los inputs existan
    cy.get('[data-cy="input-nombre"]').should("exist");
    cy.get('[data-cy="input-email"]').should("exist");
    cy.get('[data-cy="input-password"]')
      .should("exist")
      .should("have.prop", "type")
      .should("equal", "password");
    cy.get('[data-cy="input-repetir-password"]').should("exist");
    cy.get('[data-cy="submit-registrar"]')
      .should("exist")
      .should("have.class", "font-bold")
      .should("have.value", "Crear cuenta");

    cy.get('[data-cy="enlace-login"]')
      .should("exist")
      .should("have.attr", "href")
      .should("equal", "/");
  });
});
