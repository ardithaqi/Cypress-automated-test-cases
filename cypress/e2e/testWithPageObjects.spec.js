const { navigateTo } = require("../support/page_objects/navigationPage");

describe("Test with Page Objects", () => {
    beforeEach("open application", () => {
      cy.openHomePage();
    });

    it("verify navigation", () => {
        navigateTo.formsLayoutsPage();
        navigateTo.modalOverlaysPage();
        navigateTo.smartTablePage();
      });

})