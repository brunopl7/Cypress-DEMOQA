/**
 * Left sidebar menu shared by every DEMOQA category page (Elements, Forms,
 * Alerts/Frame & Windows, Widgets, Interactions, Book Store Application).
 *
 * Only the group matching the card used to land on the page starts expanded,
 * so call openGroup() for any other group before openItem().
 */
class CategoryMenu {
  /**
   * Expands the given sidebar group so its items become clickable.
   *
   * @param {string} groupName - Visible group header text (e.g. "Forms").
   * @returns {this}
   */
  openGroup(groupName) {
    return cy.contains('.group-header', groupName, { timeout: 10000 }).click()
  }

  /**
   * Clicks an item within the currently expanded group(s).
   *
   * @param {string} itemName - Visible item text (e.g. "Practice Form").
   * @returns {this}
   */
  openItem(itemName) {
    return cy.contains('.menu-list .text', itemName, { timeout: 10000 }).click()
  }
}

export default new CategoryMenu()
