import { createBdd } from 'playwright-bdd';

const { Before, After } = createBdd();

// 1. Scenario start hone par
Before(async ({ page }) => {
  console.log('🚀 Scenario execution started...');
  await page.setViewportSize({ width: 1280, height: 720 });
});

// 2. Scenario finish hone par
After(async ({ page, $testInfo }) => {
  console.log(`🏁 Scenario execution finished with status: ${$testInfo.status}`);

  // Agar test FAIL hota hai toh screenshot HTML Report me attach karein
  if ($testInfo.status !==$testInfo.expectedStatus) {
    try {
      // Screenshot Buffer capture karein
      const screenshot = await page.screenshot({ fullPage: true });

      // Playwright HTML Report ke andar attach karein
      await $testInfo.attach('Failed Scenario Screenshot', {
        body: screenshot,
        contentType: 'image/png',
      });

      console.log('📸 Failure screenshot attached to HTML Report!');
    } catch (error) {
      console.log('⚠️ Could not capture screenshot:', error.message);
    }
  }
});