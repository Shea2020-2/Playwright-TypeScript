import { test } from "@playwright/test";

test(" Tracing", async ({ browser }) => {
  const context = await browser.newContext();
  // start tracing
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
  });
  const page = await context.newPage();
  await page.goto("https://letcode.in");

  // Stop tracing and export it into a zip archive.
  await context.tracing.stop({ path: "trace.zip" });
});
