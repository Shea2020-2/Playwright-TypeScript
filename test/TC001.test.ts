import * as data from "../data/login.cred.json";
import { BrowserContext, expect, test, Page } from "@playwright/test";
import CommonFunctions from "../page/common.page";
import HeaderPage from "../page/Header.page";
import LoginPage from "../page/Login.page";

test.describe("TC001", () => {
  let header: HeaderPage;
  let login: LoginPage;
  let common: CommonFunctions;
  let page: Page;
  let context: BrowserContext;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    await context.tracing.start({
      screenshots: true,
      snapshots: true,
    });

    page = await context.newPage();
    header = new HeaderPage(page);
    login = new LoginPage(page);
    common = new CommonFunctions(page);
  });

  test.afterAll(async () => {
    await context.tracing.stop({
      path: "trace.zip",
    });
  });

  test.beforeEach(async () => {
    await page.goto("https://letcode.in");
  });

  test("Login positive", async () => {
    expect(page.url()).toBe("https://letcode.in/");
    await header.clickLoginLink();
    expect(page.url()).toBe("https://letcode.in/signin");
    await login.enterUserName(data.email);
    await login.enterPassword(data.pass);
    await login.clickLoginBtn();
    const toaster = await common.toaster();
    expect(await toaster?.textContent()).toContain("Welcome");
    await header.clickSignOutLink();
  });
  test("Login again", async () => {
    await page.goto("https://letcode.in");
    await header.clickLoginLink();
    await login.login("shanemcclean2022@gmail.com", data.pass);
    await page.waitForNavigation();
    expect(page.url()).toBe("https://letcode.in/");
  });
});
