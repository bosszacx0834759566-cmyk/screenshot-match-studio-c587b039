import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PROJECT_ID = "e3ec61f6-ba74-4c00-8a8e-507214c8b1d1";
const dir = join(__dirname, "../assets");
const required = ["iss-video.mp4", "goddard.jpg", "oppenheimer.jpg", "boss.png"];

describe("media assets", () => {
  for (const name of required) {
    it(`${name} pointer exists and belongs to this project`, () => {
      const a = JSON.parse(readFileSync(join(dir, `${name}.asset.json`), "utf8"));
      expect(a.project_id).toBe(PROJECT_ID);
      expect(a.url).toMatch(/^\/__l5e\/assets-v1\//);
    });
  }
  it("no asset pointer references another project", () => {
    for (const f of readdirSync(dir).filter((f) => f.endsWith(".asset.json"))) {
      expect(JSON.parse(readFileSync(join(dir, f), "utf8")).project_id).toBe(PROJECT_ID);
    }
  });
});
