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
  workers: 1,
  fullyParallel: false,
  reporter: 'html',
  timeout: 60 * 1000,
  retries: process.env.CI ? 2 : 0,

  use: {
    baseURL: process.env.BASE_URL || 'https://www.amazon.com',
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    actionTimeout: 30000,
    navigationTimeout: 30000,
    viewport: { width: 1280, height: 720 },
  },

  /* Chromium ki jagah Firefox configure kiya hai (Amazon Anti-Bot Bypass ke liye) */
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});