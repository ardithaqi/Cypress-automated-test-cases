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

export class NavigationPage{

      layoutStepperPage() {
         groupNamesItem("Layout");
         cy.contains("Stepper").click();
      }
      layoutAccordionPage() {
         groupNamesItem("Layout");
         cy.contains("Accordion").click();
      }

      formsLayoutPage(){
        groupNamesItem('Forms');
        cy.contains('Form Layout').click();
      }
      formsDatepickerPage(){
        groupNamesItem('Forms')
        cy.contains('Datepicker').click();
      }
      
      modalDialogPage() {
         groupNamesItem('Modal')
         cy.contains("Dialog").click();
      }
      modalWindowPage(){
        groupNamesItem('Modal')
        cy.contains('Window').click();
      }
      modalPopoverPage(){
        groupNamesItem('Modal');
        cy.contains('Popover').click();
      }
      modalToastrPage(){
        groupNamesItem('Modal')
        cy.contains('Toastr').click()
      }
      modalTooltipPage(){
        groupNamesItem('Modal')
        cy.contains('Tooltip').click();
      }

      tableSmartTablePage() {
         groupNamesItem('Tables & Data')
         cy.contains("Smart Table").click();
    }
    


}

export const navigateTo = new NavigationPage();