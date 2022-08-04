//Auto completa la sintaxis de cypress
/// <reference types="cypress" />

describe("<Registro />", () => {
  //Inicio de sesion
  it("<Registro /> - Validación y Alertas y crear nueva cuenta", () => {
    cy.visit("/registrar");

    //Revisar que el titulo exista
    cy.get("[data-cy=submit-registrar]").click();

    cy.get('[data-cy="alerta-registro"]')
      .should("exist")
      .invoke("text")
      .should("equal", "Todos los campos son requeridos");

    //La contraseña se muy corta
    cy.get('[data-cy="input-nombre"]').type("Duki");
    cy.get('[data-cy="input-email"]').type("duki@correo.com");
    cy.get('[data-cy="input-password"]').type("123");
    cy.get('[data-cy="input-repetir-password"]').type("123");

    cy.get("[data-cy=submit-registrar]").click();

    cy.get('[data-cy="alerta-registro"]')
      .should("exist")
      .invoke("text")
      .should("equal", "La contraseña debe tener minimo 6 caracteres");

    //Las contraseñas no son iguales
    cy.get('[data-cy="input-password"]').clear().type("123456");
    cy.get('[data-cy="input-repetir-password"]').clear().type("123457");

    cy.get("[data-cy=submit-registrar]").click();

    cy.get('[data-cy="alerta-registro"]')
      .should("exist")
      .invoke("text")
      .should("equal", "Las contraseñas no coinciden");

    // Se crea la cuenta correctamentes
    cy.get('[data-cy="input-password"]').clear().type("123456");
    cy.get('[data-cy="input-repetir-password"]').clear().type("123456");
    cy.get("[data-cy=submit-registrar]").click();

    cy.get('[data-cy="alerta-registro"]')
      .should("exist")
      .invoke("text")
      .should(
        "equal",
        "Usuario creado correctamente, revisa tu Email para confirmar tu cuenta"
      );
  });
});
