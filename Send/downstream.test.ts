import { test } from "@playwright/test";

test("Test FI", async ({ page }) => {
  await page.goto(
    "https://riskwire.eu.auth0.com/login?state=hKFo2SByaE4zbFlhVmxHc1VZZUYwWmY3V0FZbm0wXzJHZ0hLQqFupWxvZ2luo3RpZNkgdkdLWjI1ZC1pNEFFamVDNk5jdWxaQ2Ezbmh4TnotTXWjY2lk2SBiMG5mUXlnS3FRUE5nZ3dzT1RPcDN6VXduSllDTHlPSQ&client=b0nfQygKqQPNggwsOTOp3zUwnJYCLyOI&protocol=samlp&SAMLRequest=fZJdT4MwGIXv%2FRWk94VSmB%2FNwBB1yXQ6PzYTvTEdFNY4Wta3DOevt2PO6I2XbZ5zTnNOh%2Bcf9crbCANSqwSFPkGeULkupKoSNJ%2BN8Ck6T4%2BGwOsVbVjW2qV6FOtWgPUyAGGs011oBW0tzJMwG5mL%2BeMkQUtrG2BBICuJGyN87pS%2BaHHnlJj6vOaf2uVUSlrt57oO%2BoRAFg6GxhkK5F06Vipu%2B6cdDI2E9046R9H2puRH3QQLosqHbXWzfri%2Fq6oOprNpE33OO3X9cjHZTsfIG18m6O2Y8rCMFjkO4zLCcRifYE5ijk%2FOSjqIab4oKHUoQCvGCixXNkGU0AiHFJN4RgkLYzYg%2FjGlr8h7PpRHd%2BW5OhWwfV0Jao1imoMEpngtgNmcPWW3E%2BZQ1hhtda5XKN23y%2FpA4420qbn9X7u7kQUue5QJZaXd%2Fsn%2BX84Py6F0h%2B3HYN9rMGjYz1BvH%2Bubl6tsmZFh8PuV6ffx75dIvwA%3D&RelayState=H4sIAAAAAAAAALvDbCqhM6f9s191mHenfeLeoH8VOgdYLmzWuRS9YmaZZxMAaEJ6UCAAAAA.3"
  );

  // Log in
  await page.waitForSelector('[placeholder="username/email"]');
  await page.type(
    '[placeholder="username/email"]',
    "shane.mcclean@iginsure.com"
  );
  await page.type('[placeholder="your password"]', "Underpar@1");
  await page.click(".auth0-lock-submit");
  await page.waitForNavigation();

  // Navigate to the dashboard

  await page.goto("https://igi-pre.globalriskwire.com/workbench/dashboard");

  // Create a new submission
  // Page 1
  await page.waitForSelector('a[title="New Submission"]');
  await page.click('a[title="New Submission"]');
  await page.click('label[for="radio_risk-processing-statuslogged"]');
  await page.click('label[for="radio_contract-typedirect"]');
  await page.getByPlaceholder("Type to search...").nth(1).click();
  await page.getByPlaceholder("Type to search...").nth(1).fill("FI");
  await page
    .locator("li")
    .filter({ hasText: "FI AND C LONDON LIMITED" })
    .click();
  await page.getByRole("button", { name: "Next" }).click();
  // Page 2

  await page
    .locator("app-submission-form-parties div")
    .filter({ hasText: "Product" })
    .getByLabel("")
    .click();
  await page
    .locator("li")
    .filter({ hasText: "Financial Institutions" })
    .click();

  await page
    .locator("app-predictive-insured-party")
    .getByPlaceholder("Type to search...")
    .click();
  await page
    .locator("app-predictive-insured-party")
    .getByPlaceholder("Type to search...")
    .fill("RHR");
  await page.locator("li").filter({ hasText: "REINS HUB REASURANS" }).click();
  await page.getByRole("button", { name: "Next" }).click();

  //Page 3
  await page
    .locator("app-submission-form-details div")
    .filter({ hasText: "Inception date" })
    .locator("svg")
    .click();
  await page.getByLabel("21 Dec 2023", { exact: true }).click();
  await page.getByRole("button", { name: "Finish" }).click();

  // Risk Actions
  // Capture Policy Data
  // await page.click('//text()[contains(.,"ASSIGNEE")]/following-sibling::input');
});

