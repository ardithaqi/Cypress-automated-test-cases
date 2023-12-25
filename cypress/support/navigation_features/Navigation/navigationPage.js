function groupNamesItem(groupName) {
  cy.contains("a", groupName).then((menu) => {
    cy.wrap(menu)
      .find(".expand-state g g")
      .invoke("attr", "data-name")
      .then((expandIcon) => {
        if (expandIcon.includes("chevron-left")) {
          cy.wrap(menu).click();
        }
      });
  });
}

export class NavigationPage {
  //Layout Page
  layoutStepperPage() {
    groupNamesItem("Layout");
    cy.contains("Stepper").click();
  }
  layoutAccordionPage() {
    groupNamesItem("Layout");
    cy.contains("Accordion").click();
  }

  //Forms Page
  formsLayoutPage() {
    groupNamesItem("Forms");
    cy.contains("Form Layout").click();
  }
  formsDatepickerPage() {
    groupNamesItem("Forms");
    cy.contains("Datepicker").click();
  }

  //Modal & Overlays Page
  modalDialogPage() {
    groupNamesItem("Modal");
    cy.contains("Dialog").click();
  }
  modalWindowPage() {
    groupNamesItem("Modal");
    cy.contains("Window").click();
  }
  modalPopoverPage() {
    groupNamesItem("Modal");
    cy.contains("Popover").click();
  }
  modalToastrPage() {
    groupNamesItem("Modal");
    cy.contains("Toastr").click();
  }
  modalTooltipPage() {
    groupNamesItem("Modal");
    cy.contains("Tooltip").click();
  }

  //Extra components Page
  ExtraComponentsPage() {
    groupNamesItem("Extra Components");
    cy.contains("Calendar").click();
  }

  //Tables & Data Page
  tableSmartTablePage() {
    groupNamesItem("Tables & Data");
    cy.contains("Smart Table").click();
  }
  tableTreeGridPage() {
    groupNamesItem("Tables & Data");
    cy.contains("Tree Grid").click();
  }

  //Auth Page
  AuthLoginPage() {
    groupNamesItem("Auth");
    cy.contains("Login").click();
    // cy.get("nb-card-header").find("nav a").click();
  }
  AuthRegisterPage() {
    groupNamesItem("Auth");
    cy.contains("Register").click();
    // cy.get("nb-card-header").find("nav a").click();
  }
  AuthRequestPasswordPage() {
    groupNamesItem("Auth");
    cy.contains("Request Password").click();
    // cy.get("nb-card-header").find("nav a").click();
  }
  AuthResetPasswordPage() {
    groupNamesItem("Auth");
    cy.contains("Reset Password").click();
    // cy.get("nb-card-header").find("nav a").click();
  }
}

export const navigateTo = new NavigationPage();
