import { expect } from '@playwright/test';

export class AmazonPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.searchResults = page.locator('[data-component-type="s-search-result"]');
    this.cartIcon = page.locator('#nav-cart');
    this.cartHeading = page.locator('h1, h2').first();
  }

  async openUrl(url) {
    // 1. Hide automation flag from Amazon's anti-bot script
    await this.page.addInitScript(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });

    await this.page.goto(url, { waitUntil: 'domcontentloaded' });

    // 2. Check if Amazon served CAPTCHA page; if yes, reload once
    const isCaptcha = await this.page.locator('form[action*="validateCaptcha"]').count();
    if (isCaptcha > 0) {
      console.log('⚠️ Amazon CAPTCHA detected on CI runner, reloading page...');
      await this.page.reload({ waitUntil: 'domcontentloaded' });
    }
  }

  async searchProduct(productName) {
    await this.searchBox.waitFor({ state: 'visible', timeout: 30000 });
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  async verifySearchResultsVisible() {
    await expect(this.searchResults.first()).toBeVisible({ timeout: 30000 });
  }

  async verifyPageTitleContains(keyword) {
    const title = await this.page.title();
    expect(title.toLowerCase()).toContain(keyword.toLowerCase());
  }

  async clickNavigationLink(linkText) {
    await this.page.keyboard.press('Escape');
    const navLink = this.page
      .locator('#nav-xshop')
      .getByRole('link', { name: linkText, exact: false })
      .first();

    await navLink.waitFor({ state: 'visible', timeout: 30000 });
    await navLink.click({ force: true });
  }

  async verifyDealsPageURL() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(/(goldbox|deals|deal|prime)/i, { timeout: 30000 });
  }

  async clickCartIcon() {
    await this.cartIcon.waitFor({ state: 'visible', timeout: 30000 });
    await this.cartIcon.click();
  }

  async verifyCartPage() {
    await this.page.waitForLoadState('domcontentloaded');
    expect(this.page.url().toLowerCase()).toContain('cart');
    await expect(this.cartHeading).toBeVisible({ timeout: 30000 });
  }
}