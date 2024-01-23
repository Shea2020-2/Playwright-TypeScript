import { chromium, test } from "@playwright/test";

test("Logger", async ({ page }) => {
  // const browser = await chromium.launch({
  //     logger: {
  //         isEnabled: (name, severity) => true,
  //         log: (name, severity, message, args) => console.log(`name = ${name} \n msg = ${message} \n severity = ${severity} \n args = ${args}`)
  //     }
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  //   const consoleLogs = [];
  const consoleLogs: string[] = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const messageText = msg.text() as string; // Explicitly cast to string
      console.log(messageText);
      consoleLogs.push(messageText);
    }
  });
  await page.goto("https://letcode.in/elements");
  const popbtn = page.locator(".fc-button.fc-cta-consent.fc-primary-button");
  await popbtn.click();
  const btn = page.locator("#search");
  await btn.click();
  await page.goto("https://www.amazon.in/asas");

  // write the logs to the winston logger
});
