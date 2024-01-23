import { expect, Page, test } from "@playwright/test";

test.describe("Suite Demo", () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://letcode.in/");
  });

  test("Open Letcode and Verify Title", async ({}) => {
    const title = await page.title();
    expect(title).toBe("LetCode with Koushik");
  });

  test("Open Letcode and Login", async ({}) => {
    // const title = await page.title();
    // expect(title).toBe("LetCode with Koushik");
    await Promise.all([
      page.waitForNavigation,
      page.click("text=/.*Log in.*/"),
    ]);
    await page.click('input[name="email"]');
    await page.fill('input[name="email"]', "Shane.p.mcclean@gmail.com");
    await page.fill('input[name="password"]', "Password");
    await Promise.all([
      page.waitForNavigation,
      page.click("//button[normalize-space(.)='LOGIN']"),
    ]);
    expect(page.url()).toBe("https://letcode.in/signin");
  });
});
