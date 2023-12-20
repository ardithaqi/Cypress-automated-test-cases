/// <reference types="cypress" />

import { navigateTo } from "../support/navigation_features/Navigation/navigationPage";
import { onFormsPage } from "../support/navigation_features/formsPage";
import { onLayoutsPage } from "../support/navigation_features/layoutsPage";
import { onModalPage } from "../support/navigation_features/modalPage";
import { onTablePage } from "../support/navigation_features/tablePage";

describe("Test with Page Objects", () => {
  beforeEach("open application", () => {
    cy.openHomePage();
  });

  it("verify navigation", () => {
    navigateTo.layoutAccordionPage();
    navigateTo.layoutStepperPage();
    navigateTo.formsLayoutPage();
    navigateTo.formsDatepickerPage();
    navigateTo.modalDialogPage();
    navigateTo.modalWindowPage();
    navigateTo.modalPopoverPage();
    navigateTo.modalToastrPage();
    navigateTo.modalTooltipPage();
    navigateTo.tableSmartTablePage();
    navigateTo.tableTreeGridPage();
  });

  it("layout Page", () => {
    navigateTo.layoutStepperPage();
    onLayoutsPage.stepperFirstSection();
    onLayoutsPage.stepperSecondSection;
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

  it("smart table Page", () => {
    navigateTo.tableSmartTablePage();
    onTablePage.smartTableSection();
    navigateTo.tableTreeGridPage();
    onTablePage.treeGridSection();
  });
});
