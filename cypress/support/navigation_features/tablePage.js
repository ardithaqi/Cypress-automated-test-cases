export class TablePage {
  //Smart table section
  smartTableSection() {
    //Adding a new user
    cy.get("thead").then((tableHead) => {
      cy.wrap(tableHead).find(".nb-plus").click();
      cy.wrap(tableHead)
        .find("tr")
        .eq(2)
        .then((addNewUser) => {
          cy.wrap(addNewUser).find('[placeholder="First Name"]').type("Ardi");
          cy.wrap(addNewUser).find('[placeholder="Last Name"]').type("Thaci");
          cy.wrap(addNewUser)
            .find('[placeholder="Username"]')
            .type("ardithaci");
          cy.wrap(addNewUser)
            .find('[placeholder="E-mail"]')
            .type("ardithaci@test.com");
          cy.wrap(addNewUser).find('[placeholder="Age"]').type("27");
          cy.wrap(addNewUser).find(".nb-checkmark").click();

          //assertion if the first name matches the one we just added
          cy.get("tbody tr").first().find("td").eq(2).should("contain", "Ardi");
          cy.get("tbody tr")
            .first()
            .find("td")
            .eq(3)
            .should("contain", "Thaci");
        });
    });

    //Changing details of a user
    cy.get("tbody")
      .contains("tr", "Ardi")
      .then((row) => {
        cy.wrap(row).find(".nb-edit").click();
        cy.wrap(row).find('[placeholder="Age"]').clear().type("40");
        cy.wrap(row).find(".nb-checkmark").click();
        cy.wrap(row).find("td").eq(6).should("contain", "40");
      });

    //Checking assertion for Age
    const age = [20, 30, 40, 200];
    cy.wrap(age).each((age) => {
      cy.get('thead [placeholder="Age"]').clear().type(age).wait(500);

      cy.get("tbody tr").each((tableRow) => {
        if (age === 200) {
          cy.wrap(tableRow).should("contain", "No data found");
          cy.get('thead [placeholder="Age"]').clear();
        } else {
          cy.wrap(tableRow)
            .find("td")
            .eq(6)
            .invoke("text")
            .should("contain", age);
        }
      });
    });

    //Clicking `next` button to show other users
    const numberOfClicks = 4;
    for (let i = 0; i < numberOfClicks; i++) {
      cy.get("nav")
        .find("ul li")
        .eq(6)
        .then((nextButton) => {
          cy.wrap(nextButton).click();
        });
    }
    //Clicking `prev` button to show other users
    for (let i = 0; i < numberOfClicks; i++) {
      cy.get("nav")
        .find("ul li")
        .eq(1)
        .then((prevButton) => {
          cy.wrap(prevButton).click();
        });
    }
  }

  //Tree grid section
  treeGridSection() {
    //Search for a particular file
    const files = [
      "project-1.doc",
      "project-2.doc",
      "project-3",
      "project-4.docx",
      "Report 1",
      "Report 2",
      "backup.bkp",
      "secret-note.txt",
    ];

    cy.wrap(files).each((files) => {
      cy.get("#search").type(files);
      cy.wait(500);
      cy.get("[role='rowgroup']")
        .find("tr")
        .eq(2)
        .find("td")
        .eq(0)
        .should("contain", files);
      cy.get("#search").clear();
    });

    //Click all rows
    cy.wait(1000);
    cy.get("tbody tr").then((tableRow) => {
      cy.wrap(tableRow).eq(0).click();
      cy.get('[role="rowgroup"]').find("tr").eq(6).click();
      cy.get('[role="rowgroup"]').find("tr").eq(9).click();
    });
  }
}

export const onTablePage = new TablePage();
