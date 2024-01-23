import { expect, test } from "@playwright/test";

///LOcal Config

test.use({
  baseURL: "https://www.christinaham.com/",
});

test("Goto Sign up page", async ({ page }) => {
  await page.goto("/about");
  expect(page.url()).toBe("https://www.christinaham.com/about");
});

// test("Goto Login up page", async ({ page }) => {
//   await page.goto("/signin");
//   expect(page.url()).toBe("https://letcode.in/signin");
// });

// test("Goto workspace up page", async ({ page }) => {
//   await page.goto("/test");
//   expect(page.url()).toBe("https://letcode.in/test");
// });
