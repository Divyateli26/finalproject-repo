const { createBdd } = require('playwright-bdd');
const { AmazonPage } = require('../pages/AmazonPage');

const { Given, When, Then } = createBdd();

// --- Common Step (Automatically uses baseURL from .env / config) ---
Given('Main Amazon website open karta hu', async ({ page }) => {
  await page.goto('/');
});

// --- Scenario 1: Product Search ---
When('Search box me {string} type karke search button click karta hu', async ({ page }, productName) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.searchProduct(productName);
});

Then('Search results list display honi chahiye', async ({ page }) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.verifySearchResultsVisible();
});

Then('Page ke title me {string} hona chahiye', async ({ page }, keyword) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.verifyPageTitleContains(keyword);
});

// --- Scenario 2: Today's Deals Navigation ---
When('Main navigation me {string} link par click karta hu', async ({ page }, linkText) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.clickNavigationLink(linkText);
});

Then('Deals page display hona chahiye', async ({ page }) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.verifyDealsPageURL();
});

// --- Scenario 3: Shopping Cart Page ---
When('Main Cart icon par click karta hu', async ({ page }) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.clickCartIcon();
});

Then('Shopping Cart page display hona chahiye', async ({ page }) => {
  const amazonPage = new AmazonPage(page);
  await amazonPage.verifyCartPage();
});

//ok