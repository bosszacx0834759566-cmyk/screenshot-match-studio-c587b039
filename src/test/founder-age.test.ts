import { describe, it, expect } from "vitest";
import { FOUNDER_BIRTH_ISO, FOUNDER_BIRTH_EN, FOUNDER_BIRTH_TH, founderAge } from "@/founder";

describe("founder birth date and age", () => {
  it("birth date is 16 January 2007 in both languages", () => {
    expect(FOUNDER_BIRTH_ISO).toBe("2007-01-16");
    expect(FOUNDER_BIRTH_EN).toBe("16 January 2007");
    expect(FOUNDER_BIRTH_TH).toBe("16 มกราคม 2007");
  });

  it("is 19 on 19 October 2026", () => {
    expect(founderAge(new Date("2026-10-19T15:00:00Z"))).toBe(19);
  });

  it("is still 18 the day before the birthday", () => {
    expect(founderAge(new Date("2026-01-15T00:00:00Z"))).toBe(18);
  });

  it("turns 19 on the birthday itself", () => {
    expect(founderAge(new Date("2026-01-16T00:00:00Z"))).toBe(19);
  });
});
