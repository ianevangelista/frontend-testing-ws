import { expect, test } from "vitest";
import { returnRandomUser, users } from "./Oppgave6.spec";

test("returnRandomUser should return one of the users from the list", () => {
  const user = returnRandomUser();

  expect(user).toBeOneOf(users);
});
