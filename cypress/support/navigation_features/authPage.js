let name = Cypress.env("CYPRESS_NAME");
let email = Cypress.env("CYPRESS_EMAIL");
let password = Cypress.env("CYPRESS_PASSWORD");
let newPassword = Cypress.env("CYPRESS_NEW_PASSWORD");

export class AuthPage {
  //Login section
  loginSection() {
    //Write an invalid email, check for assertion and write the correct input
    cy.get('[for="input-email"]').type("ardithaci");
    cy.contains("nb-card", "Login").click();
    cy.get(".form-control-group")
      .eq(0)
      .find("p")
      .invoke("text")
      .then((emailInput) => {
        cy.wrap(emailInput).should("contain", "Email should be the real one!");
        if (
          emailInput.includes("Email should be the real one!") ||
          emailInput.includes("Email is required!")
        ) {
          cy.get("#input-email").clear().type(email);
        }
      });

    //Write an invalid passowrd, check for asserition and wirte the correct input
    cy.get('[placeholder="Password"]').type("asd");
    cy.contains("nb-card", "Login").click();
    cy.get(".form-control-group")
      .eq(1)
      .find("p")
      .invoke("text")
      .then((passwordInput) => {
        cy.wrap(passwordInput).should(
          "contain",
          "Password should contain from 4 to 50 characters"
        );
        if (
          passwordInput.includes(
            "Password should contain from 4 to 50 characters"
          ) ||
          passwordInput.includes("Password is required!")
        ) {
          cy.get('[placeholder="Password"]').type(password);
        }
      });

    cy.get('[type="checkbox"]').check({ force: true });
    cy.get("button").click();
    cy.wait(1000);
  }

  //Register section
  registerSection() {
    cy.get('[placeholder="Full name"]').type(name);
    cy.get('[placeholder="Email address"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[placeholder="Confirm Password"]').type(password);
    cy.get('[type="checkbox"]').check({ force: true });
    cy.get("button").click();
    cy.wait(1000);
  }

  //Request password section
  requestPasswordSection() {
    cy.get('[placeholder="Email address"]').type(email);
    cy.get("button").click();
    cy.wait(1000);
  }

  //Reset password section
  resetPasswordSection() {
    cy.get('[placeholder="New Password"]').type(newPassword);
    cy.get('[placeholder="Confirm Password"]').type(newPassword);
    cy.get("button").click();
    cy.wait(1000);
  }
}

export const onAuthPage = new AuthPage();
