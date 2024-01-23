import { test, expect } from "@playwright/test";

test("Capture Btn", async ({ page }) => {
  const targetUrl = "https://igi-pre.globalriskwire.com/workbench/risks/325933";

  // Navigate to the target URL
  await page.goto(targetUrl, { waitUntil: "load" });

  // Your login steps here
  await page.waitForSelector('[placeholder="username/email"]');
  await page.type(
    '[placeholder="username/email"]',
    "shane.mcclean@iginsure.com"
  );
  await page.type('[placeholder="your password"]', "Underpar@1");
  await Promise.all([
    page.click(".auth0-lock-submit"),
    page.waitForLoadState("networkidle"),
  ]);

  // Add your expectations after the navigation
  const currentUrl = page.url();
  expect(currentUrl).toBe(targetUrl);

  // Continue with the rest of your test logic...
});

//     await page.locator(':has-text("Capture').click();
//   await page
//     .locator(
//       ".form > div > .form-element__custom-select-container > .form-element__custom-select > .form-element__select-wrapper > label > .form-element__select"
//     )
//     .first()
//     .click();
//   await page.locator("li").filter({ hasText: "Bermuda" }).click();
//   await page
//     .locator("app-xfi-policy-data div")
//     .filter({ hasText: "Sub Division" })
//     .getByLabel("")
//     .click();
//   await page.locator("li").filter({ hasText: "Bermuda" }).click();
//   await page
//     .locator("app-xfi-policy-data div")
//     .filter({ hasText: "Territory" })
//     .getByLabel("")
//     .click();
//   await page.locator("li").filter({ hasText: "Alaska" }).click();
//   await page
//     .locator("app-xfi-policy-data div")
//     .filter({ hasText: "Sanctions Clause" })
//     .getByLabel("")
//     .click();
//   await page.locator("li").filter({ hasText: "AVN111R" }).click();
//   await page
//     .locator("app-xfi-policy-data div")
//     .filter({ hasText: "Cyber Exclusion" })
//     .getByLabel("")
//     .click();
//   await page.locator("li").filter({ hasText: "AVN48B" }).click();
//   await page
//     .locator("app-xfi-policy-data div")
//     .filter({ hasText: "Producing Office" })
//     .getByLabel("")
//     .click();
//   await page.locator("li").filter({ hasText: "Bermuda" }).click();
//   await page
//     .locator("app-xfi-policy-data")
//     .getByRole("button", { name: "Save" })
//     .click();
// });
