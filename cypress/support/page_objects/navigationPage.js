export class NavigationPage{

    formsLayoutsPage() {
        cy.contains('Forms').click();
         cy.contains("Form Layout").click();
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