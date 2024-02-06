/* eslint-disable no-undef */

describe("Yellow GirlFriend App", () => {
  it("display the terms and conditions banner when the page loads", () => {
    cy.visit("/");
    cy.get('[data-testid="accept-terms"]').should("be.visible");
  });
});