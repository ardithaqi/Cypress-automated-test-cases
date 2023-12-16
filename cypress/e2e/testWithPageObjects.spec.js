/// <reference types="cypress" />

const { onLayoutsPage } = require("../support/page_objects/layoutsPage");
const { navigateTo } = require("../support/page_objects/navigationPage");


describe("Test with Page Objects", () => {
  beforeEach("open application", () => {
    cy.openHomePage();
  });

  it("verify navigation", () => {
    navigateTo.formsLayoutsPage();
    navigateTo.modalOverlaysPage();
    navigateTo.smartTablePage();
  });

  it("layoutPage", () => {
    navigateTo.layoutStepperPage();
    onLayoutsPage.stepperFirstSection();
    onLayoutsPage.stepperSecondSection();
    onLayoutsPage.stepperThirdSection();
    navigateTo.layoutAccordionPage();
    onLayoutsPage.accordionSection();
  });

})