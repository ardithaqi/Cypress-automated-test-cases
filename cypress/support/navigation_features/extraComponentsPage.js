export class ExtraComponentsPage {
  calendarSection() {
    let date = new Date();
    let currentDate = date.getDate();

    cy.get(".calendars")
      .find(".calendar-container")
      .then((calendar) => {
        cy.wrap(calendar).eq(0).find(".title").should("contain", currentDate);
      });
  }
}
export const onExtraComponents = new ExtraComponentsPage();
