/**
 * Left sidebar menu shared by every DEMOQA category page (Elements, Forms,
 * Alerts/Frame & Windows, Widgets, Interactions, Book Store Application).
 *
 * Only the group matching the card used to land on the page starts expanded,
 * so call openGroup() for any other group before openItem().
 */
class CategoryMenu {
  openGroup(groupName) {
    cy.contains('.group-header', groupName, { timeout: 10000 }).click()
    return this
  }

  openItem(itemName) {
    cy.contains('.menu-list .text', itemName, { timeout: 10000 }).click()
    return this
  }
}

export default new CategoryMenu()
