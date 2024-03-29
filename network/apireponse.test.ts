// import { test } from "@playwright/test";

// test("Read API response", async ({ page }) => {
//   await page.goto("https://letcode.in/elements");

//   const [response] = await Promise.all([
//     page.waitForResponse((res) => res.status() == 200),
//     page.fill("input[name='username']", "ortonikc"),
//     page.click("button"),
//   ]);
//   console.log(response.json());
// });

import { test } from "@playwright/test";

test("Read API response", async ({ page }) => {
  await page.goto("https://letcode.in/elements");

  const [response] = await Promise.all([
    page.waitForResponse(
      (res) =>
        res.status() == 200 &&
        res.url() == "https://api.github.com/users/ortonikc" &&
        res.body().then((b) => {
          console.log(b);
          return b.includes("Koushik Chatterjee");
        })
    ),
    page.fill("input[name='username']", "ortonikc"),
    page.click("button"),
  ]);

  // Log the entire response as text
  console.log(await response.text());

  try {
    // Attempt to parse response as JSON
    console.log(await response.json());
  } catch (error) {
    console.error(`Error parsing JSON: ${error.message}`);
  }
});
