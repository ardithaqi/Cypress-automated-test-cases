export class LayoutsPage {
  stepperFirstSection() {
    const numberOfClicks = 3;
    for (let i = 0; i < numberOfClicks; i++) {
      cy.get(".step-content").first().find("button").eq(1).click().wait(200);
    }
    for (let i = 0; i < numberOfClicks; i++) {
      cy.get(".step-content").first().find("button").eq(0).click().wait(200);
    }
  }
  stepperSecondSection() {
    cy.get(".step-content")
      .eq(1)
      .then((menu) => {
        cy.wrap(menu).find('[placeholder="Enter your name"]').type("Ardi");
        cy.wrap(menu).find("button").click();
        cy.wrap(menu)
          .find('[placeholder="Enter favorite movie"]')
          .type("Shutter Island");
        cy.wrap(menu).find("button").contains("next").click();
        cy.wrap(menu)
          .find('[placeholder="Enter something"]')
          .type("Birds are amazing");
        cy.wrap(menu).find("button").contains("Confirm").click();
        cy.wait(200);
        cy.wrap(menu).find("button").contains("Try again").click();
      });
  }
  stepperThirdSection() {
    cy.get(".vertical")
      .find(".header")
      .then((menu) => {
        cy.wrap(menu).find(".label-index").eq(1).click();
        cy.wrap(menu).find(".label-index").eq(2).click();
        cy.wrap(menu).find(".label-index").eq(3).click();
      });

    const numberOfClicks = 3;
    for (let i = 0; i < numberOfClicks; i++) {
      cy.get(".vertical").find("button").contains("prev").click().wait(200);
    }
  }

  accordionSection() {
    cy.get(".ng-star-inserted").then((menu) => {
      cy.wrap(menu)
        .contains("nb-card", "Toggle Accordion By Button")
        .find("button")
        .click()
        .wait(200)
        .click();
      cy.wrap(menu)
        .find("nb-accordion")
        .eq(0)
        .then((items) => {
          cy.wrap(items).contains("Product Details").click();
          cy.wrap(items).contains("Reviews").click();
          cy.wrap(items).contains("Edit").click();
        });
      cy.wrap(menu)
        .find("nb-accordion")
        .eq(1)
        .then((items) => {
          cy.wrap(items).contains("Product Details").click();
          cy.wrap(items).contains("Reviews").click();
          cy.wrap(items).contains("Edit").click();
        });
    });
  }
}

export const onLayoutsPage = new LayoutsPage();
