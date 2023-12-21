/// <reference types="cypress" />

import { navigateTo } from "../support/navigation_features/Navigation/navigationPage";
import { onAuthPage } from "../support/navigation_features/authPage";
import { onExtraComponents } from "../support/navigation_features/extraComponentsPage";
import { onFormsPage } from "../support/navigation_features/formsPage";
import { onLayoutsPage } from "../support/navigation_features/layoutsPage";
import { onModalPage } from "../support/navigation_features/modalPage";
import { onTablePage } from "../support/navigation_features/tablePage";

describe("Testing Navigation Features", () => {
  beforeEach("open application", () => {
    cy.openHomePage();
  });

  it("Verify navigation features", () => {
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

  it("Layout Page", () => {
    navigateTo.layoutStepperPage();
    onLayoutsPage.stepperFirstSection();
    onLayoutsPage.stepperSecondSection();
    onLayoutsPage.stepperThirdSection();
    navigateTo.layoutAccordionPage();
    onLayoutsPage.accordionSection();
  });

  it("Forms Page", () => {
    navigateTo.formsLayoutPage();
    onFormsPage.formsSection();
    navigateTo.formsDatepickerPage();
    onFormsPage.datepickerSection();
  });

  it("Modal & Overlays Page", () => {
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

  it("Tables & Data Page", () => {
    navigateTo.tableSmartTablePage();
    onTablePage.smartTableSection();
    navigateTo.tableTreeGridPage();
    onTablePage.treeGridSection();
  });

  it("Auth Page", () => {
    navigateTo.AuthLoginPage();
    onAuthPage.loginSection();
    navigateTo.AuthRegisterPage();
    onAuthPage.registerSection();
    navigateTo.AuthRequestPasswordPage();
    onAuthPage.requestPasswordSection();
    navigateTo.AuthResetPasswordPage();
    onAuthPage.resetPasswordSection();
  });

  it.only("Extra Components Page", () => {
    navigateTo.ExtraComponentsPage();
    onExtraComponents.calendarSection();
  });
});
