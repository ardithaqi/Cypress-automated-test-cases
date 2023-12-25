export class NavbarButtons {
  navbarButtons() {
    cy.get("nav").then((nav) => {
      cy.wrap(nav).find("nb-icon").eq(0).click();
      cy.wrap(nav)
        .find("nb-select")
        .then((navInput) => {
          cy.wrap(navInput).click();
          cy.get(".options-list")
            .find("nb-option")
            .each((itemList, index) => {
              cy.wrap(itemList).click();
              cy.wrap(itemList)
                .invoke("text")
                .then((itemText) => {
                  cy.wrap(navInput).invoke("text").should("contain", itemText);
                  if (index < 3) {
                    cy.wrap(navInput).click();
                  }
                });
            });
        });

      cy.wrap(nav)
        .find("nb-actions")
        .then((nbButtons) => {
          cy.wrap(nbButtons).find("button").click();
          cy.get(".search-input").type("random text{enter}");
          cy.wrap(nbButtons)
            .find("nb-user")
            .then((profile) => {
              cy.wrap(profile).click();
              cy.get(".menu-items").find('[title="Profile"]').click();
              cy.wrap(profile).click();
              cy.get(".menu-items").find('[title="Log out"]').click();
            });
        });
    });
  }
}
export const onNavbarButtons = new NavbarButtons();
