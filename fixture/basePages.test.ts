import LoginPage from "../page/Login.page";
import HeaderPage from "../page/Header.page";
import CommonFunctions from "../page/common.page";

import { test as baseTest } from "@playwright/test";

const test = baseTest.extend<{
  loginPage: LoginPage;
  headerPage: HeaderPage;
  commonPage: CommonFunctions;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  headerPage: async ({ page }, use) => {
    await use(new HeaderPage(page));
  },
  commonPage: async ({ page }, use) => {
    await use(new CommonFunctions(page));
  },
});

export default test;
export const expect = test.expect;
