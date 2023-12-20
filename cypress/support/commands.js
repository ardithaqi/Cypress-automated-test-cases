/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("openHomePage", () => {
  cy.visit("/");
  cy.get("nav nb-select").click();
  cy.get(".options-list").find("nb-option").eq(1).click();
});

Cypress.Commands.add("loginToApplication", () => {
  // cy.visit("http://localhost:4200/auth/login");
  cy.get('[for="input-email"]').type("ardithaci@test.com");
  cy.get('[placeholder="Password"]').type("arditest");
  cy.get('[type="checkbox"]').check({ force: true });
  cy.get("button").click();
});

Cypress.Commands.add("registerUser", () => {
  cy.get('[placeholder="Full name"]').type("Ardii");
  cy.get('[placeholder="Email address"]').type("Ardithaci1@test.com");
  cy.get('[placeholder="Password"]').type("arditest");
  cy.get('[placeholder="Confirm Password"]').type("arditest");
  cy.get('[type="checkbox"]').check({ force: true });
  cy.get("button").click();
});

Cypress.Commands.add("requestPassword", () => {
  cy.get('[placeholder="Email address"]').type("ardithaci@test.com");
  cy.get("button").click();
});

Cypress.Commands.add("resetPassword", () => {
  cy.get('[placeholder="New Password"]').type("arditest1");
  cy.get('[placeholder="Confirm Password"]').type("arditest1");
  cy.get("button").click();
});
