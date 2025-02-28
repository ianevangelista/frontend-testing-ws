import { beforeEach, describe, expect, it } from "vitest";
import { Counter } from "./Oppgave7.spec";

describe("Counter", () => {
  let counter: Counter;

  beforeEach(() => {
    counter = new Counter(); // Ny instans før hver test
  });

  it("should have initial value of 0", () => {
    expect(counter.getValue()).toBe(0);
  });

  it("should increment to be 1", () => {
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });

  it("should decrement to be -1", () => {
    counter.decrement();
    expect(counter.getValue()).toBe(-1);
  });
});
