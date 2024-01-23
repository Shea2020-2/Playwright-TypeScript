import test, { expect } from "./basePages.test";
import * as data from "../data/login.cred.json";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// test.describe.serial.only("", () => {});

test.describe.serial("Skip on Failure", () => {
  test("E2E Scearnio", async ({ headerPage, loginPage, commonPage, page }) => {
    await test.step("Login", async () => {
      await headerPage.clickLoginLink();
      expect(page.url()).toBe("https://letcode.in/signin");
      await loginPage.enterUserName(data.email);
      await loginPage.enterPassword(data.pass);
      await loginPage.clickLoginBtn();
      const toaster = await commonPage.toaster();
      expect(await toaster?.textContent()).toContain("Welcome");
      await headerPage.clickSignOutLink();
    });
    await test.step("Search Product", async () => {});

    await test.step("Checkout", async () => {
      await headerPage.clickLoginLink();
      expect(page.url()).toBe("https://letcode.in/signin");
      await loginPage.enterUserName(data.email);
      await loginPage.enterPassword("wrong");
      await loginPage.clickLoginBtn();
      const toaster = await commonPage.toaster();
      expect(await toaster?.textContent()).toContain("Welcome");
      await headerPage.clickSignOutLink();
    });
  });

  // test("Login Negative", async ({
  //   headerPage,
  //   loginPage,
  //   commonPage,
  //   page,
  // }) => {
  //   await headerPage.clickLoginLink();
  //   expect(page.url()).toBe("https://letcode.in/signin");
  //   await loginPage.enterUserName(data.email);
  //   await loginPage.enterPassword("wrong");
  //   await loginPage.clickLoginBtn();
  //   const toaster = await commonPage.toaster();
  //   expect(await toaster?.textContent()).toContain("Welcome");
  //   await headerPage.clickSignOutLink();
  // });
});
