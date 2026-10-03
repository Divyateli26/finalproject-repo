// @ts-check
import 'dotenv/config'; // .env file load karne ke liye
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  reporter: 'html',
  /* CI environment par test retry karega agar fail ho */
  retries: process.env.CI ? 1 : 0,
  use: {
    // .env se BASE_URL padhega, fallback URL amazon.com rakha hai
    baseURL: process.env.BASE_URL || 'https://www.amazon.com',
    
    // Local par browser khulega, GitHub CI par headless chalega
    headless: process.env.CI ? true : false,
    
    trace: 'on-first-retry',
  },

  /* Sirf Chromium/Chrome enable rakha hai */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});