/// <reference types="cypress" />

const { onFormsPage } = require("../support/page_objects/formsPage");
const { onLayoutsPage } = require("../support/page_objects/layoutsPage");
const { onModalPage } = require("../support/page_objects/modalPage");
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

  it("layout Page", () => {
    navigateTo.layoutStepperPage();
    onLayoutsPage.stepperFirstSection();
    onLayoutsPage.stepperSecondSection();
    onLayoutsPage.stepperThirdSection();
    navigateTo.layoutAccordionPage();
    onLayoutsPage.accordionSection();
  });

  it('forms Page',()=>{
    navigateTo.formsLayoutPage();
    onFormsPage.formsSection();
    navigateTo.formsLayoutPage();
    onFormsPage.datepickerSection();
  })

  it.only('modal Page', ()=>{
    navigateTo.modalOverlaysPage();
    onModalPage.dialogSection();
  })

})