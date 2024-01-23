const url =
  "https://www.amazon.co.uk/PELADN-Computer-Desktop-Gigabit-Ethernet/dp/B0C5XDDTDH/ref=sr_1_2_sspa?crid=14MD2UUK8JK27&keywords=computer&qid=1704893011&sprefix=computer%2Caps%2C57&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";
import { test } from "@playwright/test";

test("Amazon Price Drop Notifaction", async ({ page }) => {
  await page.goto(url);
  const price = await page.$eval(
    "div#corePriceDisplay_desktop_feature_div>div",
    (el) => el.textContent
  );
  // remove currency
  const currentPrice = price?.replace(/[^0-9]/g, "");
  console.log(currentPrice);
});
