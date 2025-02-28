import { expect, test } from "vitest";
import { getUserInfo } from "./Oppgave2.spec";

test("getUserInfo should return the correct object", () => {
  const userInfo = getUserInfo();
  expect(userInfo).toEqual({ name: "Ian", age: 45 });
});
