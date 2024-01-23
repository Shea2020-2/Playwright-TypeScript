import { PlaywrightTestConfig } from "playwright/test";
import { log } from "winston";

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    browserName: "chromium",
    screenshot: "on",
    trace: "retain-on-failure",
    baseURL: "https://letcode.in",
    // launchOptions: {
    //   logger: {
    //     isEnabled: (name, severity) => true,
    //     log: (name, severity, message, args) => console.log(name, severity),
    //   },
    // },
    // video: "retain-on-failure",
    // // slowMo: 1000
  },

  // timeout: 2000 * 60,
  // grep: [new RegExp("@smoke"), new RegExp("@reg")],
  testMatch: ["report.test.ts"],
  retries: 0,
  reporter: "./customReport/myReporter.ts",
  // reporter: [
  //   ["dot"],
  //   ["json", { outputFile: "test-result.json" }],
  //   ["experimental-allure-playwright"],
  // ],
};

export default config;
