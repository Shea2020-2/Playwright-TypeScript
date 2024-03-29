import { test } from "@playwright/test";

test("Open Letcode and Verify Title", async ({ page }) => {
  await page.goto("https://www.freelancer.in/login");

  let btn = await page.$("button", {
    strict: true,
  });
  await btn?.hover();
  await btn?.click();
});

test.only("Locator API", async ({ page }) => {
  await page.goto("https://letcode.in/elements");
  const ele = page.locator("input[name='username']");
  await ele?.fill("ortonikc");
  await ele?.press("Enter");
  await page.waitForSelector("app-gitrepos ol li");
  const repos = page.locator("app-gitrepos ol li");
  console.log(await repos.count());
  //   console.log(await repos.allInnerTexts());

  let c = await repos.count();
  for (let i = 0; i < c; i++) {
    let text = await repos.nth(i).textContent();
    console.log(text);
  }
});
