import { describe, expect, it } from "vitest";
import { fetchData } from "./Oppgave8.spec";

describe("Sequential tests", () => {
  it("Fetching data for ID 1", async () => {
    const result = await fetchData(1);
    expect(result).toBe("Data for ID: 1");
  });

  it("Fetching data for ID 2", async () => {
    const result = await fetchData(2);
    expect(result).toBe("Data for ID: 2");
  });
});

describe("Concurrent tests", () => {
  it.concurrent("Fetching data for ID 3", async () => {
    const result = await fetchData(3);
    expect(result).toBe("Data for ID: 3");
  });

  it.concurrent("Fetching data for ID 4", async () => {
    const result = await fetchData(4);
    expect(result).toBe("Data for ID: 4");
  });
});