// test("Test PI", async ({ page }) => {
//   await page.goto(
//     "https://riskwire.eu.auth0.com/login?state=hKFo2SByaE4zbFlhVmxHc1VZZUYwWmY3V0FZbm0wXzJHZ0hLQqFupWxvZ2luo3RpZNkgdkdLWjI1ZC1pNEFFamVDNk5jdWxaQ2Ezbmh4TnotTXWjY2lk2SBiMG5mUXlnS3FRUE5nZ3dzT1RPcDN6VXduSllDTHlPSQ&client=b0nfQygKqQPNggwsOTOp3zUwnJYCLyOI&protocol=samlp&SAMLRequest=fZJdT4MwGIXv%2FRWk94VSmB%2FNwBB1yXQ6PzYTvTEdFNY4Wta3DOevt2PO6I2XbZ5zTnNOh%2Bcf9crbCANSqwSFPkGeULkupKoSNJ%2BN8Ck6T4%2BGwOsVbVjW2qV6FOtWgPUyAGGs011oBW0tzJMwG5mL%2BeMkQUtrG2BBICuJGyN87pS%2BaHHnlJj6vOaf2uVUSlrt57oO%2BoRAFg6GxhkK5F06Vipu%2B6cdDI2E9046R9H2puRH3QQLosqHbXWzfri%2Fq6oOprNpE33OO3X9cjHZTsfIG18m6O2Y8rCMFjkO4zLCcRifYE5ijk%2FOSjqIab4oKHUoQCvGCixXNkGU0AiHFJN4RgkLYzYg%2FjGlr8h7PpRHd%2BW5OhWwfV0Jao1imoMEpngtgNmcPWW3E%2BZQ1hhtda5XKN23y%2FpA4420qbn9X7u7kQUue5QJZaXd%2Fsn%2BX84Py6F0h%2B3HYN9rMGjYz1BvH%2Bubl6tsmZFh8PuV6ffx75dIvwA%3D&RelayState=H4sIAAAAAAAAALvDbCqhM6f9s191mHenfeLeoH8VOgdYLmzWuRS9YmaZZxMAaEJ6UCAAAAA.3"
//   );

//   // Log in
//   await page.waitForSelector('[placeholder="username/email"]');
//   await page.type(
//     '[placeholder="username/email"]',
//     "shane.mcclean@iginsure.com"
//   );
//   await page.type('[placeholder="your password"]', "Underpar@1");
//   await page.click(".auth0-lock-submit");
//   await page.waitForNavigation();

//   // Navigate to the dashboard

//   await page.goto("https://igi-pre.globalriskwire.com/workbench/dashboard");

//   // Create a new submission
//   // Page 1
//   await page.waitForSelector('a[title="New Submission"]');
//   await page.click('a[title="New Submission"]');
//   await page.click('label[for="radio_risk-processing-statuslogged"]');
//   await page.click('label[for="radio_contract-typedirect"]');
//   await page.getByPlaceholder("Type to search...").nth(1).click();
//   await page.getByPlaceholder("Type to search...").nth(1).fill("PI");
//   await page
//     .locator("li")
//     .filter({ hasText: "PI & CO PROPERTIES LTD" })
//     .click();
//   await page.getByRole("button", { name: "Next" }).click();
//   // Page 2

//   await page
//     .locator("app-submission-form-parties div")
//     .filter({ hasText: "Product" })
//     .getByLabel("")
//     .click();
//   await page
//     .locator("li")
//     .filter({ hasText: "Professional Indemnity" })
//     .click();

//   await page
//     .locator("app-predictive-insured-party")
//     .getByPlaceholder("Type to search...")
//     .click();
//   await page
//     .locator("app-predictive-insured-party")
//     .getByPlaceholder("Type to search...")
//     .fill("RHR");
//   await page.locator("li").filter({ hasText: "REINS HUB REASURANS" }).click();
//   await page.getByRole("button", { name: "Next" }).click();

//   //Page 3
//   await page
//     .locator("app-submission-form-details div")
//     .filter({ hasText: "Inception date" })
//     .locator("svg")
//     .click();
//   await page.getByLabel("21 Dec 2023", { exact: true }).click();
//   await page.getByRole("button", { name: "Finish" }).click();

//   // Risk Actions
//   // Capture Policy Data
//   // await page.click('//text()[contains(.,"ASSIGNEE")]/following-sibling::input');
// });

