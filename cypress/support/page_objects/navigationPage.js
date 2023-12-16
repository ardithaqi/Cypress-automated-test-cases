function groupNamesIteam(groupName) {
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

export class NavigationPage{

    layoutStepperPage() {
        groupNamesIteam("Layout");
        cy.contains("Stepper").click();
      }
      layoutAccordionPage() {
        groupNamesIteam("Layout");
        cy.contains("Accordion").click();
      }
      
    modalOverlaysPage() {
        cy.contains("Modal").click();
        cy.contains("Dialog").click();
    }

    smartTablePage() {
        cy.contains("Tables").click();
        cy.contains("Smart Table").click();
    }
    


}

export const navigateTo = new NavigationPage();