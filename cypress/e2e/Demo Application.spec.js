/// <reference types="cypress" />

const { onFormsPage } = require("../support/page_objects/formsPage");
const { onLayoutsPage } = require("../support/page_objects/layoutsPage");
const { onModalPage } = require("../support/page_objects/modalPage");
const { navigateTo } = require("../support/page_objects/navigationPage");
const { onTablePage } = require("../support/page_objects/tablePage");

describe("Test with Page Objects", () => {
  beforeEach("open application", () => {
    cy.openHomePage();
  });

  it("verify navigation", () => {
    navigateTo.layoutStepperPage();
    navigateTo.modalDialogPage();
    navigateTo.tableSmartTablePage();
  });

  it("layout Page", () => {
    navigateTo.layoutStepperPage();
    onLayoutsPage.stepperFirstSection();
    onLayoutsPage.stepperSecondSection();
    onLayoutsPage.stepperThirdSection();
    navigateTo.layoutAccordionPage();
    onLayoutsPage.accordionSection();
  });

  it("forms Page", () => {
    navigateTo.formsLayoutPage();
    onFormsPage.formsSection();
    navigateTo.formsDatepickerPage();
    onFormsPage.datepickerSection();
  });

  it("modal Page", () => {
    navigateTo.modalDialogPage();
    onModalPage.dialogSection();
    navigateTo.modalWindowPage();
    onModalPage.windowSection();
    navigateTo.modalPopoverPage();
    onModalPage.popoverSection();
    navigateTo.modalToastrPage();
    onModalPage.toastrSection();
    navigateTo.modalTooltipPage();
    onModalPage.tooltipSection();
  });

  it.only("smart table Page", () => {
    // navigateTo.tableSmartTablePage();
    // onTablePage.smartTableSection();
    navigateTo.tableTreeGridPage();
    onTablePage.treeGridSection();
  });
});
