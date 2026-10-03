// @ts-check
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
});

export default defineConfig({
  testDir,
  // CI par single worker se rate-limiting nahi hogi
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: false,
  reporter: 'html',
  timeout: 60 * 1000,
  retries: process.env.CI ? 1 : 0,

  use: {
    baseURL: process.env.BASE_URL || 'https://www.amazon.com',
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    actionTimeout: 30000,
    navigationTimeout: 30000,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    extraHTTPHeaders: {
      'accept-language': 'en-US,en;q=0.9',
    },
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--disable-blink-features=AutomationControlled',
            '--no-sandbox',
            '--disable-setuid-sandbox'
          ]
        }
      },
    },
  ],
});