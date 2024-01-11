export class FormsPage {
  //Forms Section
  formsSection() {
    //Inline form
    cy.contains("nb-card", "Inline form")
      .find("form")
      .then((inlineMenu) => {
        cy.wrap(inlineMenu).find('[placeholder="Jane Doe"]').type("Ardi Thaci");
        cy.wrap(inlineMenu)
          .find('[placeholder="Email"]')
          .type("ardithaci@test.com");
        cy.wrap(inlineMenu).find('[type="checkbox"]').check({ force: true });
        cy.wrap(inlineMenu).submit();
      });

    //Using the Grid
    cy.contains("nb-card", "Using the Grid")
      .find("form")
      .then((gridMenu) => {
        cy.wrap(gridMenu)
          .find('[placeholder="Email"]')
          .type("ardithaci@test.com");
        cy.wrap(gridMenu).find('[placeholder="Password"]').type("arditest");
        cy.wrap(gridMenu)
          .find('[type="radio"]')
          .each((radioCheck) => {
            cy.wrap(radioCheck).check({ force: true });
          });
        // cy.wrap(gridMenu).submit();

        //assertion for this section
        cy.wrap(gridMenu)
          .find("#inputEmail1")
          .invoke("prop", "value")
          .should("contain", "ardithaci@test.com");
        cy.wrap(gridMenu)
          .find("#inputPassword2")
          .invoke("prop", "value")
          .should("contain", "arditest");
        cy.wrap(gridMenu).find('[type="radio"]').eq(2).should("be.disabled");
        cy.wrap(gridMenu).submit();
      });

    //Basic form
    cy.contains("nb-card", "Basic form")
      .find("form")
      .then((basicMenu) => {
        cy.wrap(basicMenu)
          .find("#exampleInputEmail1")
          .type("ardithaci@test.com");
        cy.wrap(basicMenu).find("#exampleInputPassword1").type("arditest");
        cy.wrap(basicMenu).find('[type="checkbox"]').click({ force: true });
        // cy.wrap(basicMenu).submit();

        //assertion for this section
        cy.wrap(basicMenu)
          .find('[for="exampleInputEmail1"]')
          .invoke("text")
          .then((emailValidation) => {
            expect(emailValidation).to.equal("Email address");
          });
        cy.wrap(basicMenu)
          .find('[for="exampleInputPassword1"]')
          .then((passwordValidation) => {
            const passwordText = passwordValidation.text().trim();
            expect(passwordText).to.equal("Password");

            //one last assertion with the second section
            cy.contains("nb-card", "Using the Grid")
              .find("form")
              .then((gridSection) => {
                cy.wrap(gridSection)
                  .find('[for="inputPassword2"]')
                  .invoke("text")
                  .then((gridLabelPassword) => {
                    expect(gridLabelPassword).to.equal(passwordText);
                  });
              });
          });
        cy.wrap(basicMenu).submit();
      });

    //Form without labels
    cy.contains("nb-card", "Form without label")
      .find("form")
      .then((labelMenu) => {
        cy.wrap(labelMenu).find('[placeholder="Recipients"]').type("Shoqnia");
        cy.wrap(labelMenu).find('[placeholder="Subject"]').type("Viti i ri");
        cy.wrap(labelMenu)
          .find('[placeholder="Message"]')
          .type("Hajde mer perhajr");
        cy.wrap(labelMenu).submit();
      });

    //Block form
    cy.contains("nb-card", "Block form")
      .find("nb-card-body")
      .then((blockMenu) => {
        cy.wrap(blockMenu)
          .find(".row")
          .eq(0)
          .then((firstRow) => {
            cy.wrap(firstRow).find("#inputFirstName").type("First Name");
            cy.wrap(firstRow).find("#inputLastName").type("Last Name");

            //assertion
            cy.wrap(firstRow)
              .find('[for="inputFirstName"]')
              .invoke("text")
              .then((firstNameLabel) => {
                cy.wrap(firstRow)
                  .find("#inputFirstName")
                  .invoke("prop", "value")
                  .then((firstName) => {
                    expect(firstName).to.equal(firstNameLabel);
                  });
              });
            //assertion
            cy.wrap(firstRow)
              .find('[for="inputLastName"]')
              .invoke("text")
              .then((lastNameLabel) => {
                cy.wrap(firstRow)
                  .find("#inputLastName")
                  .invoke("prop", "value")
                  .then((lastName) => {
                    expect(lastName).to.equal(lastNameLabel);
                  });
              });
          });

        cy.wrap(blockMenu)
          .find(".row")
          .eq(1)
          .then((secondRow) => {
            cy.wrap(secondRow).find("#inputEmail").type("ardithaci@test.com");
            cy.wrap(secondRow)
              .find("#inputWebsite")
              .type("linkedin.com/ardithaqi");
          });
        cy.wrap(blockMenu).find("button").click();
      });

    //Horizontal form
    cy.contains("nb-card", "Horizontal form")
      .find("form")
      .then((horizontalMenu) => {
        cy.wrap(horizontalMenu).find("#inputEmail3").type("ardithaci@test.com");
        cy.wrap(horizontalMenu).find("#inputPassword3").type("arditest");
        cy.wrap(horizontalMenu)
          .find('[type="checkbox"]')
          .check({ force: true });
        cy.wrap(horizontalMenu).submit();
      });
  }

  //Datepicker section
  datepickerSection() {
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

    let date = new Date();
    // date.setDate(date.getDate());
    let currentDate = date.getDate();
    let currentMonthNum = date.getMonth();
    let currentMonth = date.toLocaleDateString("en-US", { month: "short" });
    let nextMonth = (currentMonthNum + 1) % 12;
    console.log(monthNames[nextMonth]);
    let currentYear = date.getFullYear();
    let futureDate =
      (currentDate + 7) %
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    console.log(futureDate);

    let dateToAssert = `${currentMonth} ${currentDate}, ${currentYear}`;

    //these are used at the datepicker with range
    let todaysDateAssert = `${currentMonth} ${currentDate}, ${currentYear} - ${currentMonth} ${futureDate}, ${currentYear}`;
    let futureDateAssert = `${currentMonth} ${currentDate}, ${currentYear} - ${
      monthNames[nextMonth]
    } ${futureDate}, ${currentYear + 1}`;

    // Common Datepicker
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        cy.get(".day-cell")
          .not(".bounding-month")
          .contains(currentDate)
          .click();
        //option 1 for assertion
        cy.wrap(input).invoke("prop", "value").should("contain", dateToAssert);
        //option 2 for assertion
        cy.wrap(input).should("have.value", dateToAssert);
      });

    //Datepicker with Range
    cy.contains("nb-card", "Datepicker With Range")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        cy.get("nb-calendar-picker").then((dayPicker) => {
          if (currentDate <= 23) {
            cy.wrap(dayPicker)
              .find(".day-cell")
              .not(".bounding-month")
              .contains(currentDate)
              .click();
            cy.wrap(dayPicker)
              .find(".day-cell")
              .not(".bounding-month")
              .contains(futureDate)
              .click();

            cy.wrap(input)
              .invoke("prop", "value")
              .should("contain", todaysDateAssert);
          } else {
            cy.wrap(dayPicker)
              .find(".day-cell")
              .not(".bounding-month")
              .contains(currentDate)
              .click();
            cy.wrap(dayPicker)

              .find("[class='day-cell bounding-month']")
              .contains(futureDate)
              .click();

            cy.wrap(input)
              .invoke("prop", "value")
              .should("contain", futureDateAssert);
          }
        });
      });

    //Datepicker With Disabled Min Max Values
    const choosenDay = 10;
    cy.contains("nb-card", "Datepicker With Disabled Min Max Values")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        if (currentDate !== choosenDay) {
          cy.get(".day-cell").not("disabled").contains(currentDate).click();
          cy.wrap(input)
            .invoke("prop", "value")
            .should("contain", dateToAssert);
        } else {
          cy.get(".day-cell")
            .contains(choosenDay)
            .click()
            .invoke("attr", "class")
            .should("contain", "today");
        }
      });
  }
}

export const onFormsPage = new FormsPage();
