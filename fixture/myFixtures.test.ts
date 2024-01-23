import { test as baseTest } from "@playwright/test";

type shane = {
  hey: string;
};

const fixture = baseTest.extend<shane>({
  hey: "I am the man",
});

export const test = fixture;
export const assert = fixture.expect;
export const describe = fixture.describe;
