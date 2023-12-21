export class AuthPage {
  loginSection() {
    //write an invalid email, check for assertion and write the correct input
    cy.get('[for="input-email"]').type("ardithaci");
    cy.contains("nb-card", "Login").click();
    cy.get(".form-control-group")
      .eq(0)
      .find("p")
      .invoke("text")
      .then((email) => {
        cy.wrap(email).should("contain", "Email should be the real one!");
        if (
          email.includes("Email should be the real one!") ||
          email.includes("Email is required!")
        ) {
          cy.get("#input-email").clear().type("ardithaci@test.com");
        }
      });

    //write an invalid passowrd, check for asserition and wirte the correct input
    cy.get('[placeholder="Password"]').type("asd");
    cy.contains("nb-card", "Login").click();
    cy.get(".form-control-group")
      .eq(1)
      .find("p")
      .invoke("text")
      .then((password) => {
        cy.wrap(password).should(
          "contain",
          "Password should contain from 4 to 50 characters"
        );
        if (
          password.includes(
            "Password should contain from 4 to 50 characters"
          ) ||
          password.includes("Password is required!")
        ) {
          cy.get('[placeholder="Password"]').type("arditest");
        }
      });

    cy.get('[type="checkbox"]').check({ force: true });
    cy.get("button").click();
  }

  registerSection() {
    cy.get('[placeholder="Full name"]').type("Ardii");
    cy.get('[placeholder="Email address"]').type("Ardithaci1@test.com");
    cy.get('[placeholder="Password"]').type("arditest");
    cy.get('[placeholder="Confirm Password"]').type("arditest");
    cy.get('[type="checkbox"]').check({ force: true });
    cy.get("button").click();
  }
  // requestPasswordSection() {
  //   cy.get('[placeholder="Email address"]').type("ardithaci@test.com");
  //   cy.get("button").click();
  // }

  // resetPasswordSection() {
  //  cy.get('[placeholder="New Password"]').type("arditest1");
  //  cy.get('[placeholder="Confirm Password"]').type("arditest1");
  //  cy.get("button").click();
  // }
}

export const onAuthPage = new AuthPage();
