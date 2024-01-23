import { test } from "@playwright/test";

test("Canva Login", async ({ browser }) => {
  const context = await browser.newContext({
    storageState: "./auth.json",
  });

  const page = await context.newPage();
  await page.goto("https://www.screwfix.com");
  await page.waitForTimeout(5000);
});
