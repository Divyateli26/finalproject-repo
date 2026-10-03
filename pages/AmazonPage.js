const { expect } = require('@playwright/test');

class AmazonPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Locators ---
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.searchResults = page.locator('[data-component-type="s-search-result"]');
    this.cartIcon = page.locator('#nav-cart');
    this.cartHeading = page.locator('h1, h2').first();
  }

  // --- Page Actions / Methods ---

  async openUrl(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  async verifySearchResultsVisible() {
    await expect(this.searchResults.first()).toBeVisible();
  }

  async verifyPageTitleContains(keyword) {
    const title = await this.page.title();
    expect(title.toLowerCase()).toContain(keyword.toLowerCase());
  }

  async clickNavigationLink(linkText) {
    await this.page.keyboard.press('Escape');
    const navLink = this.page.locator('#nav-xshop').getByRole('link', { name: linkText, exact: false }).first();
    await navLink.click({ force: true });
  }

  async verifyDealsPageURL() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(/(goldbox|deals)/i);
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }

  async verifyCartPage() {
    await this.page.waitForLoadState('domcontentloaded');
    expect(this.page.url().toLowerCase()).toContain('cart');
    await expect(this.cartHeading).toBeVisible();
  }
}

module.exports = { AmazonPage };