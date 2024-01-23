import { test } from "@playwright/test";

test("Signin into Git", async ({ page }) => {
  await page.goto("https://github.com/login");
  await page.fill(
    "input:below(:text('Username or email address'))",
    "Shea2020-2"
  );
  await page.fill("#password:below(:text('Password'))", "Underpar@1");
});

//   await page.waitForTimeout(3000);
// thread.sleep();

// test("In depth", async ({ page }) => {
//   await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");
//   //   await page.pause();
//   await page.fill(
//     "input:below(:text('firstname')):right-of(:text('lastname'))",
//     "McClean"
//   );
// });