// test("Test Downstream", async ({ page }) => {
//   await page.goto(
//     "https://riskwire.eu.auth0.com/login?state=hKFo2SByaE4zbFlhVmxHc1VZZUYwWmY3V0FZbm0wXzJHZ0hLQqFupWxvZ2luo3RpZNkgdkdLWjI1ZC1pNEFFamVDNk5jdWxaQ2Ezbmh4TnotTXWjY2lk2SBiMG5mUXlnS3FRUE5nZ3dzT1RPcDN6VXduSllDTHlPSQ&client=b0nfQygKqQPNggwsOTOp3zUwnJYCLyOI&protocol=samlp&SAMLRequest=fZJdT4MwGIXv%2FRWk94VSmB%2FNwBB1yXQ6PzYTvTEdFNY4Wta3DOevt2PO6I2XbZ5zTnNOh%2Bcf9crbCANSqwSFPkGeULkupKoSNJ%2BN8Ck6T4%2BGwOsVbVjW2qV6FOtWgPUyAGGs011oBW0tzJMwG5mL%2BeMkQUtrG2BBICuJGyN87pS%2BaHHnlJj6vOaf2uVUSlrt57oO%2BoRAFg6GxhkK5F06Vipu%2B6cdDI2E9046R9H2puRH3QQLosqHbXWzfri%2Fq6oOprNpE33OO3X9cjHZTsfIG18m6O2Y8rCMFjkO4zLCcRifYE5ijk%2FOSjqIab4oKHUoQCvGCixXNkGU0AiHFJN4RgkLYzYg%2FjGlr8h7PpRHd%2BW5OhWwfV0Jao1imoMEpngtgNmcPWW3E%2BZQ1hhtda5XKN23y%2FpA4420qbn9X7u7kQUue5QJZaXd%2Fsn%2BX84Py6F0h%2B3HYN9rMGjYz1BvH%2Bubl6tsmZFh8PuV6ffx75dIvwA%3D&RelayState=H4sIAAAAAAAAALvDbCqhM6f9s191mHenfeLeoH8VOgdYLmzWuRS9YmaZZxMAaEJ6UCAAAAA.3"
//   );

//   // Log in
//   await page.waitForSelector('[placeholder="username/email"]');
//   await page.type(
//     '[placeholder="username/email"]',
//     "shane.mcclean@iginsure.com"
//   );
//   await page.type('[placeholder="your password"]', "Underpar@1");
//   await page.click(".auth0-lock-submit");
//   await page.waitForNavigation();

//   // Navigate to the dashboard

//   await page.goto("https://igi-pre.globalriskwire.com/workbench/dashboard");

//   // Create a new submission
//   // Page 1
//   await page.waitForSelector('a[title="New Submission"]');
//   await page.click('a[title="New Submission"]');
//   await page.click('label[for="radio_risk-processing-statuslogged"]');
//   await page.click('label[for="radio_contract-typedirect"]');
//   await page.getByPlaceholder("Type to search...").nth(1).click();
//   await page.getByPlaceholder("Type to search...").nth(1).fill("Down");
//   await page.locator("li").filter({ hasText: "DOWN & DIRTY LTD" }).click();
//   await page.getByRole("button", { name: "Next" }).click();
//   // Page 2

//   await page
//     .locator("app-submission-form-parties div")
//     .filter({ hasText: "Product" })
//     .getByLabel("")
//     .click();
//   await page.locator("li").filter({ hasText: "Downstream Energy" }).click();

//   await page
//     .locator("app-predictive-insured-party")
//     .getByPlaceholder("Type to search...")
//     .click();
//   await page
//     .locator("app-predictive-insured-party")
//     .getByPlaceholder("Type to search...")
//     .fill("RHR");
//   await page.locator("li").filter({ hasText: "REINS HUB REASURANS" }).click();
//   await page.getByRole("button", { name: "Next" }).click();

//   //Page 3
//   await page
//     .locator("app-submission-form-details div")
//     .filter({ hasText: "Inception date" })
//     .locator("svg")
//     .click();
//   await page.getByLabel("21 Dec 2023", { exact: true }).click();
//   await page.getByRole("button", { name: "Finish" }).click();

//   // Risk Actions
//   // Capture Policy Data
//   // await page.click('//text()[contains(.,"ASSIGNEE")]/following-sibling::input');
// });
