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
  retries: process.env.CI ? 1 : 0,

  use: {
    baseURL: process.env.BASE_URL || 'https://www.amazon.com',
    
    // Headed mode forced (Virtual Xvfb screen ise render karegi)
    headless: false,
    
    trace: 'on-first-retry',
    actionTimeout: 30000,
    navigationTimeout: 30000,
    
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
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
            '--disable-setuid-sandbox',
            '--start-maximized',
          ],
        },
      },
    },
  ],
});