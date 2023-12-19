export class TablePage {
  smartTableSection() {
    // //Checking assertion for Age
    // cy.contains("nb-card", "Smart Table")
    //   .find("thead tr")
    //   .then((tableHead) => {
    //     cy.wrap(tableHead)
    //       .eq(1)
    //       .find('[placeholder="Age"]')
    //       .type("40")
    //       .wait(1000);
    //     cy.get("tbody tr").each((tableRow) => {
    //       cy.wrap(tableRow)
    //         .find("td")
    //         .eq(6)
    //         .invoke("text")
    //         .should("contain", "40");
    //     });
    //   });

    //adding a new user
    cy.contains("nb-card", "Smart Table")
      .find("thead")
      .then((tableHead) => {
        cy.wrap(tableHead).find(".nb-plus").click().wait(1000);
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
          });
      });
  }

  treeGridSection() {}
}

export const onTablePage = new TablePage();
