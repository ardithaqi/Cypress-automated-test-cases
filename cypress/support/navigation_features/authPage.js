export class AuthPage {
  loginSection() {
    cy.loginToApplication();
    cy.log("logged in");
  }

  registerSection() {
    cy.registerUser();
  }
  requestPasswordSection() {
    cy.requestPassword();
  }

  resetPasswordSection() {
    cy.resetPassword();
  }
}

export const onAuthPage = new AuthPage();
