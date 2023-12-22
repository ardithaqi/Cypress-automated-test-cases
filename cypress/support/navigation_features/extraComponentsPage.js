export class ExtraComponentsPage {
  //First simple calendar
  firstCalendar() {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // If we want to change the date and see if else works too we add this below
    // let date = new Date("Fri Jan 22 2024 14:58:13 GMT+0100");
    // then force type the todaysDate at the firstCalendar input and have the button to double click

    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let nextMonth = (currentMonth + 1) % 12;
    let currentYear = date.getFullYear();
    let futureYear = date.getFullYear() + 1;
    let todaysDate = `${monthNames[currentMonth]} ${currentDate}, ${currentYear}`;
    console.log(todaysDate);

    cy.get(".calendars")
      .find(".calendar-container")
      .then((calendar) => {
        cy.wrap(calendar)
          .eq(0)
          .then((firstCalendar) => {
            cy.wrap(firstCalendar)
              .find(".title")
              .invoke("text")
              .should("contain", todaysDate);
            cy.wrap(firstCalendar).find('[data-name="chevron-right"]').click();
            cy.wrap(firstCalendar)
              .find(".day-cell")
              .not(".bounding-month")
              .contains("15")
              .click();

            cy.wrap(firstCalendar)
              .find("nb-calendar-navigation")
              .invoke("attr", "ng-reflect-date")
              .then((dateAttribute) => {
                if (
                  dateAttribute.includes("Jan") &&
                  dateAttribute.includes(`${futureYear}`)
                ) {
                  console.log(currentYear + 1);
                  cy.get(".subtitle")
                    .eq(0)
                    .invoke("text")
                    .should(
                      "contain",
                      ` Selected date: Jan 15, ${currentYear + 1}`
                    );
                } else {
                  cy.get(".subtitle")
                    .eq(0)
                    .invoke("text")
                    .should(
                      "contain",
                      ` Selected date: ${monthNames[nextMonth]} 15, ${currentYear}`
                    );
                }
              });
          });
      });
  }

  //Second Calendar with a range choice
  secondCalendar() {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // let date = new Date("Fri Jan 22 2024 14:58:13 GMT+0100");
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let nextMonth = (currentMonth + 1) % 12;
    let currentYear = date.getFullYear();
    let futureYear = date.getFullYear() + 1;
    let todaysDate = `${monthNames[currentMonth]} ${currentDate}, ${currentYear}`;

    cy.get(".calendars")
      .find(".calendar-container")
      .then((calendar) => {
        cy.wrap(calendar)
          .eq(1)
          .then((secondCalendar) => {
            cy.wrap(secondCalendar)
              .find(".title")
              .invoke("text")
              .should("contain", todaysDate);

            cy.wrap(secondCalendar)
              .find(".day-cell")
              .not(".bounding-month")
              .contains("15")
              .click();
            cy.wrap(secondCalendar).find('[data-name="chevron-right"]').click();
            cy.wrap(secondCalendar)
              .find(".day-cell")
              .not(".bounding-month")
              .contains("27")
              .click();

            cy.wrap(secondCalendar)
              .find("nb-calendar-navigation")
              .invoke("attr", "ng-reflect-date")
              .then((dateAttribute) => {
                if (
                  dateAttribute.includes("Jan") &&
                  dateAttribute.includes(`${futureYear}`)
                ) {
                  cy.get(".subtitle")
                    .eq(1)
                    .invoke("text")
                    .should(
                      "contain",
                      ` Selected range: ${
                        monthNames[currentMonth]
                      } 15, ${currentYear} - ${monthNames[nextMonth]} 27, ${
                        currentYear + 1
                      }`
                    );
                } else {
                  cy.get(".subtitle")
                    .eq(1)
                    .invoke("text")
                    .should(
                      "contain",
                      ` Selected range: ${monthNames[currentMonth]} 15, ${currentYear} - ${monthNames[nextMonth]} 27, ${currentYear}`
                    );
                }
              });
          });
      });
  }

  //Third calendar with price on dates
  thirdCalendar() {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // If we want to change the date and see if else works too we add this below
    // let date = new Date("Fri Jan 22 2024 14:58:13 GMT+0100");
    // then force type the todaysDate at the firstCalendar input and have the button to double click

    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let nextMonth = (currentMonth + 4) % 12;
    let currentYear = date.getFullYear();
    let futureYear = date.getFullYear() + 1;
    console.log(futureYear);

    let todaysDate = `${monthNames[currentMonth]} ${currentDate}, ${currentYear}`;
    console.log(todaysDate);

    cy.get(".calendars")
      .find(".calendar-container")
      .then((calendar) => {
        cy.wrap(calendar)
          .eq(2)
          .then((thirdCalendar) => {
            cy.wrap(thirdCalendar)
              .find(".title")
              .invoke("text")
              .should("contain", todaysDate);

            cy.wrap(thirdCalendar)
              .find('[data-name="chevron-right"]')
              .dblclick();
            cy.wrap(thirdCalendar)
              .find('[data-name="chevron-right"]')
              .dblclick();
            cy.wrap(thirdCalendar)
              .find(".day-cell")
              .not(".bounding-month")
              .find("div")
              .contains("15")
              .click();

            cy.wrap(thirdCalendar)
              .find("nb-calendar-navigation")
              .invoke("attr", "ng-reflect-date")
              .then((dateAttribute) => {
                if (
                  dateAttribute.includes(`${monthNames[nextMonth]}`) &&
                  dateAttribute.includes(`${futureYear}`)
                ) {
                  cy.get(".subtitle")
                    .eq(2)
                    .invoke("text")
                    .should(
                      "contain",
                      ` Selected date: ${monthNames[nextMonth]} 15, ${futureYear}`
                    );
                } else {
                  cy.get(".subtitle")
                    .eq(2)
                    .invoke("text")
                    .should(
                      "contain",
                      ` Selected date: ${monthNames[nextMonth]} 15, ${currentYear}`
                    );
                }
              });
          });
      });
  }
}
export const onExtraComponents = new ExtraComponentsPage();
