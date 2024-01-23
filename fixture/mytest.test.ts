import { assert, test } from "./myFixtures.test";

test("My test 1", async ({ hey }, info) => {
  info.skip();
  console.log(hey.toUpperCase());
  let text = hey.toUpperCase();
  //   assert(text).toBe("I AM THE MAN");
  console.log("Is it passed" + info.status);
  //   info.
});
