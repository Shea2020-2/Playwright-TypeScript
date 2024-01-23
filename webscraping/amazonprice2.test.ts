const url =
  "https://www.sportsdirect.com/under-armour-box-sportstyle-t-shirt-mens-592853#colcode=59285303";

import { test } from "@playwright/test";
// import * as auth from "./auth.json";

const nodemailer = require("nodemailer");

test("Sports Direct Price Drop Notifaction", async ({ page }) => {
  await page.goto(url);
  const price = await page.$eval(
    ".pdpPrice #lblSellingPrice",
    (el) => el.textContent
  );
  // remove currency
  const currentPrice = price?.replace("£", "").split(".")[0];
  console.log(currentPrice);

  // send email via nodemailer
  //   if (Number(currentPrice) < 14) {
  sendEmailNotification(currentPrice);
});

const email = "shanemcclean6@gmail.com";
const password = "qowk gcun lika cpwc";

function sendEmailNotification(currentPrice: string | undefined) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  transporter.sendMail(
    {
      from: email,
      to: "shanemcclean2022@gmail.com",
      subject: "Sports Direct has dropped",
      text: `The price of the product ${url} has dropped to ${currentPrice}`,
      html: `<p>The Price of the product has dropped to ${currentPrice}</p>
      Click to open <a href="${url}">${url}</a>`,
    },
    (err: any, info: any) => {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email Sent:", info);
      }
    }
  );
}
